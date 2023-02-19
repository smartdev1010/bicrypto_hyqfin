<div class="">Amount: {{ getAmount($row->amount) . ' ' . __($this->gen->cur_text) }}</div>
<div class="">Charge: {{ getAmount($row->charge) . ' ' . __($this->gen->cur_text) }}</div>
<div class="">After Charge:
    {{ (getPlatform('wallet')->deposit_fees_method == 'subtracted' ? getAmount($row->amount - $row->charge) : getAmount($row->amount + $row->charge)) . __($this->gen->cur_text) }}
</div>
<div class="">Rate: {{ getAmount($row->rate) . ' ' . __($row->method_currency) }}</div>
<div class="">Payable: {{ getAmount($row->final_amo) . ' ' . __($row->method_currency) }}</div>
