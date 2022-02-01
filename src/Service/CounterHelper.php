<?php

declare(strict_types=1);

namespace App\Service;

use App\Enum\VisibilityEnum;

class CounterHelper
{
    public static function getEmptyCounters() : array
    {
        return [
            'children' => [
                VisibilityEnum::VISIBILITY_PUBLIC => 0,
                VisibilityEnum::VISIBILITY_INTERNAL => 0,
                VisibilityEnum::VISIBILITY_PRIVATE => 0
            ],
            'elements' => [
                VisibilityEnum::VISIBILITY_PUBLIC => 0,
                VisibilityEnum::VISIBILITY_INTERNAL => 0,
                VisibilityEnum::VISIBILITY_PRIVATE => 0
            ]
        ];
    }
}
