@if ($row->user != null)
    <a href="{{ route('admin.forex.edit', $row->id) }}" class="btn btn-outline-warning btn-sm">{{ __('Edit') }}</a>
@endif
