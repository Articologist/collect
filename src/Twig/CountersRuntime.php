<?php

declare(strict_types=1);

namespace App\Twig;

use App\Entity\Album;
use App\Entity\Collection;
use App\Entity\User;
use App\Entity\Wishlist;
use App\Enum\VisibilityEnum;
use App\Service\ContextHandler;
use Symfony\Component\Security\Core\Security;
use Twig\Extension\RuntimeExtensionInterface;

class CountersRuntime implements RuntimeExtensionInterface
{
    private ContextHandler $contextHandler;
    private Security $security;

    public function __construct(ContextHandler $contextHandler, Security $security)
    {
        $this->contextHandler = $contextHandler;
        $this->security = $security;
    }

    public function getChildrenCounter(Collection|Album|Wishlist|array $object): int
    {
        $counter = 0;
        $allowedVisibilities = $this->getAllowedVisibilities();

        if (is_array($object)) {
            foreach ($object as $entity) {
                foreach ($allowedVisibilities as $visibility) {
                    $counter += $entity->getCounters()['children'][$visibility];
                }
            }
        } else {
            foreach ($allowedVisibilities as $visibility) {
                $counter += $object->getCounters()['children'][$visibility];
            }
        }

        return $counter;
    }

    public function getElementsCounter(Collection|Album|Wishlist|array $object): int
    {
        $counter = 0;
        $allowedVisibilities = $this->getAllowedVisibilities();

        if (is_array($object)) {
            foreach ($object as $entity) {
                foreach ($allowedVisibilities as $visibility) {
                    $counter += $entity->getCounters()['elements'][$visibility];
                }
            }
        } else {
            foreach ($allowedVisibilities as $visibility) {
                $counter += $object->getCounters()['elements'][$visibility];
            }
        }

        return $counter;
    }

    private function getAllowedVisibilities(): array
    {
        $allowedVisibilities = [];

        //Everyone can see public elements
        $allowedVisibilities[] = VisibilityEnum::VISIBILITY_PUBLIC;

        //In shared context
        if ($this->contextHandler->getContext() === 'shared') {
            //A logged user can see internal elements
            if ($this->security->getUser() instanceof User) {
                $allowedVisibilities[] = VisibilityEnum::VISIBILITY_INTERNAL;
            }
        } else {
            //In default context user can see everything
            $allowedVisibilities[] = VisibilityEnum::VISIBILITY_INTERNAL;
            $allowedVisibilities[] = VisibilityEnum::VISIBILITY_PRIVATE;
        }

        return $allowedVisibilities;
    }
}