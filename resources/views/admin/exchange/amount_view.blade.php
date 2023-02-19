<div> {{ __('Price') }}: <span class="fw-bold text-success">{{ ttz($row->price) }}</span>
    {{ getPair($row->symbol)[1] }}</div>
<div> {{ __('Stop Price') }}: <span class="fw-bold">{{ ttz($row->stopPrice) }}</span>
    {{ getPair($row->symbol)[1] }}</div>
<div> {{ __('Amount') }}: <span class="fw-bold">{{ ttz($row->amount) }}</span>
    {{ getPair($row->symbol)[0] }}</div>
<div> {{ __('Cost') }}: <span class="fw-bold text-danger">{{ ttz($row->cost) }}</span>
    {{ getPair($row->symbol)[1] }}</div>
<div> {{ __('Processing Fee') }}: <span
        class="fw-bold text-danger">{{ ttz($row->amount * (getGen()->exchange_fee / 100)) }}</span>
    {{ getPair($row->symbol)[0] }}</div>
