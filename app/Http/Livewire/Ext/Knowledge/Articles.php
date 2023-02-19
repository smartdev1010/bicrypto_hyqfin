<?php

namespace App\Http\Livewire\Ext\Knowledge;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Session;
use App\Models\Knowledge\Article;

class Articles extends DataTableComponent
{
    protected $model = Article::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('id', 'desc')
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
                ->sortable(),
            Column::make("Slug", "slug")
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Full text", "full_text")
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => chunk_split($row->full_text, 100, "<br/>")
                )
                ->html(),
            Column::make("Short text", "short_text")
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => chunk_split($row->short_text, 100, "<br/>")
                )
                ->html(),
            Column::make("Category", "category_id")
                ->collapseOnTablet()
                ->sortable()
                ->view('extensions.admin.knowledge.articles.views.category'),
            Column::make("Tags", "category_id")
                ->collapseOnTablet()
                ->sortable()
                ->view('extensions.admin.knowledge.articles.views.tag'),
            Column::make("Views count", "views_count")
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
                ->view('extensions.admin.knowledge.articles.views.actions'),
        ];
    }

    public function filters(): array
    {
        return [
            DateFilter::make('From')
                ->config([
                    'min' => '2020-01-01',
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
