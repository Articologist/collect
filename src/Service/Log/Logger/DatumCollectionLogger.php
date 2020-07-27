<?php

declare(strict_types=1);

namespace App\Service\Log\Logger;

use App\Entity\Collection;
use App\Entity\Datum;
use App\Entity\Log;
use App\Enum\LogTypeEnum;
use App\Service\Log\Logger;
use App\Service\Log\LogQueue;
use Symfony\Contracts\Translation\TranslatorInterface;

class DatumCollectionLogger extends Logger
{
    /**
     * @var LogQueue
     */
    private LogQueue $logQueue;

    /**
     * DatumLogger constructor.
     * @param TranslatorInterface $translator
     * @param LogQueue $logQueue
     */
    public function __construct(TranslatorInterface $translator, LogQueue $logQueue)
    {
        parent::__construct($translator);
        $this->logQueue = $logQueue;
    }

    /**
     * @return string
     */
    public function getClass() : string
    {
        return Collection::class;
    }

    /**
     * @return int
     */
    public function getPriority() : int
    {
        return 2;
    }

    /**
     * @param $object
     * @return bool
     */
    public function supports($object) : bool
    {
        return get_class($object) === Datum::class && $object->getCollection() instanceof Collection;
    }

    /**
     * @param $datum
     * @return Log|null
     */
    public function getCreateLog($datum) : ?Log
    {
        if (!$this->supports($datum)) {
            return null;
        }

        //If the collection was just created, we log nothing more
        if ($this->logQueue->find($datum->getCollection()->getId(), Collection::class, LogTypeEnum::TYPE_CREATE)) {
            return null;
        }

        $log = $this->logQueue->find($datum->getCollection()->getId(), Collection::class, LogTypeEnum::TYPE_UPDATE);
        if (!$log) {
            $log = $this->createLog(LogTypeEnum::TYPE_UPDATE, $datum->getCollection());
        }
        $payload = json_decode($log->getPayload(), true);
        $payload[] = [
            'title' => $datum->getCollection()->getTitle(),
            'property' => 'datum_added',
            'datum_label' => $datum->getLabel(),
            'datum_value' => $datum->getValue(),
            'datum_type' => $datum->getType()
        ];
        $log->setPayload(json_encode($payload));

        return $log;
    }

    /**
     * @param $datum
     * @return Log|null
     */
    public function getDeleteLog($datum) : ?Log
    {
        if (!$this->supports($datum)) {
            return null;
        }

        $log = $this->logQueue->find($datum->getCollection()->getId(), Collection::class, LogTypeEnum::TYPE_UPDATE);
        if (!$log) {
            $log = $this->createLog(LogTypeEnum::TYPE_UPDATE, $datum->getCollection());
        }
        $payload = json_decode($log->getPayload(), true);
        $payload[] = [
            'title' => $datum->getCollection()->getTitle(),
            'property' => 'datum_removed',
            'datum_label' => $datum->getLabel(),
            'datum_value' => $datum->getValue(),
            'datum_type' => $datum->getType()
        ];
        $log->setPayload(json_encode($payload));

        return $log;
    }

    /**
     * @param $datum
     * @param array $changeset
     * @param array $relations
     * @return Log|null
     */
    public function getUpdateLog($datum, array $changeset, array $relations = []) : ?Log
    {
        return null;
    }

    /**
     * @param $class
     * @param array $payload
     * @return null|string
     */
    public function formatPayload($class, array $payload) : ?string
    {
        return null;
    }
}
