@can('faq_category_show')
    <a class="btn btn-sm btn-outline-primary" href="{{ route('admin.knowledge.faq-categories.show', $row->id) }}">
        {{ trans('global.view') }}
    </a>
@endcan

@can('faq_category_edit')
    <a class="btn btn-sm btn-outline-info" href="{{ route('admin.knowledge.faq-categories.edit', $row->id) }}">
        {{ trans('global.edit') }}
    </a>
@endcan

@can('faq_category_delete')
    <form action="{{ route('admin.knowledge.faq-categories.destroy', $row->id) }}" method="POST"
        onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
        <input type="hidden" name="_method" value="DELETE">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <input type="submit" class="btn btn-sm btn-outline-danger" value="{{ trans('global.delete') }}">
    </form>
@endcan
