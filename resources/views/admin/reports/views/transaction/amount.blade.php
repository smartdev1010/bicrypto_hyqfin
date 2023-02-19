<span
    @if ($row->trx_type == '+') class="text-green-400 dark:text-green-300" @else class="text-red-400 dark:text-red-300" @endif>
    {{ $row->trx_type == '+' ? '+' : '-' }} {{ getAmount($row->amount) }}
    {{ isset($row->currency) ? $row->currency : $this->general->cur_text }}</span>
