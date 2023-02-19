@can('category_show')
    <a class="btn btn-sm btn-outline-primary" href="{{ route('admin.knowledge.categories.show', $row->id) }}">
        {{ trans('global.view') }}
    </a>
@endcan

@can('category_edit')
    <a class="btn btn-sm btn-outline-info" href="{{ route('admin.knowledge.categories.edit', $row->id) }}">
        {{ trans('global.edit') }}
    </a>
@endcan

@can('category_delete')
    <form action="{{ route('admin.knowledge.categories.destroy', $row->id) }}" method="POST"
        onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
        <input type="hidden" name="_method" value="DELETE">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <input type="submit" class="btn btn-sm btn-outline-danger" value="{{ trans('global.delete') }}">
    </form>
@endcan
