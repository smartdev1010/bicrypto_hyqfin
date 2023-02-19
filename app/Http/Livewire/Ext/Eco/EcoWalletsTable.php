<?php

namespace App\Http\Livewire\Ext\Eco;

use App\Models\Eco\EcoWallet;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Session;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Tatum\Tatum;

class EcoWalletsTable extends DataTableComponent
{

    public $chain;
    public $symbol;

    public function builder(): Builder
    {
        return EcoWallet::query()->where('chain', $this->chain)->where('symbol', $this->symbol);
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
                ->hideIf(true)
                ->sortable(),
            Column::make("Index", "index")
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Holder", "user_id")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => $row->user_id ? ('<a href="' . route('admin.users.detail', $row->user_id) . '" class="badge bg-' . ($row->assigned == 1 ? 'success' : 'secondary') . '">' . ucfirst($row->user->username) . '</a>') : '<span class="badge bg-secondary">Not Assigned</span>'
                )
                ->html(),
            Column::make("Balance", "balance")
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="' . ($row->balance != 0 ? 'fw-bolder' : '') . '">' . getAmount($row->balance) . '</span>'
                )
                ->html(),
            Column::make("Free balance", "free_balance")
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="' . ($row->free_balance != 0 ? 'fw-bolder' : '') . '">' . getAmount($row->free_balance) . '</span>'
                )
                ->html(),
            Column::make("Address", "address")
                ->collapseOnTablet()
                ->view('extensions.admin.eco.views.addresses_links'),
            Column::make("Activation TxId", "activation_trx")
                ->collapseOnTablet()
                ->view('extensions.admin.eco.views.trx_links'),
            BooleanColumn::make('Assigned')
                ->hideIf(true),
            BooleanColumn::make('Status')
                ->hideIf(true),
            BooleanColumn::make('Chain')
                ->hideIf(true),
            Column::make('Actions', 'id')
                ->collapseOnTablet()
                ->view('extensions.admin.eco.views.action_btns'),
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
                        $builder->where('status', true);
                    } elseif ($value === '0') {
                        $builder->where('status', false);
                    }
                }),
        ];
    }

    public function bulkActions(): array
    {
        return [
            'refresh_free_balance' => ['title' => 'Refresh Balance', 'icon' =>  'arrow-repeat'],
            //'unassign' => ['title' => 'Unassign', 'icon' =>  'x-lg'],
        ];
    }
    public function refresh_free_balance()
    {
        $names = '';
        $count = count($this->getSelected());
        $eco = new Tatum();
        foreach ($this->getSelected() as $id) {
            $item = EcoWallet::findOrFail($id);
            if ($item->status == 1) {
                $names .= $item->index . ', ';
                $free_balance = getBalance($id);
                if ($free_balance != null) {
                    $item->free_balance = $free_balance;
                }
                if ($item->account_id != null) {
                    $balance = json_decode($eco->getAccountBalance($item->account_id));
                    if (isset($balance->availableBalance)) {
                        $item->balance = $balance->availableBalance;
                    }
                }
                $item->save();
            }
            Session::flash('alert', [
                'class' => 'success',
                'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
                'header' => 'Alert!',
                'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Wallets' : 'Wallet') . ' Refreshed Successfully'
            ]);
            $this->clearSelected();
        }
    }
    public function unassign()
    {
        $names = '';
        $count = count($this->getSelected());
        $eco = new Tatum();
        foreach ($this->getSelected() as $id) {
            $item = EcoWallet::findOrFail($id);
            $result = json_decode($eco->unassignDepositAddress($item->account_id, $item->address));
            if (!isset($result->errorCode)) {
                $names .= $item->name . ', ';
                $item->assigned = 0;
                $item->account_id = null;
                $item->user_id = null;
                $item->save();
                Session::flash('alert', [
                    'class' => 'success',
                    'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
                    'header' => 'Alert!',
                    'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Addresses' : 'Address') . ' Unassigned Successfully'
                ]);
            } else {
                Session::flash('alert', [
                    'class' => 'danger',
                    'icon' => 'exclamation-triangle',
                    'header' => 'Alert!',
                    'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Addresses' : 'Address') . ' Unassigned Successfully'
                ]);
            }
            $this->clearSelected();
        }
    }
}
