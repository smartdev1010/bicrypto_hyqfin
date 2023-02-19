@if ($row->tab == 'system')
    <span class="badge bg-danger">{{ __('System') }}</span>
@elseif($row->tab == 'addons')
    <span class="badge bg-warning">{{ __('Addons') }}</span>
@elseif($row->tab == 'users')
    <span class="badge bg-success">{{ __('Users') }}</span>
@elseif($row->tab == 'logs')
    <span class="badge bg-info">{{ __('Logs') }}</span>
@endif
