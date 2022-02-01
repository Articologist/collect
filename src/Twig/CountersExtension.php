<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class CountersExtension extends AbstractExtension
{
    public function getFunctions() : array
    {
        return [
            new TwigFunction('getChildrenCounter', [CountersRuntime::class, 'getChildrenCounter']),
            new TwigFunction('getElementsCounter', [CountersRuntime::class, 'getElementsCounter'])
        ];
    }
}