<?php

namespace App\Http\Livewire;

use App\Exports\UsersExport;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\ButtonGroupColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\LinkColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;
use App\Models\Deposit;
use App\Models\Bot\BotContract;
use App\Models\Transaction;
use App\Models\ExchangeLogs;
use App\Models\Extension;
use App\Models\Forex\ForexAccounts;
use App\Models\Forex\ForexLogs;
use App\Models\Ico\IcoLogs;
use App\Models\MLM\MLMBV;
use App\Models\Withdrawal;
use App\Models\TradeLog;
use App\Models\PracticeLog;
use App\Models\Staking\StakingLog;
use App\Models\ThirdpartyOrders;
use App\Models\Wallet;
use App\Models\WalletsTransactions;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class UserTable extends DataTableComponent
{

    public function builder(): Builder
    {
        return User::query()->where('role_id', '!=', 1);
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
            Column::make('Avatar', "profile_photo_path")
                ->collapseOnTablet()
                ->format(
                    fn ($value, $row, Column $column) => '<img style="max-width:32px;" src="' . getImage(imagePath()['profileImage']['path'] . '/' . $row->profile_photo_path, imagePath()['profileImage']['size']) . '">'
                )
                ->html(),
            Column::make("Username", "username")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a class="badge bg-primary">' . $row->username . '</a>'
                )
                ->html(),
            Column::make("Email", "email")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Verification", "email_verified_at")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->email_verified_at != null ? 'success' : 'danger') . '">' . ($row->email_verified_at != null ? 'Verified' : 'Unverified') . '</span>'
                )
                ->html(),
            BooleanColumn::make('Status')
                ->collapseOnMobile()
                ->sortable(),
            ButtonGroupColumn::make('Actions')
                ->attributes(function ($row) {
                    return [
                        'class' => 'space-x-2',
                    ];
                })
                ->buttons([
                    LinkColumn::make('View')
                        ->title(fn ($row) => 'View')
                        ->location(fn ($row) => route('admin.users.detail', $row->id))
                        ->attributes(function ($row) {
                            return [
                                'class' => 'btn btn-outline-success btn-sm',
                            ];
                        }),
                    LinkColumn::make('Contact')
                        ->title(fn ($row) => 'Contact')
                        ->location(fn ($row) => route('admin.users.email.single', $row->id))
                        ->attributes(function ($row) {
                            return [
                                'class' => 'btn btn-outline-warning btn-sm',
                            ];
                        }),
                ]),
        ];
    }

    public function filters(): array
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
    }
    public function bulkActions(): array
    {
        return [
            'activate' => ['title' => 'Activate', 'icon' =>  'eye'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
            'verify' => ['title' => 'Verify', 'icon' =>  'check-circle'],
            'unverify' => ['title' => 'Unverify', 'icon' =>  'exclamation-circle'],
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

    public function verify()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $user = User::findOrFail($id);
            $names .= $user->username . ', ';
            $user->email_verified_at = $user->updated_at;
            $user->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Accounts' : 'Account') . ' Verified Successfully'
        ]);

        $this->clearSelected();
    }

    public function unverify()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $user = User::findOrFail($id);
            $names .= $user->username . ', ';
            $user->email_verified_at = null;
            $user->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Accounts' : 'Account') . ' Unverified Successfully'
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
            if (file_exists(public_path('data/practice/u00' . $id . '.json'))) {
                File::delete(public_path('data/practice/u00' . $id . '.json'));
            }
            if (file_exists(public_path('data/trade/u00' . $id . '.json'))) {
                File::delete(public_path('data/trade/u00' . $id . '.json'));
            }
            $practice_logs = PracticeLog::where('user_id', $id)->get();
            foreach ($practice_logs as $log) {
                $log->delete();
            }
            $deposits = Deposit::where('user_id', $id)->get();
            foreach ($deposits as $deposit) {
                $deposit->delete();
            }
            $withdrawals = Withdrawal::where('user_id', $id)->get();
            foreach ($withdrawals as $withdrawal) {
                $withdrawal->delete();
            }
            $trade_logs = TradeLog::where('user_id', $id)->get();
            foreach ($trade_logs as $log) {
                $log->delete();
            }
            $exchanges_logs = ExchangeLogs::where('user_id', $id)->get();
            foreach ($exchanges_logs as $log) {
                $log->delete();
            }
            $wallets = Wallet::where('user_id', $id)->get();
            foreach ($wallets as $wallet) {
                $wallet->delete();
            }
            $wallets_trx = WalletsTransactions::where('user_id', $id)->get();
            foreach ($wallets_trx as $trx) {
                $trx->delete();
            }
            $trxs = Transaction::where('user_id', $id)->get();
            foreach ($trxs as $trx) {
                $trx->delete();
            }
            $thirdtrxs = ThirdpartyOrders::where('user_id', $id)->get();
            foreach ($thirdtrxs as $thirdtrx) {
                $thirdtrx->delete();
            }
            if (Extension::where('id', 1)->first()->installed == 1) {
                if (BotContract::where('user_id', $id)->exists()) {
                    $bot_logs = BotContract::where('user_id', $id)->get();
                    foreach ($bot_logs as $log) {
                        $log->delete();
                    }
                }
            }
            if (Extension::where('id', 2)->first()->installed == 1) {
                if (IcoLogs::where('user_id', $id)->exists()) {
                    $ico_logs = IcoLogs::where('user_id', $id)->get();
                    foreach ($ico_logs as $log) {
                        $log->delete();
                    }
                }
            }
            if (Extension::where('id', 3)->first()->installed == 1) {
                if (MLMBV::where('user_id', $id)->exists()) {
                    $mlm_logs = MLMBV::where('user_id', $id)->get();
                    foreach ($mlm_logs as $log) {
                        $log->delete();
                    }
                }
            }
            if (Extension::where('id', 4)->first()->installed == 1) {
                if (ForexAccounts::where('user_id', $id)->exists()) {
                    $forexAccount = ForexAccounts::where('user_id', $id)->first();
                    $forexAccount->delete();
                }
                $forex_logs = ForexLogs::where('user_id', $id)->get();
                foreach ($forex_logs as $log) {
                    $log->delete();
                }
            }
            if (Extension::where('id', 6)->first()->installed == 1) {
                if (StakingLog::where('user_id', $id)->exists()) {
                    $staking_logs = StakingLog::where('user_id', $id)->get();
                    foreach ($staking_logs as $log) {
                        $log->delete();
                    }
                }
            }

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
