@if ($row->dev == 0)
    @if ($row->status == 1)
        <span class="badge bg-success">Active</span>
    @elseif($row->status == 0)
        <span class="badge bg-danger">Disabled</span>
    @endif
@elseif ($row->dev == 1)
    <span class="badge bg-secondary">In Development</span>
@else
    <span class="badge bg-warning">Coming Soon</span>
@endif
