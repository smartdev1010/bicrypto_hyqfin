@foreach ($row->tags as $key => $item)
    <span class="badge bg-info">{{ $item->name }}</span>
@endforeach
