<?php

declare(strict_types=1);

namespace App\Migrations\Mysql;

use App\Service\CounterHelper;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;
use Symfony\Component\Uid\Uuid;

final class Version20220201175141 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '[Mysql] Add counters to `koi_collection`, `koi_album` and `koi_wishlist`';
    }

    public function up(Schema $schema): void
    {
        $this->skipIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE koi_log CHANGE object_id object_id VARCHAR(255) NOT NULL');
        $this->addSql('CREATE TABLE koi_scheduled_task (id CHAR(36) NOT NULL, command VARCHAR(255) NOT NULL, executed_at DATETIME DEFAULT NULL, execution_time INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');

        $this->addSql('ALTER TABLE koi_album ADD counters JSON');
        $this->addSql('ALTER TABLE koi_collection ADD counters JSON');
        $this->addSql('ALTER TABLE koi_wishlist ADD counters JSON');

        $this->addSql('UPDATE koi_album SET counters = :counters', ['counters' => json_encode(CounterHelper::getEmptyCounters())]);
        $this->addSql('UPDATE koi_collection SET counters = :counters', ['counters' => json_encode(CounterHelper::getEmptyCounters())]);
        $this->addSql('UPDATE koi_wishlist SET counters = :counters', ['counters' => json_encode(CounterHelper::getEmptyCounters())]);

        $this->addSql('ALTER TABLE koi_album MODIFY counters JSON NOT NULL');
        $this->addSql('ALTER TABLE koi_collection MODIFY counters JSON NOT NULL');
        $this->addSql('ALTER TABLE koi_wishlist MODIFY counters JSON NOT NULL');

        $this->addSql('INSERT INTO koi_scheduled_task (id, command) VALUES (:id, :command)', [
            'id' => Uuid::v4()->toRfc4122(),
            'command' => 'koillection:task:recompute-counters'
        ]);
    }

    public function down(Schema $schema): void
    {
        $this->skipIf(true, 'Always move forward.');
    }
}
