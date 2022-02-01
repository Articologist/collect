<?php

namespace App\Command;

use App\Entity\ScheduledTask;
use App\Repository\ScheduledTaskRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ExecuteScheduledTasksCommand extends Command
{
    public function __construct(
        private ManagerRegistry $managerRegistry,
        private ScheduledTaskRepository $scheduledTaskRepository,
    )
    {
        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setName('koillection:scheduled-tasks:execute')
            ->setDescription('Execute all scheduled tasks')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $scheduledTasks = $this->scheduledTaskRepository->findBy(['executedAt' => null]);

        foreach ($scheduledTasks as $scheduledTask) {
            $command = $this->getApplication()->find($scheduledTask->getCommand());
            $output->writeln('Executing task : ' . $command->getDescription());

            $startTime = microtime(true);
            $command->run(new ArrayInput([]), $output);
            $endTime = microtime(true);
            $executionTime = ($endTime - $startTime);

            $scheduledTask
                ->setExecutedAt(new \DateTime())
                ->setExecutionTime(round($executionTime * 1000))
            ;

            $this->managerRegistry->getManager()->flush();

            $output->writeln('Done in ' . $scheduledTask->getExecutionTime() . 'ms');
        }

        return Command::SUCCESS;
    }
}
