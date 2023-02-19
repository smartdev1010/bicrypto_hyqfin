<div> {{ __('Filled') }}: <span class="fw-bold text-success">{{ ttz($row->filled) }}</span>
    {{ getPair($row->symbol)[0] }}</div>
<div> {{ __('Remaining') }}: <span class="fw-bold text-danger">{{ ttz($row->remaining) }}</span>
    {{ getPair($row->symbol)[0] }}</div>
