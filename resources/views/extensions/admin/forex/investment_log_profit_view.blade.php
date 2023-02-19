<div
    class="@if ($row->result == 1) text-success
    @elseif($row->result == 2)
        text-danger
    @elseif($row->result == 3)
    @else @endif">
    @if ($row->result == 1)
        + {{ __(getAmount($row->profit)) }} $
    @elseif($row->result == 2)
        - {{ __(getAmount($row->profit)) }} $
    @elseif($row->result == 3)
        {{ __(getAmount($row->profit)) }} $
    @else
        <span class="badge bg-light-warning">{{ __('Pending') }}</span>
    @endif
</div>
