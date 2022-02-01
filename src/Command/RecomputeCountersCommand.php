<?php

namespace App\Command;

use App\Enum\VisibilityEnum;
use App\Repository\AlbumRepository;
use App\Repository\CollectionRepository;
use App\Repository\ItemRepository;
use App\Repository\PhotoRepository;
use App\Repository\WishlistRepository;
use App\Repository\WishRepository;
use App\Service\CounterHelper;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class RecomputeCountersCommand extends Command
{
    public function __construct(
        private ManagerRegistry $managerRegistry,
        private CollectionRepository $collectionRepository, private ItemRepository $itemRepository,
        private AlbumRepository $albumRepository, private PhotoRepository $photoRepository,
        private WishlistRepository $wishlistRepository, private WishRepository $wishRepository,
    )
    {
        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setName('koillection:task:recompute-counters')
            ->setDescription('Recompute counters')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $rootCollections = $this->collectionRepository->findBy(['parent' => null]);
        if (!empty($rootCollections)) {
            $this->computeCounters($rootCollections, $this->collectionRepository, $this->itemRepository, 'collection');
            $this->managerRegistry->getManager()->flush();
        }

        $rootAlbums = $this->albumRepository->findBy(['parent' => null]);
        if (!empty($rootAlbums)) {
            $this->computeCounters($rootAlbums, $this->albumRepository, $this->photoRepository, 'album');
            $this->managerRegistry->getManager()->flush();
        }

        $rootWishlists = $this->wishlistRepository->findBy(['parent' => null]);
        if (!empty($rootWishlists)) {
            $this->computeCounters($rootWishlists, $this->wishlistRepository, $this->wishRepository, 'wishlist');
            $this->managerRegistry->getManager()->flush();
        }

        return Command::SUCCESS;
    }

    private function computeCounters($results, $collectionRepository, $elementRepository, $collectionProperty)
    {
        $totalCounters = CounterHelper::getEmptyCounters();

        foreach ($results as $result) {
            $result->setCounters(CounterHelper::getEmptyCounters());
            $counters = $this->updateCounters($result, $collectionRepository, $elementRepository, $collectionProperty);
            if (!$result->getChildren()->isEmpty()) {
                $counters = $this->mergeCounters($counters, $this->computeCounters($result->getChildren()->toArray(), $collectionRepository, $elementRepository, $collectionProperty));
            }

            $result->setCounters($counters);
            $totalCounters = $this->mergeCounters($totalCounters, $counters);
        }

        return $totalCounters;
    }

    private function updateCounters($result, $collectionRepository, $elementRepository, $collectionProperty) : array
    {
        return [
            'children' => [
                VisibilityEnum::VISIBILITY_PUBLIC => $collectionRepository->count(['parent' => $result->getId(), 'visibility' => VisibilityEnum::VISIBILITY_PUBLIC]),
                VisibilityEnum::VISIBILITY_INTERNAL => $collectionRepository->count(['parent' => $result->getId(), 'visibility' => VisibilityEnum::VISIBILITY_INTERNAL]),
                VisibilityEnum::VISIBILITY_PRIVATE => $collectionRepository->count(['parent' => $result->getId(), 'visibility' => VisibilityEnum::VISIBILITY_PRIVATE])
            ],
            'elements' => [
                VisibilityEnum::VISIBILITY_PUBLIC => $elementRepository->count([$collectionProperty => $result->getId(), 'visibility' => VisibilityEnum::VISIBILITY_PUBLIC]),
                VisibilityEnum::VISIBILITY_INTERNAL => $elementRepository->count([$collectionProperty => $result->getId(), 'visibility' => VisibilityEnum::VISIBILITY_INTERNAL]),
                VisibilityEnum::VISIBILITY_PRIVATE => $elementRepository->count([$collectionProperty => $result->getId(), 'visibility' => VisibilityEnum::VISIBILITY_PRIVATE])
            ]
        ];
    }

    private function mergeCounters(array $array1, array $array2)
    {
        $array1['children'][VisibilityEnum::VISIBILITY_PUBLIC] += $array2['children'][VisibilityEnum::VISIBILITY_PUBLIC];
        $array1['children'][VisibilityEnum::VISIBILITY_INTERNAL] += $array2['children'][VisibilityEnum::VISIBILITY_INTERNAL];
        $array1['children'][VisibilityEnum::VISIBILITY_PRIVATE] += $array2['children'][VisibilityEnum::VISIBILITY_PRIVATE];

        $array1['elements'][VisibilityEnum::VISIBILITY_PUBLIC] += $array2['elements'][VisibilityEnum::VISIBILITY_PUBLIC];
        $array1['elements'][VisibilityEnum::VISIBILITY_INTERNAL] += $array2['elements'][VisibilityEnum::VISIBILITY_INTERNAL];
        $array1['elements'][VisibilityEnum::VISIBILITY_PRIVATE] += $array2['elements'][VisibilityEnum::VISIBILITY_PRIVATE];

        return $array1;
    }
}
