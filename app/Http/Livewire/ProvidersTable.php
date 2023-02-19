<?php

namespace App\Http\Livewire;

use App\Http\Controllers\Admin\Providers\ProviderInstallController;
use App\Models\ThirdpartyProvider;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Throwable;

class ProvidersTable extends DataTableComponent
{
    public function mount(): void
    {
        if (ThirdpartyProvider::where('status', 1)->exists()) {
            $thirdparty = ThirdpartyProvider::where('status', 1)->first();
            $exchange_class = "\\ccxt\\$thirdparty->title";
            $this->api = new $exchange_class(array(
                'apiKey' => $thirdparty->api,
                'secret' => $thirdparty->secret,
                'password' => $thirdparty->password,
                'options' => array(
                    'adjustForTimeDifference' => True
                ),
            ));
            $this->provider = $thirdparty->title;
        } else {
            $this->provider = null;
        }
    }
    public function builder(): Builder
    {
        return ThirdpartyProvider::query();
    }

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('status', 'desc')
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No popup found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Info", "title")
                ->view('admin.provider.views.info'),
            Column::make("name", "name")
                ->hideIf(true),
            Column::make("Connection", "development")
                ->view('admin.provider.views.connection'),
            BooleanColumn::make("Status", "status")
                ->view('admin.provider.views.status'),
            Column::make("installed", "installed")
                ->hideIf(true),
            Column::make("product_id", "product_id")
                ->hideIf(true),
            Column::make("Actions", "id")
                ->view('admin.provider.views.actions'),
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
