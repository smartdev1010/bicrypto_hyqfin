<?php

namespace App\Http\Livewire;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;

class UserRoleTable extends DataTableComponent
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
            Column::make("Role id", "role_id")
                ->collapseOnMobile()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<strong class="badge rounded-pill bg-warning">' . (Role::where('id', $row->role_id)->first()->title ?? 'User') . '</strong>'
                )
                ->html(),
            Column::make("Actions", "id")
                ->view('admin.roles.roles_action_view'),
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
    }
}
