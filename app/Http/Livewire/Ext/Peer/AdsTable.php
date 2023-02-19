<?php

namespace App\Http\Livewire\Ext\Peer;

use App\Exports\UsersExport;
use App\Models\P2P\P2PAds;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\ButtonGroupColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\LinkColumn;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class AdsTable extends DataTableComponent
{

    public $userid;

    public function builder(): Builder
    {
        if ($this->userid != null) {
            return P2PAds::query()->where('user_id', $this->userid);
        } else {
            return P2PAds::query();
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
            Column::make("User", "user_id")
                ->hideIf($this->userid != null)
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.users.detail', $row->user_id) . '" class="badge bg-primary">' . isset($row->user) ? ucfirst($row->user->username) : 'User not found' . '</a>'
                )
                ->html(),
            Column::make("Currency", "currency_id")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => $row->currency->symbol
                )
                ->html(),
            Column::make("Price", "price")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Limit", "limit")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Available", "available")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Fiat Currency", "fiat_currency")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-secondary">' . $row->fiat_currency . '</span>'
                )
                ->html(),
            Column::make("Methods", "methods")
                ->view('extensions.admin.p2p.methods_view'),
            Column::make("Type", "type")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-warning">' . ucfirst($row->type) . '</span>'
                )
                ->html(),
            Column::make("Country", "country")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            BooleanColumn::make('Status')
                ->collapseOnMobile()
                ->sortable(),
        ];
    }

    /*public function filters(): array
    {
        return [
            SelectFilter::make('E-mail Verified', 'email_verified_at')
                ->setFilterPillTitle('Verified')
                ->options([
                    ''    => 'Any',
                    '1' => 'Yes',
                    '0'  => 'No',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === '1') {
                        $builder->whereNotNull('email_verified_at');
                    } elseif ($value === '0') {
                        $builder->whereNull('email_verified_at');
                    }
                }),
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
            DateFilter::make('Verified From')
                ->config([
                    'min' => '2020-01-01',
                    'max' => date('y-m-d'),
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('email_verified_at', '>=', $value);
                }),
            DateFilter::make('Verified To')
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('email_verified_at', '<=', $value);
                }),
        ];
    }*/
    public function bulkActions(): array
    {
        return [
            'activate' => ['title' => 'Activate', 'icon' =>  'check-circle'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
            'export' => ['title' => 'Export', 'icon' =>  'download'],
            'delete' => ['title' => 'Delete', 'icon' =>  'x-lg'],
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $user = User::findOrFail($id);
            $names .= $user->username . ', ';
            $user->status = 1;
            $user->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Accounts' : 'Account') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $user = User::findOrFail($id);
            $names .= $user->username . ', ';
            $user->status = 0;
            $user->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Accounts' : 'Account') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function export()
    {
        $names = '';
        $count = count($this->getSelected());
        $users = $this->getSelected();
        foreach ($this->getSelected() as $id) {
            $names .= User::findOrFail($id)->username . ', ';
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Accounts' : 'Account') . ' Exported Successfully'
        ]);

        $this->clearSelected();
        return Excel::download(new UsersExport($users), 'users.xlsx');
    }

    public function delete()
    {
        abort_if(Gate::denies('user_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $user = User::findOrFail($id);
            $names .= $user->username . ', ';

            $user->delete();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Accounts' : 'Account') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
