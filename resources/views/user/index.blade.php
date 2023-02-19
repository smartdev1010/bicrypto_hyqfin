@extends('layouts.app')

@section('content')
    <div id="app">
    </div>
@endsection

@section('page-script')
    <script>
        window.VUE_APP_I18N_LOCALE = "{{ getenv('VUE_APP_I18N_LOCALE') ?? null }}";
        window.VUE_APP_I18N_FALLBACK_LOCALE = "{{ getenv('VUE_APP_I18N_FALLBACK_LOCALE') ?? null }}";
        window.gnl = @json(getGen());
        window.cors = gnl.cors;
        window.plat = @json(getPlatforms());
        window.ext = @json(getExts());
        window.provider = '{{ $provider }}';
        window.trading_wallet = '{{ $trading_wallet }}';
        window.cur_rate = '{{ $gnl_cur->rate }}';
        window.cur_symbol = '{{ $gnl_cur->code }}';
    </script>
    <script async src="{{ asset(mix('js/index.js')) }}"></script>
    @if (getNotify()->push_status == 1)
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
        <script>
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
                OneSignal.init({
                    appId: "{{ getenv('ONESIGNAL_APP_ID') }}",
                });
                OneSignal.setExternalUserId('{{ auth()->user()->id }}');
            });
        </script>
    @endif
@endsection
