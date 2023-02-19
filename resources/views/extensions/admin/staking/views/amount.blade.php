<div>{{ __('Amount') }}: <span class="text-success">{{ ttz($row->amount) }}</span>
    {{ $row->symbol }}</div>
<div>{{ __('Price') }}: <span class="text-success">{{ ttz($row->price) }}</span></div>
<div>{{ __('Total Profit') }}: <span class="text-success">{{ $row->profit }}</span>%</div>
