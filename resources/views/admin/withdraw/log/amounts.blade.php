<div class="">Amount: {{ getAmount($row->amount) . ' ' . __($this->gen->cur_text) }}</div>
<div class="">Charge: {{ getAmount($row->charge) . ' ' . __($this->gen->cur_text) }}</div>
<div class="">After Charge: {{ getAmount($row->after_charge) . ' ' . __($this->gen->cur_text) }}</div>
<div class="">Rate: {{ getAmount($row->rate) . ' ' . __($row->currency) }}</div>
<div class="">Payable: {{ getAmount($row->final_amount) . ' ' . __($row->currency) }}</div>
