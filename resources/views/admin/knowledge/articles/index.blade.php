@extends('admin.knowledge.admin')
@section('content')
    @can('article_create')
        @push('breadcrumb-plugins')
            <a class="btn btn-success" href="{{ route('admin.knowledge.articles.create') }}">
                {{ trans('global.add') }} {{ trans('cruds.article.title_singular') }}
            </a>
        @endpush
    @endcan
    <div class="card">
        <div class="card-header">
            {{ trans('cruds.article.title_singular') }} {{ trans('global.list') }}
        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-striped table-hover datatable datatable-Article" id="myTable">
                    <thead>
                        <tr>
                            <th>
                                {{ trans('cruds.article.fields.id') }}
                            </th>
                            <th>
                                {{ trans('cruds.article.fields.title') }}
                            </th>
                            <th>
                                {{ trans('cruds.article.fields.slug') }}
                            </th>
                            <th>
                                {{ trans('cruds.article.fields.short_text') }}
                            </th>
                            <th>
                                {{ trans('cruds.article.fields.category') }}
                            </th>
                            <th>
                                {{ trans('cruds.article.fields.tags') }}
                            </th>
                            <th>
                                {{ trans('cruds.article.fields.views_count') }}
                            </th>
                            <th>
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($articles as $key => $article)
                            <tr data-entry-id="{{ $article->id }}">
                                <td>
                                    {{ $article->id ?? '' }}
                                </td>
                                <td>
                                    {{ $article->title ?? '' }}
                                </td>
                                <td>
                                    {{ $article->slug ?? '' }}
                                </td>
                                <td>
                                    {{ $article->short_text ?? '' }}
                                </td>
                                <td>
                                    @if ($article->category->count())
                                        <span class="badge badge-info">{{ $article->category->name }}</span>
                                    @endif
                                </td>
                                <td>
                                    @foreach ($article->tags as $key => $item)
                                        <span class="badge badge-info">{{ $item->name }}</span>
                                    @endforeach
                                </td>
                                <td>
                                    {{ $article->views_count ?? '' }}
                                </td>
                                <td>
                                    @can('article_show')
                                        <a class="btn btn-sm btn-primary"
                                            href="{{ route('admin.knowledge.articles.show', $article->id) }}">
                                            {{ trans('global.view') }}
                                        </a>
                                    @endcan

                                    @can('article_edit')
                                        <a class="btn btn-sm btn-info"
                                            href="{{ route('admin.knowledge.articles.edit', $article->id) }}">
                                            {{ trans('global.edit') }}
                                        </a>
                                    @endcan

                                    @can('article_delete')
                                        <form action="{{ route('admin.knowledge.articles.destroy', $article->id) }}"
                                            method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');"
                                            style="display: inline-block;">
                                            <input type="hidden" name="_method" value="DELETE">
                                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                            <input type="submit" class="btn btn-sm btn-danger"
                                                value="{{ trans('global.delete') }}">
                                        </form>
                                    @endcan

                                </td>

                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>


        </div>
    </div>
@endsection
@section('scripts')
    @parent
    <script>
        $(function() {
            let dtButtons = $.extend(true, [], $.fn.dataTable.defaults.buttons)
            @can('article_delete')
                let deleteButtonTrans = '{{ trans('global.datatables.delete') }}'
                let deleteButton = {
                    text: deleteButtonTrans,
                    url: "{{ route('admin.knowledge.articles.massDestroy') }}",
                    className: 'btn-danger',
                    action: function(e, dt, node, config) {
                        var ids = $.map(dt.rows({
                            selected: true
                        }).nodes(), function(entry) {
                            return $(entry).data('entry-id')
                        });

                        if (ids.length === 0) {
                            alert('{{ trans('global.datatables.zero_selected') }}')

                            return
                        }

                        if (confirm('{{ trans('global.areYouSure') }}')) {
                            $.ajax({
                                    headers: {
                                        'x-csrf-token': _token
                                    },
                                    method: 'POST',
                                    url: config.url,
                                    data: {
                                        ids: ids,
                                        _method: 'DELETE'
                                    }
                                })
                                .done(function() {
                                    location.reload()
                                })
                        }
                    }
                }
                dtButtons.push(deleteButton)
            @endcan

            $.extend(true, $.fn.dataTable.defaults, {
                order: [
                    [1, 'desc']
                ],
                pageLength: 100,
            });
            $('.datatable-Article:not(.ajaxTable)').DataTable({
                buttons: dtButtons
            })
            $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                $($.fn.dataTable.tables(true)).DataTable()
                    .columns.adjust();
            });
        })
    </script>
@endsection
