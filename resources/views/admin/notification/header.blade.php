<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
        role="tablist">
        <li class="mr-2">
            <a id="system-tab" href="{{ route('admin.settings.mail.index') }}" aria-controls="system"
                class="rounded-t-lg inline-block p-4 @if (Route::current()->getName() == 'admin.settings.mail.index') text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500 @else  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 @endif"
                aria-controls="system">
                {{ __('General Template') }} </a>
        </li>
        <li class="mr-2">
            <a id="templates-tab" href="{{ route('admin.settings.mail.templates') }}" aria-controls="templates"
                class="rounded-t-lg inline-block p-4 @if (Route::current()->getName() == 'admin.settings.mail.templates') text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500 @else  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 @endif"
                aria-controls="templates">{{ __('Templates') }}</a>
        </li>
        <li class="mr-2">
            <a id="dashboard-tab" href="{{ route('admin.settings.mail.email') }}" aria-controls="dashboard"
                class="rounded-t-lg inline-block p-4 @if (Route::current()->getName() == 'admin.settings.mail.email') text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500 @else  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 @endif"
                aria-controls="system">{{ __('Email Settings') }}</a>
        </li>
        <li class="mr-2">
            <a id="trading-tab" href="{{ route('admin.settings.mail.sms') }}" aria-controls="trading"
                class="rounded-t-lg inline-block p-4 @if (Route::current()->getName() == 'admin.settings.mail.sms') text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500 @else  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 @endif"
                aria-controls="system">{{ __('SMS Settings') }}</a>
        </li>
        <li class="mr-2">
            <a id="wallet-tab" href="{{ route('admin.settings.mail.push') }}" aria-controls="wallet"
                class="rounded-t-lg inline-block p-4 @if (Route::current()->getName() == 'admin.settings.mail.push') text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500 @else  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 @endif"
                aria-controls="system">{{ __('Push Notification Settings') }}</a>
        </li>
    </ul>

</div>
