@extends('layouts.admin')
@section('content')
    <form action="/admin/settings" method="POST" id="generalSettings">
        @csrf
        <div class="card mb-5">
            <h4 class="card-header card-title">{{ __('Settings') }}</h4>
            <div class="card-body">
                <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            {{ __('Site Title') }} </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="sitename" value="{{ $general->sitename }}">
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('TinyMCE API') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="tinymce" value="{{ $general->tinymce }}">
                        <small>{{ __('You can create api key from ') }} <a
                                href="https://www.tiny.cloud/my-account/dashboard/"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Tiny
                                Cloud</a></small>
                    </div>

                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('User Default Language') }}</label>
                        <select
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="VUE_APP_I18N_LOCALE" name="VUE_APP_I18N_LOCALE">
                            <option value="" @if (getenv('VUE_APP_I18N_LOCALE') == null || getenv('VUE_APP_I18N_LOCALE') == '') selected @endif disabled="">
                                {{ __('Choose an option') }}
                            </option>
                            <option value="ar" @if (getenv('VUE_APP_I18N_LOCALE') == 'ar') selected @endif>
                                Arabic
                            </option>
                            <option value="bn" @if (getenv('VUE_APP_I18N_LOCALE') == 'bn') selected @endif>
                                Bengali
                            </option>
                            <option value="de" @if (getenv('VUE_APP_I18N_LOCALE') == 'de') selected @endif>
                                German
                            </option>
                            <option value="en" @if (getenv('VUE_APP_I18N_LOCALE') == 'en') selected @endif>
                                English
                            </option>
                            <option value="es" @if (getenv('VUE_APP_I18N_LOCALE') == 'es') selected @endif>
                                Spanish
                            </option>
                            <option value="fa" @if (getenv('VUE_APP_I18N_LOCALE') == 'fa') selected @endif>
                                Farsi
                            </option>
                            <option value="fr" @if (getenv('VUE_APP_I18N_LOCALE') == 'fr') selected @endif>
                                French
                            </option>
                            <option value="id" @if (getenv('VUE_APP_I18N_LOCALE') == 'id') selected @endif>
                                Indonesian
                            </option>
                            <option value="it" @if (getenv('VUE_APP_I18N_LOCALE') == 'it') selected @endif>
                                Italian
                            </option>
                            <option value="ja" @if (getenv('VUE_APP_I18N_LOCALE') == 'ja') selected @endif>
                                Japanese
                            </option>
                            <option value="ko" @if (getenv('VUE_APP_I18N_LOCALE') == 'ko') selected @endif>
                                Korean
                            </option>
                            <option value="nb" @if (getenv('VUE_APP_I18N_LOCALE') == 'nb') selected @endif>
                                Norwegian
                            </option>
                            <option value="nl" @if (getenv('VUE_APP_I18N_LOCALE') == 'nl') selected @endif>
                                Netherlands
                            </option>
                            <option value="pt" @if (getenv('VUE_APP_I18N_LOCALE') == 'pt') selected @endif>
                                Portuguese
                            </option>
                            <option value="ru" @if (getenv('VUE_APP_I18N_LOCALE') == 'ru') selected @endif>
                                Russain
                            </option>
                            <option value="th" @if (getenv('VUE_APP_I18N_LOCALE') == 'th') selected @endif>
                                Thai
                            </option>
                            <option value="tr" @if (getenv('VUE_APP_I18N_LOCALE') == 'tr') selected @endif>
                                Turkish
                            </option>
                            <option value="vi" @if (getenv('VUE_APP_I18N_LOCALE') == 'vi') selected @endif>
                                Vietnamese
                            </option>
                            <option value="zh" @if (getenv('VUE_APP_I18N_LOCALE') == 'zh') selected @endif>
                                Chinese
                            </option>
                        </select>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('User Fallback Language') }}</label>
                        <select
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="VUE_APP_I18N_FALLBACK_LOCALE" name="VUE_APP_I18N_FALLBACK_LOCALE">
                            <option value="" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == null || getenv('VUE_APP_I18N_FALLBACK_LOCALE') == '') selected @endif disabled="">
                                {{ __('Choose an option') }}
                            </option>
                            <option value="ar" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'ar') selected @endif>
                                Arabic
                            </option>
                            <option value="bn" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'bn') selected @endif>
                                Bengali
                            </option>
                            <option value="de" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'de') selected @endif>
                                German
                            </option>
                            <option value="en" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'en') selected @endif>
                                English
                            </option>
                            <option value="es" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'es') selected @endif>
                                Spanish
                            </option>
                            <option value="fa" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'fa') selected @endif>
                                Farsi
                            </option>
                            <option value="fr" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'fr') selected @endif>
                                French
                            </option>
                            <option value="id" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'id') selected @endif>
                                Indonesian
                            </option>
                            <option value="it" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'it') selected @endif>
                                Italian
                            </option>
                            <option value="ja" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'ja') selected @endif>
                                Japanese
                            </option>
                            <option value="ko" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'ko') selected @endif>
                                Korean
                            </option>
                            <option value="nb" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'nb') selected @endif>
                                Norwegian
                            </option>
                            <option value="nl" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'nl') selected @endif>
                                Netherlands
                            </option>
                            <option value="pt" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'pt') selected @endif>
                                Portuguese
                            </option>
                            <option value="ru" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'ru') selected @endif>
                                Russain
                            </option>
                            <option value="th" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'th') selected @endif>
                                Thai
                            </option>
                            <option value="tr" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'tr') selected @endif>
                                Turkish
                            </option>
                            <option value="vi" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'vi') selected @endif>
                                Vietnamese
                            </option>
                            <option value="zh" @if (getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'zh') selected @endif>
                                Chinese
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cors Link') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="cors" value="{{ $general->cors }}">
                        <small>{{ __('Follow cors guide on our documentation') }}</small>
                    </div>
                    @if ($general->staging != 1 && getExt(7) == 1)
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Wallet Connect Project ID') }}</label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="VUE_APP_WALLET_CONNECT_PROJECT_ID"
                                value="{{ getenv('VUE_APP_WALLET_CONNECT_PROJECT_ID') }}">
                            <small>{{ __('You can create project id from ') }}
                                <a href="https://cloud.walletconnect.com/"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Walletconnect
                                    Cloud</a></small>
                        </div>
                    @else
                        <input type="hidden" class="hidden" name="VUE_APP_WALLET_CONNECT_PROJECT_ID"
                            value="{{ getenv('VUE_APP_WALLET_CONNECT_PROJECT_ID') }}">
                    @endif
                </div>
            </div>
        </div>
        @if ($general->staging != 1 && getExt(10) == 1)
            <div class="card my-10">
                <h4 class="card-header card-title">{{ __('Native Trading') }}</h4>
                <div class="card-body">
                    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('TATUM API URL') }}</label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_API_URL" value="{{ getenv('TATUM_API_URL') }}">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('TATUM API KEY') }}</label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_API_KEY" value="{{ getenv('TATUM_API_KEY') }}">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('TATUM TESTNET API KEY') }}
                            </label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_TESTNET_API_KEY"
                                value="{{ getenv('TATUM_TESTNET_API_KEY') }}">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('NETWORK') }}</label>
                            <select id="NETWORK" name="NETWORK" value="{{ getenv('NETWORK') }}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value=""
                                    {{ getenv('NETWORK') == null || getenv('NETWORK') == '' ? 'selected' : '' }}>
                                    {{ __('Choose an option') }}
                                </option>
                                <option value="testnet" {{ getenv('NETWORK') == 'testnet' ? 'selected' : '' }}>
                                    {{ __('testnet') }}</option>
                                <option value="mainnet" {{ getenv('NETWORK') == 'mainnet' ? 'selected' : '' }}>
                                    {{ __('mainnet') }}</option>

                            </select>
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('TESTNET_TYPE') }}
                            </label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TESTNET_TYPE" id="TESTNET_TYPE"
                                value="{{ getenv('TESTNET_TYPE') ?? 'ethereum-sepolia' }}">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('TATUM_RETRIES') }}
                            </label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_RETRIES" id="TATUM_RETRIES"
                                value="{{ getenv('TATUM_RETRIES') ?? '5' }}">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('TATUM_RETRY_DELAY') }}
                            </label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_RETRY_DELAY" id="TATUM_RETRY_DELAY"
                                value="{{ getenv('TATUM_RETRY_DELAY') ?? '1000' }}">
                        </div>
                    </div>
                </div>
            </div>
        @endif
        @if ($general->staging != 1 && getExt(12) == 1)
            <div class="card my-10">
                <h4 class="card-header card-title">{{ __('PUSHER') }}</h4>
                <div class="card-body">
                    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('PUSHER APP ID') }}</label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="PUSHER_APP_ID" value="{{ getenv('PUSHER_APP_ID') }}">
                            <small>{{ __('Create an app in') }} <a
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://dashboard.pusher.com/apps"
                                    target="__blank">{{ __('Pusher') }}</a></small>
                        </div>

                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('PUSHER APP KEY') }}</label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="PUSHER_APP_KEY" value="{{ getenv('PUSHER_APP_KEY') }}">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('PUSHER APP SECRET') }}</label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="PUSHER_APP_SECRET" value="{{ getenv('PUSHER_APP_SECRET') }}">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('PUSHER APP CLUSTER') }}
                            </label>
                            <select
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="PUSHER_APP_CLUSTER" name="PUSHER_APP_CLUSTER">
                                <option value="" @if (getenv('PUSHER_APP_CLUSTER') == '') selected @endif disabled="">
                                    {{ __('Choose an option') }}
                                </option>
                                <option value="mt1" @if (getenv('PUSHER_APP_CLUSTER') == 'mt1') selected @endif>
                                    mt1 (US East (N. Virginia))
                                </option>
                                <option value="ap1" @if (getenv('PUSHER_APP_CLUSTER') == 'ap1') selected @endif>
                                    ap1 (Asia Pacific (Singapore))
                                </option>
                                <option value="ap2" @if (getenv('PUSHER_APP_CLUSTER') == 'ap2') selected @endif>
                                    ap2 (Asia Pacific (Mumbai))
                                </option>
                                <option value="us2" @if (getenv('PUSHER_APP_CLUSTER') == 'us2') selected @endif>
                                    us2 (US East (Ohio))
                                </option>
                                <option value="ap3" @if (getenv('PUSHER_APP_CLUSTER') == 'ap3') selected @endif>
                                    ap3 (Asia Pacific (Tokyo))
                                </option>
                                <option value="us3" @if (getenv('PUSHER_APP_CLUSTER') == 'us3') selected @endif>
                                    us3 (US West (Oregon))
                                </option>
                                <option value="ap4" @if (getenv('PUSHER_APP_CLUSTER') == 'ap4') selected @endif>
                                    ap4 (Asia Pacific (Sydney))
                                </option>
                                <option value="eu" @if (getenv('PUSHER_APP_CLUSTER') == 'eu') selected @endif>
                                    eu (EU (Ireland))
                                </option>
                                <option value="sa1" @if (getenv('PUSHER_APP_CLUSTER') == 'sa1') selected @endif>
                                    sa1 (South America (São Paulo))
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        @endif
        <div class="card my-10">
            <h4 class="card-header card-title">{{ __('Rates Settings') }}</h4>
            <div class="card-body">
                <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Currency') }}</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="cur_text" value="{{ $general->cur_text }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Currency Symbol') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="cur_sym" value="{{ $general->cur_sym }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Practice Balance') }}</label>
                        <div class="input-group">
                            <input type="text" name="practice_balance" placeholder="{{ __('Enter Amount') }}"
                                value="{{ getAmount($general->practice_balance) }}" aria-describedby="basic-addon2">
                            <span id="basic-addon2">{{ $general->practice_wallet }}</span>
                        </div>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Practice Wallet') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="practice_wallet" value="{{ $general->practice_wallet }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trade Profit') }}</label>
                        <div class="input-group">
                            <input type="text" name="profit" placeholder="{{ __('Enter Amount') }}"
                                value="{{ getAmount($general->profit) }}" aria-describedby="basic-addon2">

                            <span id="basic-addon2">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Exchange Fee') }}</label>
                        <div class="input-group">
                            <input type="text" name="exchange_fee" placeholder="{{ __('Enter Percentage') }}"
                                value="{{ getAmount($general->exchange_fee) }}" aria-describedby="basic-addon2">
                            <span id="basic-addon2">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Transaction Fee') }}</label>
                        <div class="input-group">
                            <input type="text" name="trx_fee" placeholder="{{ __('Enter Percentage') }}"
                                value="{{ getAmount($general->trx_fee) }}" aria-describedby="basic-addon2">
                            <span id="basic-addon2">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Thirdparty Withdraw Fees') }}</label>
                        <div class="input-group">
                            <input type="text" name="provider_withdraw_fee" placeholder="{{ __('Enter Amount') }}"
                                value="{{ getAmount($general->provider_withdraw_fee) }}" aria-describedby="basic-addon2">
                            <span id="basic-addon2">
                                %
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card my-10">
            <h4 class="card-header card-title">{{ __('Trade Limits Settings') }}</h4>
            <div class="card-body">
                <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trades Minimum Amount') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="min_amount" step="0.00000001" value="{{ $limits->min_amount ?? 0 }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trades Maximum Amount') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="max_amount" value="{{ $limits->max_amount ?? 0 }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trades Minimum Seconds') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="min_time_sec" value="{{ $limits->min_time_sec ?? 0 }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trades Maximum Seconds') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="max_time_sec" value="{{ $limits->max_time_sec ?? 0 }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trades Minimum Minutes') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="min_time_min" value="{{ $limits->min_time_min ?? 0 }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trades Maximum Minutes') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="max_time_min" value="{{ $limits->max_time_min ?? 0 }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trades Minimum Hours') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="min_time_hour" value="{{ $limits->min_time_hour ?? 0 }}">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Trades Maximum Hours') }}
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="max_time_hour" value="{{ $limits->max_time_hour ?? 0 }}">
                    </div>
                </div>
            </div>
        </div>
        <div class="card my-10">
            <h4 class="card-header card-title">{{ __('Extra Settings') }}</h4>
            <div class="card-body">
                <div class="grid gap-5 md:grid-cols-3">
                    <div class="flex items-center pl-4  dark:border-gray-700">
                        <div class="flex items-center justify-between">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                type="checkbox" data-bs-toggle="toggle" data-onstyle="success" data-offstyle="danger"
                                data-on="{{ __('Enable') }}" data-off="{{ __('Disabled') }}" name="registration"
                                @if ($general->registration) checked @endif>
                            <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                                for="registration">{{ __('User Registration') }}</label>
                        </div>
                    </div>
                    <div class="flex items-center pl-4  dark:border-gray-700">
                        <div class="flex items-center justify-between">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                type="checkbox" data-bs-toggle="toggle" data-onstyle="success" data-offstyle="danger"
                                data-on="{{ __('Enable') }}" data-off="{{ __('Disabled') }}" name="force_ssl"
                                @if ($general->force_ssl) checked @endif>
                            <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                                for="force_ssl">{{ __('Force SSL') }}</label>
                        </div>
                    </div>
                    <div class="flex items-center pl-4  dark:border-gray-700">
                        <div class="flex items-center justify-between">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                type="checkbox" name="APP_DEBUG" @if (getenv('APP_DEBUG') == 'true') checked @endif>
                            <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                                for="APP_DEBUG">{{ __('App Debug') }}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button type="submit" class="btn btn-outline-primary">{{ __('Update') }}</button>
            </div>
        </div>
    </form>
@endsection
