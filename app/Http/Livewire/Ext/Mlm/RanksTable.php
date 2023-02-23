<?php

namespace App\Http\Livewire\Ext\Mlm;

use App\Models\MLM\MLMPlan;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class RanksTable extends DataTableComponent
{

    public function mount(): void
    {
        $this->plat = [];
        foreach (getPlatform('mlm') as $key => $item) {
            $this->plat[$key] = $item;
        }
        $this->ext = getExtsID();
    }
    public function builder(): Builder
    {
        return MLMPlan::query();
    }
    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('rank', 'asc')
            ->setColumnSelectDisabled()
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No results found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Title", "title")
                ->searchable()
                ->sortable(),
            Column::make("Business Value (BV)", "bv")
                ->hideIf($this->plat['type'] != 'binary')
                ->sortable(),
            Column::make("deposits_required", "deposits_required")
                ->hideIf(true),
            Column::make("bv_required", "bv_required")
                ->hideIf(true),
            Column::make("margin", "margin")
                ->hideIf(true),
            Column::make("VIP Rank Requirements", "direct_required")
                ->hideIf($this->plat['type'] == 'binary')
                ->view('extensions.admin.mlm.ranks_view'),
            Column::make("ref_commission", "ref_commission")
                ->hideIf(true),
            Column::make("active_ref_commission", "active_ref_commission")
                ->hideIf(true),
            Column::make("trade_commission", "trade_commission")
                ->hideIf(true),
            Column::make("bot_commission", "bot_commission")
                ->hideIf(true),
            Column::make("ico_commission", "ico_commission")
                ->hideIf(true),
            Column::make("forex_commission", "forex_commission")
                ->hideIf(true),
            Column::make("forex_investment_commission", "forex_investment_commission")
                ->hideIf(true),
            Column::make("staking", "staking")
                ->hideIf(true),
            Column::make("Network Commission", "deposit_commission")
                ->view('extensions.admin.mlm.commissions_view'),
            BooleanColumn::make('Status')
                ->collapseOnMobile()
                ->sortable(),
            Column::make("Actions", "id")
                ->view('extensions.admin.mlm.ranks_actions_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('User Status')
                ->setFilterPillValues([
                    '1' => 'Active',
                    '0' => 'Inactive',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Yes',
                    '0' => 'No',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
            DateFilter::make('From')
                ->config([
                    'min' => '2022-01-01',
                    'max' => date('y-m-d'),
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('created_at', '>=', $value);
                }),
            DateFilter::make('To')
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('created_at', '<=', $value);
                }),
        ];
    }
}