<div>{{ __('Symbol') }}: <span class="fw-bold">{{ $row->currency }}
        (<span class="text-danger">{{ $row->currency_chain }}</span>)
        /{{ $row->pair }}
        (<span class="text-danger">{{ $row->pair_chain }}</span>)
    </span>
</div>
<div>{{ __('Type') }}: <span class="fw-bold">{{ $row->type }}</span>

</div>
