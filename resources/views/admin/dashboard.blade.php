@extends('layouts.admin')
@section('content')
    <div class="space-y-5 overflow-hidden">
        <div class="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <livewire:components.charts.area element="total_users" route="admin.users.all" title="Users" tooltip="Total Users"
                color="#9061F9"
                icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>' />
            <livewire:components.charts.area element="verified_users" route="admin.users.all" title="Verified Users"
                tooltip="Verified Users" color="#55DD92"
                icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>' />
            <livewire:components.charts.area element="unverified_users" route="admin.users.all" title="Unverified Users"
                tooltip="Unverified Users" color="#F05252"
                icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
              </svg>' />
        </div>

        <div class="grid gap-5 grid-cols-2">
            @can('trade_log')
                <livewire:components.charts.transactions element="trades_report" route="admin.users.all" title="Trades Report"
                    tooltip="Trades" color="#4467EF"
                    icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>' />
            @endcan
            @if ($plat->trading->binary_status == 1)
                @can(['binary_practice_log', 'binary_trade_log'])
                    <livewire:components.charts.monthly element="binary_trades" route="admin.users.all"
                        title="Binary Trades Report" :tooltip="['Wins', 'Loses']" :colors="['#22c55e', '#ef4444']"
                        icon='<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>' />
                @endcan
            @endif
        </div>


        <div class="grid gap-5 grid-cols-2">
            @can('trade_log')
                <livewire:components.charts.monthly-transactions element="deposits" route="admin.users.all" title="Deposits"
                    :tooltip="['Total', 'Fees', 'Completed', 'Pending']" :colors="['#9061F9', '#E74694', '#0E9F6E', '#E3A008']"
                    icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" /></svg>' />
            @endcan
            @can(['binary_practice_log', 'binary_trade_log'])
                <livewire:components.charts.monthly-transactions element="withdrawals" route="admin.users.all"
                    title="Withdrawals" :tooltip="['Total', 'Fees', 'Completed', 'Pending']" :colors="['#9061F9', '#E74694', '#0E9F6E', '#E3A008']"
                    icon='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>' />
            @endcan
        </div>
    </div>

    {{-- @can('system_manager_access')
        @if (file_exists(public_path() . '/install/index.php') && auth()->user()->role_id == 1)
            <div class="alert alert-danger mb-2">
                <div class="alert-heading"><i class="bi bi-exclamation-triangle"></i> {{ __('Security Alert') }}</div>
                <div class="alert-body">
                    {{ __('Your have not deleted') }}
                    <code>/public/install/index.php</code>
                    {{ __('file, others can invalidate your license if its not deleted, click') }} <a
                        href="{{ route('admin.alerts.remove_install_file') }}"><button
                            class="btn btn-sm btn-success">{{ __('Install Cleaner') }}</button></a>
                    {{ __('to get it removed!') }}
                </div>
            </div>
        @endif
    @endcan
    @can('email_manager_show')
        @if (!env('MAIL_PASSWORD'))
            <div class="alert alert-warning mb-2">
                <div class="alert-heading"><i class="bi bi-exclamation-triangle"></i> {{ __('Email Warning') }}</div>
                <div class="alert-body">
                    {{ __('You forgot to add SMTP email in email settings, click') }} <a
                        href="{{ route('admin.settings.mail.index') }}"><button
                            class="btn btn-sm btn-success">{{ __('Email Settings') }}</button></a>
                    {{ __('to add it, otherwise you will get error 500 on registeration!') }}
                </div>
            </div>
        @endif
    @endcan
    @can('general_settings_show')
        @if (!getGen()->cors)
            <div class="alert alert-warning mb-2">
                <div class="alert-heading"><i class="bi bi-exclamation-triangle"></i> {{ __('Cors Warning') }}</div>
                <div class="alert-body">
                    {{ __('You forgot to add cors link in general settings, click') }} <a
                        href="{{ route('admin.setting.index') }}"><button
                            class="btn btn-sm btn-success">{{ __('General Settings') }}</button></a>
                    {{ __('to add it, otherwise you will get empty page on trading!') }}
                </div>
            </div>
        @endif
    @endcan --}}
    {{-- <div class="col-xl-4 lg:col-span-4 md:col-span-6 xs:col-span-12">
        <div class="card card-transaction">
            <div class="card-title m-1">
                <div class="flex justify-between">
                    @if ($notifications->count() > 0)
                        <h4 class="notification-title mb-0 mr-auto">{{ __('Notifications') }}</h4>
                        <div class="badge rounded-pill badge-light-primary badge-sm">@lang('You have')
                            <span class="fw-bolder">{{ $notifications->count() }}</span> @lang('unread notification')
                        </div>
                    @else
                        <h4 class="notification-title mb-0 mr-auto">{{ __('Notifications') }}</h4>
                    @endif
                </div>
            </div>
            @if ($notifications->count() > 0)
                <div style="max-height: calc(38vh); overflow-y: auto">
                    @foreach ($notifications as $notification)
                        <a class="m-1 flex" href="{{ route('admin.notification.read', $notification->id) }}">
                            <div class="list-item flex items-start">
                                <div class="mr-1">
                                    <div class="avatar">
                                        <img class="round"
                                            src="{{ getImage(imagePath()['profileImage']['path'] . '/' . @$notification->user->profile_photo_path, imagePath()['profileImage']['size']) }}"
                                            alt="avatar" height="40" width="40">
                                    </div>
                                </div>
                                <div class="text-dark">
                                    <div class="fw-bolder">{{ $notification->title }}
                                    </div>
                                    <div><small class="notification-text"><i class="bi bi-clock"></i>
                                            {{ $notification->created_at->diffForHumans() }}</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <hr>
                    @endforeach
                </div>
                <div class="input-group mt-auto mx-auto">
                    <a class="btn btn-primary w-50 btn-sm"
                        href="{{ route('admin.notifications') }}">{{ __('Read all') }}</a>
                    <a class="btn btn-danger w-50 btn-sm"
                        href="{{ route('admin.notifications.clean') }}">{{ __('Remove all') }}</a>
                </div>
        </div>
    @else
        <div class="text-muted text-center" colspan="100%">
            <img height="128px" width="128px" src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                alt="" />
            <p class="">{{ __('No Unread Notification Found') }}</p>
        </div>
        @endif
    </div> --}}
