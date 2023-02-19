<?php

namespace App\Http\Livewire\Withdrawal;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Session;
use App\Models\WithdrawMethod;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class Gateways extends DataTableComponent
{
    public function mount(): void
    {
        $this->general = getGen();
    }
    public function builder(): Builder
    {
        return WithdrawMethod::query()->orderByDesc('status')->orderBy('id');
    }
    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No results found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Image", "image")
                ->hideIf(true),
            Column::make("Provider", "name")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<div class="flex justify-start items-center font-medium text-lg"><img class="w-auto h-10 mr-2" src="' . getImage(imagePath()['withdraw']['method']['path'] . '/' . $row->image, imagePath()['withdraw']['method']['size']) . '" />' . $row->name . '</div>'
                )
                ->html(),
            Column::make("Currency", "currency")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("percent_charge", "percent_charge")
                ->hideIf(true),
            Column::make("Charge", "fixed_charge")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) =>  getAmount($row->fixed_charge) . ' ' . $this->general->cur_text . ' ' . (0 < $row->percent_charge ? ' + ' . getAmount($row->percent_charge) . ' %' : '')
                )
                ->html(),
            Column::make("max_limit", "max_limit")
                ->hideIf(true),
            Column::make("Withdraw Limit", "min_limit")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) =>  getAmount($row->min_limit + 0) . ' - ' . getAmount($row->max_limit + 0) . ' ' . $this->general->cur_text
                )
                ->html(),
            Column::make("Processing Time", "delay")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            BooleanColumn::make("Status", "status")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Created at", "created_at")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("Actions", "id")
                ->view('admin.withdraw.actions_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    '1' => 'Active',
                    '0' => 'Disabled',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Active',
                    '0' => 'Disabled',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
        ];
    }

    public function bulkActions(): array
    {
        return [
            'activate' => ['title' => 'Activate', 'icon' =>  'eye'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = WithdrawMethod::findOrFail($id);
            $names .= $item->name . ', ';
            $item->status = 1;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Gateways' : 'Gateway') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = WithdrawMethod::findOrFail($id);
            $names .= $item->name . ', ';
            $item->status = 0;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Gateways' : 'Gateway') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }
}
