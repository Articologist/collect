<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Entity\Album;
use App\Entity\Collection;
use App\Entity\Item;
use App\Entity\Photo;
use App\Entity\Wish;
use App\Entity\Wishlist;
use App\Enum\VisibilityEnum;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\UnitOfWork;

class ItemCountersListener
{
    private EntityManagerInterface $em;
    private UnitOfWork $uow;

    public function onFlush(OnFlushEventArgs $args)
    {
        $this->em = $args->getEntityManager();
        $this->uow = $this->em->getUnitOfWork();

        foreach ($this->uow->getScheduledEntityInsertions() as $entity) {
            if ($entity instanceof Item || $entity instanceof Photo || $entity instanceof Wish) {
                $this->handlePersist($entity);
            }
        }

        foreach ($this->uow->getScheduledEntityDeletions() as $entity) {
            if ($entity instanceof Item || $entity instanceof Photo || $entity instanceof Wish) {
                $this->handleDelete($entity);
            }
        }

        foreach ($this->uow->getScheduledEntityUpdates() as $entity) {
            if ($entity instanceof Item || $entity instanceof Photo || $entity instanceof Wish) {
                $this->handleUpdate($entity);
            }
        }
    }

    private function handlePersist(Item|Photo|Wish $entity)
    {
        $parent = match (get_class($entity)) {
            Item::class => $entity->getCollection(),
            Photo::class => $entity->getAlbum(),
            Wish::class => $entity->getWishlist(),
        };

        while ($parent) {
            $counters = $parent->getCounters();
            $counters['elements'][$entity->getVisibility()]++;
            $parent->setCounters($counters);
            $this->uow->recomputeSingleEntityChangeSet($this->em->getClassMetadata(get_class($parent)), $parent);

            $parent = $parent->getParent();
        }
    }

    private function handleDelete(Item|Photo|Wish $entity)
    {
        $parent = match (get_class($entity)) {
            Item::class => $entity->getCollection(),
            Photo::class => $entity->getAlbum(),
            Wish::class => $entity->getWishlist(),
        };

        //If parent is being deleted, counters are updated in ChildrenCountersListener
        if ($this->uow->isScheduledForDelete($parent)) {
            return;
        }

        while ($parent) {
            $this->decreaseCounters($parent, $entity);
            $parent = $parent->getParent();
        }
    }

    private function handleUpdate(Item|Photo|Wish $entity)
    {
        $changeset = $this->uow->getEntityChangeSet($entity);

        $oldParent = null;
        $newParent = null;
        if ($entity instanceof Item && \array_key_exists('collection', $changeset)) {
            $oldParent = $changeset['collection'][0];
            $newParent = $changeset['collection'][1];
        } elseif ($entity instanceof Photo && \array_key_exists('album', $changeset)) {
            $oldParent = $changeset['album'][0];
            $newParent = $changeset['album'][1];
        } elseif ($entity instanceof Wish && \array_key_exists('wishlist', $changeset)) {
            $oldParent = $changeset['wishlist'][0];
            $newParent = $changeset['wishlist'][1];
        }

        while ($oldParent) {
            $this->decreaseCounters($oldParent, $entity);
            $oldParent = $oldParent->getParent();
        }

        while ($newParent) {
            $this->increaseCounters($newParent, $entity);
            $newParent = $newParent->getParent();
        }
    }

    private function increaseCounters(Collection|Album|Wishlist $entity, Item|Photo|Wish $element)
    {
        $counters = $entity->getCounters();

        match ($element->getVisibility()) {
            VisibilityEnum::VISIBILITY_PUBLIC => $counters['elements'][VisibilityEnum::VISIBILITY_PUBLIC]++,
            VisibilityEnum::VISIBILITY_INTERNAL => $counters['elements'][VisibilityEnum::VISIBILITY_INTERNAL]++,
            VisibilityEnum::VISIBILITY_PRIVATE => $counters['elements'][VisibilityEnum::VISIBILITY_PRIVATE]++,
        };

        $entity->setCounters($counters);
        $this->uow->recomputeSingleEntityChangeSet($this->em->getClassMetadata(get_class($entity)), $entity);
    }

    private function decreaseCounters(Collection|Album|Wishlist $entity, Item|Photo|Wish $element)
    {
        $counters = $entity->getCounters();

        match ($element->getVisibility()) {
            VisibilityEnum::VISIBILITY_PUBLIC => $counters['elements'][VisibilityEnum::VISIBILITY_PUBLIC]--,
            VisibilityEnum::VISIBILITY_INTERNAL => $counters['elements'][VisibilityEnum::VISIBILITY_INTERNAL]--,
            VisibilityEnum::VISIBILITY_PRIVATE => $counters['elements'][VisibilityEnum::VISIBILITY_PRIVATE]--,
        };

        $entity->setCounters($counters);
        $this->uow->recomputeSingleEntityChangeSet($this->em->getClassMetadata(get_class($entity)), $entity);
    }
}
