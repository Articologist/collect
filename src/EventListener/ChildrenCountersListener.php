<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Entity\Album;
use App\Entity\Collection;
use App\Entity\Wishlist;
use App\Enum\VisibilityEnum;
use App\Service\CounterHelper;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\UnitOfWork;

class ChildrenCountersListener
{
    private EntityManagerInterface $em;
    private UnitOfWork $uow;

    public function onFlush(OnFlushEventArgs $args)
    {
        $this->em = $args->getEntityManager();
        $this->uow = $this->em->getUnitOfWork();

        foreach ($this->uow->getScheduledEntityInsertions() as $entity) {
            if ($entity instanceof Collection || $entity instanceof Album || $entity instanceof Wishlist) {
                $this->handlePersist($entity);
            }
        }

        foreach ($this->uow->getScheduledEntityDeletions() as $entity) {
            if ($entity instanceof Collection || $entity instanceof Album || $entity instanceof Wishlist) {
                $this->handleDelete($entity);
            }
        }

        foreach ($this->uow->getScheduledEntityUpdates() as $entity) {
            if ($entity instanceof Collection || $entity instanceof Album || $entity instanceof Wishlist) {
                $changeset = $this->uow->getEntityChangeSet($entity);
                if (\array_key_exists('parent', $changeset)) {
                    $this->handleUpdate($entity, $changeset['parent'][0], $changeset['parent'][1]);
                }
            }
        }
    }

    private function handlePersist(Collection|Album|Wishlist $entity)
    {
        $entity->setCounters(CounterHelper::getEmptyCounters());

        $parent = $entity->getParent();
        while ($parent) {
            $counters = $parent->getCounters();
            $counters['children'][$entity->getVisibility()]++;
            $parent->setCounters($counters);
            $this->uow->recomputeSingleEntityChangeSet($this->em->getClassMetadata(get_class($parent)), $parent);

            $parent = $parent->getParent();
        }
    }

    private function handleDelete(Collection|Album|Wishlist $entity)
    {
        $parent = $entity->getParent();
        while ($parent) {
            $this->decreaseCounters($parent, $entity);
            $parent = $parent->getParent();
        }
    }

    private function handleUpdate(Collection|Album|Wishlist $entity, Collection|Album|Wishlist|null $oldParent, Collection|Album|Wishlist|null $newParent)
    {
        while ($oldParent) {
            $this->decreaseCounters($oldParent, $entity);
            $oldParent = $oldParent->getParent();
        }

        while ($newParent) {
            $this->increaseCounters($newParent, $entity);
            $newParent = $newParent->getParent();
        }
    }

    private function increaseCounters(Collection|Album|Wishlist $entity, Collection|Album|Wishlist $parent)
    {
        $parentCounters = $parent->getCounters();
        $counters = $entity->getCounters();

        $counters['children'][VisibilityEnum::VISIBILITY_PUBLIC] += $parentCounters['children'][VisibilityEnum::VISIBILITY_PUBLIC];
        $counters['children'][VisibilityEnum::VISIBILITY_INTERNAL] += $parentCounters['children'][VisibilityEnum::VISIBILITY_INTERNAL];
        $counters['children'][VisibilityEnum::VISIBILITY_PRIVATE] += $parentCounters['children'][VisibilityEnum::VISIBILITY_PRIVATE];
        $counters['children'][$parent->getVisibility()]++;

        $counters['elements'][VisibilityEnum::VISIBILITY_PUBLIC] += $parentCounters['elements'][VisibilityEnum::VISIBILITY_PUBLIC];
        $counters['elements'][VisibilityEnum::VISIBILITY_INTERNAL] += $parentCounters['elements'][VisibilityEnum::VISIBILITY_INTERNAL];
        $counters['elements'][VisibilityEnum::VISIBILITY_PRIVATE] += $parentCounters['elements'][VisibilityEnum::VISIBILITY_PRIVATE];
        $entity->setCounters($counters);

        $this->uow->recomputeSingleEntityChangeSet($this->em->getClassMetadata(get_class($entity)), $entity);
    }

    private function decreaseCounters(Collection|Album|Wishlist $entity, Collection|Album|Wishlist $parent)
    {
        $parentCounters = $parent->getCounters();
        $counters = $entity->getCounters();

        $counters['children'][VisibilityEnum::VISIBILITY_PUBLIC] -= $parentCounters['children'][VisibilityEnum::VISIBILITY_PUBLIC];
        $counters['children'][VisibilityEnum::VISIBILITY_INTERNAL] -= $parentCounters['children'][VisibilityEnum::VISIBILITY_INTERNAL];
        $counters['children'][VisibilityEnum::VISIBILITY_PRIVATE] -= $parentCounters['children'][VisibilityEnum::VISIBILITY_PRIVATE];
        $counters['children'][$parent->getVisibility()]--;

        $counters['elements'][VisibilityEnum::VISIBILITY_PUBLIC] -= $parentCounters['elements'][VisibilityEnum::VISIBILITY_PUBLIC];
        $counters['elements'][VisibilityEnum::VISIBILITY_INTERNAL] -= $parentCounters['elements'][VisibilityEnum::VISIBILITY_INTERNAL];
        $counters['elements'][VisibilityEnum::VISIBILITY_PRIVATE] -= $parentCounters['elements'][VisibilityEnum::VISIBILITY_PRIVATE];
        $entity->setCounters($counters);

        $this->uow->recomputeSingleEntityChangeSet($this->em->getClassMetadata(get_class($entity)), $entity);
    }
}
