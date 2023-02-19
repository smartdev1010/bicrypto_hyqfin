<?php

namespace App\Http\Livewire;

use App\Models\Wallet;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class WalletsTable extends DataTableComponent
{

    public string $tableName = 'Wallets';
    public string $user;
    public function mount($user): void
    {
        $this->user = $user;
    }
    public function builder(): Builder
    {
        return Wallet::query()->where('user_id', $this->user);
    }

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('id', 'asc')
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No wallet found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("User", "user_id")
                ->hideIf(true),
            Column::make("Symbol", "symbol")
                ->searchable()
                ->sortable(),
            Column::make("Address", "address")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Provider", "provider")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Balance", "balance")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => getAmount($row->balance)
                )
                ->html(),
            Column::make("Type", "type")
                ->searchable()
                ->sortable(),
            Column::make("Addresses", "addresses")
                ->hideIf(true),
            Column::make("Actions", "id")
                ->collapseOnTablet()
                ->view('admin.users.wallets_actions_view'),
        ];
    }

    // public function filters(): array
    // {
    //     return [
    //         SelectFilter::make('Status')
    //             ->setFilterPillTitle('Status')
    //             ->setFilterPillValues([
    //                 ''    => 'Any',
    //                 '1' => 'Active',
    //                 '0'  => 'Disabled',
    //             ])
    //             ->options([
    //                 '' => 'All',
    //                 '1' => 'Active',
    //                 '0'  => 'Disabled',
    //             ])
    //             ->filter(function (Builder $builder, string $value) {
    //                 $builder->where('status', $value);
    //             }),
    //     ];
    // }
}
