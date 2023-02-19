@if ($row->status == 1)
    @if ((new \App\Http\Controllers\Admin\Providers\ProviderInstallController())->fetch_balance())
        <span class="badge bg-success">{{ __('Connected Successfully') }}</span>
    @else
        <span class="badge bg-danger">{{ __('Connection Failed') }}</span>
    @endif
@endif
