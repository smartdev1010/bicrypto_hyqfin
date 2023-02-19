@if ($row->category->count())
    <span class="badge bg-info">{{ $row->category->name }}</span>
@endif
