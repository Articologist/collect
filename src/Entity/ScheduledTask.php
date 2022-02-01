<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LoanRepository")
 * @ORM\Table(name="koi_scheduled_task")
 */
class ScheduledTask
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string", length="36", unique=true, options={"fixed"=true})
     */
    private string $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $command = null;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private \DateTimeInterface $executedAt;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private ?string $executionTime = null;

    public function __construct()
    {
        $this->id = Uuid::v4()->toRfc4122();
    }

    public function getId() : ?string
    {
        return $this->id;
    }

    public function getCommand(): ?string
    {
        return $this->command;
    }

    public function setCommand(?string $command): ScheduledTask
    {
        $this->command = $command;

        return $this;
    }

    public function getExecutedAt(): \DateTimeInterface
    {
        return $this->executedAt;
    }

    public function setExecutedAt(\DateTimeInterface $executedAt): ScheduledTask
    {
        $this->executedAt = $executedAt;

        return $this;
    }

    public function getExecutionTime(): ?string
    {
        return $this->executionTime;
    }

    public function setExecutionTime(?string $executionTime): ScheduledTask
    {
        $this->executionTime = $executionTime;

        return $this;
    }
}