@endsection
@push('breadcrumb-plugins')
    @can('update_show')
        @if ($gnl->new_version > $api->get_current_version())
            <a type="button" class="btn btn-outline-warning"
                href="{{ route('admin.update') }}">{{ __('New Update Released') }}:
                V{{ $gnl->new_version }}</a>
        @endif
        <button type="button" class="btn btn-outline-primary" onclick="check_update()" id="checkUpdatebtn">
            <div role="status" id="spinner" class="hidden">
                <svg class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            {{ __('Check New Update') }}
        </button>
    @endcan
@endpush
@section('vendor-scripts')
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    {{-- @vite(['resources/js/apexcharts.js']) --}}
@endsection
@section('page-scripts')
    <script>
        function check_update() {
            $('#checkUpdatebtn').prop("disabled", true);
            $('#checkUpdatebtn').addClass("focus:outline-none disabled:opacity-50");
            $('#spinner').removeClass('hidden');
            $.ajax({
                method: "get",
                headers: {
                    "X-CSRF-TOKEN": "{{ csrf_token() }}",
                },
                url: "{{ route('admin.update.check') }}",
                success: function(response) {
                    notify(response.type, response.message)
                    $('#checkUpdatebtn').prop("disabled", false);
                    $('#checkUpdatebtn').removeClass(
                        "focus:outline-none disabled:opacity-50");
                    $('#spinner').addClass('hidden');
                    window.livewire.emit('refreshDatatable');
                    $('#checkUpdateclose').click();
                },
                error: function(response) {
                    notify(response.type, response.message)
                    $('#checkUpdatebtn').prop("disabled", false);
                    $('#checkUpdatebtn').removeClass(
                        "focus:outline-none disabled:opacity-50");
                    $('#spinner').addClass('hidden');
                    $('#checkUpdateclose').click();
                }
            });
        };
    </script>
@endsection
