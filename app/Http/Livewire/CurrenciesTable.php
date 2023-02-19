<?php

namespace App\Http\Livewire;

use App\Models\Currencies;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class CurrenciesTable extends DataTableComponent
{

    public function builder(): Builder
    {
        return Currencies::query();
    }

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('status', 'desc')
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No Currency found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Name", "name")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Code", "code")
                ->searchable()
                ->sortable(),
            Column::make("symbol", "symbol")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Rate", "rate")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            BooleanColumn::make("Status", "status")
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Actions", "id")
                ->view('admin.setting.views.currency.actions_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    ''    => 'Any',
                    '1' => 'Active',
                    '0'  => 'Disabled',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Active',
                    '0'  => 'Disabled',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
        ];
    }
}
