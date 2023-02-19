<?php

namespace App\Http\Livewire;

use App\Models\Binance\BinanceCurrencies;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Support\Facades\Session;
use App\Models\BybitCurrencies;
use App\Models\CoinbaseCurrencies;
use App\Models\Kucoin\KucoinCurrencies;
use App\Models\ThirdpartyProvider;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class ProviderCurrenciesTable extends DataTableComponent
{
    public string $idx;
    public function mount(string $idx): void
    {
        $this->provider = ThirdpartyProvider::where('id', $idx)->first()->title;
    }
    public function builder(): Builder
    {
        if ($this->provider == 'kucoin') {
            $this->currencies = KucoinCurrencies::get();
            return KucoinCurrencies::query()->select('id', 'symbol', 'name', 'status');
        } else if ($this->provider == 'coinbasepro') {
            $this->currencies = CoinbaseCurrencies::get();
            return CoinbaseCurrencies::query()->select('id', 'symbol', 'name', 'status');
        } else if ($this->provider == 'bybit') {
            $this->currencies = BybitCurrencies::get();
            return BybitCurrencies::query()->select('id', 'symbol', 'name', 'status');
        } else if ($this->provider == 'binance') {
            $this->currencies = BinanceCurrencies::get();
            return BinanceCurrencies::query()->select('id', 'symbol', 'name', 'status');
        }
    }

    public function configure(): void
    {
        $this->setPrimaryKey('id')
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
            Column::make('Symbol', "symbol")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<img class="avatar-content me-1" style="max-height: 48px;max-width:48px;" src="' . getImage('assets/images/cryptoCurrency/' . strtolower($row->symbol) . '.png') . '"><span class="fw-bold fs-6">' . $row->symbol . '</span>'
                )
                ->html(),
            Column::make("Name", "name")
                ->collapseOnTablet()
                ->searchable()
                ->sortable(),
            BooleanColumn::make('Status')
                ->collapseOnMobile()
                ->sortable(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Active')
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
                    if ($value === '1') {
                        $builder->where('status', 1);
                    } elseif ($value === '0') {
                        $builder->where('status', 0);
                    }
                }),
        ];
    }
    public function bulkActions(): array
    {
        return [
            'activate' => ['title' => 'Activate', 'icon' =>  'check-circle'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
            'delete' => ['title' => 'Delete', 'icon' =>  'x-lg'],
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = $this->currencies->where('id', $id)->first();
            $names .= $item->symbol . ', ';
            $item->status = 1;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Symbols' : 'Symbol') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = $this->currencies->where('id', $id)->first();
            $names .= $item->symbol . ', ';
            $item->status = 0;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Symbols' : 'Symbol') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function delete()
    {
        abort_if(Gate::denies('user_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = $this->currencies->where('id', $id)->first();
            $names .= $item->username . ', ';
            $item->delete();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Symbols' : 'Symbol') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}