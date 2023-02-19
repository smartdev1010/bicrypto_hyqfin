@if ($row->status == 2)
    <span class="text-small badge fw-normal bg-warning">{{ __('Pending') }}</span>
@elseif($row->status == 1)
    <span class="text-small badge fw-normal bg-success">@lang('Approved')</span>
@elseif($row->status == 3)
    <span class="text-small badge fw-normal bg-danger">@lang('Rejected')</span>
@endif
