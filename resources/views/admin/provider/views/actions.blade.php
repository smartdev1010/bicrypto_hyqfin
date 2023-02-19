@if ($row->development != 1)
    @if ($row->installed == 1)
        @if ($row->status == 1)
            @php
                $res = (new \App\Http\Controllers\Admin\Providers\ProviderInstallController())->check_update($row->product_id);
            @endphp
            @if ($res['status'])
                <a type="button" class="btn btn-outline-warning btn-sm" style="top:80%"
                    href="{{ route('admin.provider.install', [$row->product_id]) }}">
                    <i class="bi bi-download"></i> {{ __('Update') }}
                    V{{ $res['version'] }}
                    {{ __('Available') }}</a>
            @endif
            <a href="{{ route('admin.provider.currencies.index', $row->id) }}" class="btn btn-outline-info btn-sm"
                title="Enable/Disable Currencies">
                {{ __('Currencies') }}
            </a>
            <a href="{{ route('admin.provider.markets.index', $row->id) }}" class="btn btn-outline-info btn-sm"
                title="Enable/Disable Market Pairs">
                {{ __('Markets') }}
            </a>
            <a href="{{ route('admin.provider.balances', $row->id) }}" class="btn btn-outline-info btn-sm"
                title="CHeck balances and debug errors in provider api connection">
                {{ __('Debug') }}
            </a>
            <a href="{{ route('admin.provider.refresh') }}" class="btn btn-icon btn-outline-primary btn-sm"
                title="Refresh">
                <i class="bi bi-arrow-repeat"></i>
            </a>
        @endif
        <a href="{{ route('admin.provider.edit', $row->id) }}" class="btn btn-icon btn-outline-warning btn-sm"
            title="{{ __('Edit') }}">
            <i class="bi bi-pencil-square"></i>
        </a>
        @if ($row->status == 0)
            <button type="button" class="btn btn-icon btn-outline-success btn-sm activateBtn"
                data-modal-toggle="activateModal" data-id="{{ $row->id }}" data-name="{{ __($row->name) }}"
                title="{{ __('Enable') }}">
                <i class="bi bi-eye"></i>
            </button>
        @else
            <span title="{{ __('Disable') }}">
                <button type="button" class="btn btn-icon btn-outline-danger btn-sm deactivateBtn"
                    data-modal-toggle="deactivateModal" data-id="{{ $row->id }}"
                    data-name="{{ __($row->name) }}">
                    <i class="bi bi-eye-slash"></i>
                </button>
            </span>
        @endif
        @if ($row->title != 'coinbasepro')
            <a href="{{ route('admin.provider.activater', [$row->product_id]) }}"
                class="btn btn-outline-success btn-sm ml-1" title="Reverify if you license show invalid error">
                {{ __('Re-Verify License') }}
            </a>
        @endif
    @else
        @if ($row->activated == 0)
            <a href="{{ route('admin.provider.activater', [$row->product_id]) }}"
                class="btn btn-icon btn-outline-success btn-sm ml-1" title="{{ __('Verify License') }}">
                <i class="bi bi-check-lg"></i>
            </a>
        @else
            <a href="{{ route('admin.provider.install', [$row->product_id]) }}"
                class="btn btn-icon btn-outline-seconday btn-sm ml-1" title="{{ __('Install') }}">
                <i class="bi bi-download"></i>
            </a>
            @if ($row->title != 'coinbasepro')
                <a href="{{ route('admin.provider.activater', [$row->product_id]) }}"
                    class="btn btn-icon btn-outline-success btn-sm ml-1" title="{{ __('Re-Verify License') }}">
                    <i class="bi bi-check-lg"></i>
                </a>
            @endif
        @endif
    @endif
@endif
