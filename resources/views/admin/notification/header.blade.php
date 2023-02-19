<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex justify-between -mb-px text-sm font-large text-center px-10" role="tablist">
        <li class="nav-item @if (Route::current()->getName() == 'admin.settings.mail.index') bg-gray-300 @endif">
            <a id="system-tab" href="{{ route('admin.settings.mail.index') }}" aria-controls="system"
                aria-controls="system">
                {{ __('General Template') }} </a>
        </li>
        <li class="nav-item @if (Route::current()->getName() == 'admin.settings.mail.templates') bg-gray-300 @endif">
            <a id="templates-tab" href="{{ route('admin.settings.mail.templates') }}" aria-controls="templates"
                aria-controls="templates">{{ __('Templates') }}</a>
        </li>
        <li class="nav-item @if (Route::current()->getName() == 'admin.settings.mail.email') bg-gray-300 @endif">
            <a id="dashboard-tab" href="{{ route('admin.settings.mail.email') }}" aria-controls="dashboard"
                aria-controls="system">{{ __('Email Settings') }}</a>
        </li>
        <li class="nav-item @if (Route::current()->getName() == 'admin.settings.mail.sms') bg-gray-300 @endif">
            <a id="trading-tab" href="{{ route('admin.settings.mail.sms') }}" aria-controls="trading"
                aria-controls="system">{{ __('SMS Settings') }}</a>
        </li>
        <li class="nav-item @if (Route::current()->getName() == 'admin.settings.mail.push') bg-gray-300 @endif">
            <a id="wallet-tab" href="{{ route('admin.settings.mail.push') }}" aria-controls="wallet"
                aria-controls="system">{{ __('Push Notification Settings') }}</a>
        </li>
    </ul>

</div>
