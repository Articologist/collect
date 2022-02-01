<?php

declare(strict_types=1);

namespace App\Migrations\Postgresql;

use App\Service\CounterHelper;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;
use Symfony\Component\Uid\Uuid;

final class Version20220128083112 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '[Postgresql] Add counters to `koi_collection`, `koi_album` and `koi_wishlist`';
    }

    public function up(Schema $schema): void
    {
        $this->skipIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE koi_log ALTER object_id TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE koi_log ALTER object_id DROP DEFAULT');
        $this->addSql('COMMENT ON COLUMN koi_log.object_id IS NULL');

        $this->addSql('CREATE TABLE koi_scheduled_task (id CHAR(36) NOT NULL, command VARCHAR(255) NOT NULL, executed_at TIMESTAMP(0) WITHOUT TIME ZONE, execution_time INT, PRIMARY KEY(id))');

        $this->addSql('ALTER TABLE koi_album ADD counters JSON');
        $this->addSql('ALTER TABLE koi_collection ADD counters JSON');
        $this->addSql('ALTER TABLE koi_wishlist ADD counters JSON');

        $this->addSql('UPDATE koi_album SET counters = :counters', ['counters' => json_encode(CounterHelper::getEmptyCounters())]);
        $this->addSql('UPDATE koi_collection SET counters = :counters', ['counters' => json_encode(CounterHelper::getEmptyCounters())]);
        $this->addSql('UPDATE koi_wishlist SET counters = :counters', ['counters' => json_encode(CounterHelper::getEmptyCounters())]);

        $this->addSql('ALTER TABLE koi_album ALTER COLUMN counters SET NOT NULL');
        $this->addSql('ALTER TABLE koi_collection ALTER COLUMN counters SET NOT NULL');
        $this->addSql('ALTER TABLE koi_wishlist ALTER COLUMN counters SET NOT NULL');

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
