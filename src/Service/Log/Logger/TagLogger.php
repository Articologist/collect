<?php

declare(strict_types=1);

namespace App\Service\Log\Logger;

use App\Entity\Interfaces\LoggableInterface;
use App\Entity\Log;
use App\Entity\Tag;
use App\Enum\LogTypeEnum;
use App\Enum\VisibilityEnum;
use App\Service\Log\Logger;

class TagLogger extends Logger
{
    public function getClass(): string
    {
        return Tag::class;
    }

    public function getPriority(): int
    {
        return 1;
    }

    public function getCreateLog(LoggableInterface $tag): ?Log
    {
        if (!$this->supports($tag)) {
            return null;
        }

        return $this->createLog(LogTypeEnum::TYPE_CREATE, $tag);
    }

    public function getDeleteLog(LoggableInterface $tag): ?Log
    {
        if (!$this->supports($tag)) {
            return null;
        }

        return $this->createLog(LogTypeEnum::TYPE_DELETE, $tag);
    }

    public function getUpdateLog(LoggableInterface $tag, array $changeset, array $relations = []): ?Log
    {
        if (!$this->supports($tag)) {
            return null;
        }

        $mainPayload = [];

        if (\array_key_exists('label', $changeset)) {
            $mainPayload[] = [
                'label' => $tag->getLabel(),
                'property' => 'label',
                'old' => $changeset['label'][0],
                'new' => $tag->getLabel(),
            ];
        }

        if (\array_key_exists('description', $changeset)) {
            $mainPayload[] = [
                'label' => $tag->getLabel(),
                'property' => 'description',
                'old' => $changeset['description'][0],
                'new' => $tag->getDescription(),
            ];
        }

        if (\array_key_exists('visibility', $changeset)) {
            $mainPayload[] = [
                'label' => $tag->getLabel(),
                'property' => 'visibility',
                'old' => $changeset['visibility'][0],
                'new' => $tag->getVisibility(),
            ];
        }
        if (\array_key_exists('image', $changeset)) {
            $mainPayload[] = [
                'label' => $tag->getLabel(),
                'property' => 'image',
            ];
        }

        if (empty($mainPayload)) {
            return null;
        }

        return $this->createLog(
            LogTypeEnum::TYPE_UPDATE,
            $tag,
            $mainPayload
        );
    }

    public function formatPayload(string $class, array $payload): ?string
    {
        if (!$this->supportsClass($class)) {
            return null;
        }

        $property = $payload['property'];
        $label = $this->translator->trans('label.'.strtolower(preg_replace('/(?<!^)[A-Z]/', '_$0', $property)));
        switch ($property) {
            case 'visibility':
                return $this->translator->trans('log.tag.property_updated', [
                    '%property%' => "<strong>$label</strong>",
                    '%new%' => '<strong>'.$this->translator->trans('global.visibilities.'.VisibilityEnum::VISIBILITIES_TRANS_KEYS[$payload['new']]).'</strong>',
                    '%old%' => '<strong>'.$this->translator->trans('global.visibilities.'.VisibilityEnum::VISIBILITIES_TRANS_KEYS[$payload['old']]).'</strong>',
                ]);
            case 'image':
                return $this->translator->trans('log.tag.image_updated', [
                    '%property%' => "<strong>$label</strong>",
                ]);
            default:
                $defaultValue = $this->translator->trans('log.default_value');
                $old = $payload['old'] ? $payload['old'] : $defaultValue;
                $new = $payload['new'] ? $payload['new'] : $defaultValue;

                return $this->translator->trans('log.tag.property_updated', [
                    '%property%' => "<strong>$label</strong>",
                    '%old%' => "<strong>$old</strong>",
                    '%new%' => "<strong>$new</strong>",
                ]);
        }
    }
}
