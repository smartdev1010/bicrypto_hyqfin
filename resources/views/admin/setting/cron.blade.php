@extends('layouts.admin')
@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('To Automate new update releases run the') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            4-6 </code>{{ __('hours is ideal.') }}</p>
                </div>

                <div class="relative">
                    <label for="updates"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="updates"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('cron.check_update') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="var copyText = document.getElementById('updates');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>



            </div>

        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('To Automate trade result run the') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as what you set the minimum time in general settings. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            5-15 </code>{{ __('minutes is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="cron"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="cron"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('cron') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="var copyText = document.getElementById('cron');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>



            </div>

        </div>

    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('To automate practice trade result run the') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as what you set the minimum time in general settings. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            5-15 </code>{{ __('minutes is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="practiceRef"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="practiceRef"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('practice.cron') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="var copyText = document.getElementById('practiceRef');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>

            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('Crypto Scheduled Orders') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as what you set the minimum time in general settings. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            1-2 </code>{{ __('minutes is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="schedule"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="schedule"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('schedule.cron') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="
                                              var copyText = document.getElementById('schedule');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>

            </div>
        </div>
    </div>
    <br>
    @if ($bot->installed == 1)
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="md:col-span-12 my-2">
                        <p class="cron-p-style">{{ __('Bot Trader Results') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                {{ __('cron job') }}
                            </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                10-15 </code>{{ __('minutes is ideal') }}.</p>
                    </div>
                    <div class="relative">
                        <label for="Botref"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                        <input type="text" id="Botref"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="curl -s {{ route('bot.result') }}" readonly="">
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id="copybtn" class="input-group-text btn-success" title=""
                            onclick="
                                              var copyText = document.getElementById('Botref');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                    </div>

                </div>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="md:col-span-12 my-2">
                        <p class="cron-p-style">{{ __('Bot Trader Results If Missed') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                {{ __('cron job') }}
                            </code>{{ __('on your server. Set the Cron time as minimum as possible and less than the Bot Trader Results cron. Once per') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                5-10 </code>{{ __('minutes is ideal') }}.</p>
                    </div>
                    <div class="relative">
                        <label for="Botmis"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                        <input type="text" id="Botmis"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="curl -s {{ route('bot.missed') }}" readonly="">
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id="copybtn" class="input-group-text btn-success" title=""
                            onclick="
                                              var copyText = document.getElementById('Botmis');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                    </div>

                </div>
            </div>
        </div>

        <br>
    @endif
    @if ($forex->installed == 1)
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="md:col-span-12 my-2">
                        <p class="cron-p-style">{{ __('Forex Investment Results') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                {{ __('cron job') }}
                            </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                10-15 </code>{{ __('minutes is ideal') }}.</p>
                    </div>
                    <div class="relative">
                        <label for="forexref"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                        <input type="text" id="forexref"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="curl -s {{ route('forex.result') }}" readonly="">
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id="copybtn" class="input-group-text btn-success" title=""
                            onclick="
                                              var copyText = document.getElementById('forexref');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                    </div>

                </div>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="md:col-span-12 my-2">
                        <p class="cron-p-style">{{ __('Forex Investment Results If Missed') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                {{ __('cron job') }}
                            </code>{{ __('on your server. Set the Cron time as minimum as possible and less than the forex Trader Results cron. Once per') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                5-10 </code>{{ __('minutes is ideal') }}.</p>
                    </div>
                    <div class="relative">
                        <label for="forexmis"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                        <input type="text" id="forexmis"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="curl -s {{ route('forex.missed') }}" readonly="">
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id="copybtn" class="input-group-text btn-success" title=""
                            onclick="
                                                  var copyText = document.getElementById('forexmis');
                                                  copyText.select();
                                                  copyText.setSelectionRange(0, 99999)
                                                  document.execCommand('copy');
                                                  notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                    </div>


                </div>
            </div>
        </div>
        <br>
    @endif
    @if ($mlm->installed == 1)
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="md:col-span-12 my-2">
                        <p class="cron-p-style">{{ __('MLM Ranks Upgrader') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                {{ __('cron job') }}
                            </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                12-24 </code>{{ __('hours is ideal') }}.</p>
                    </div>
                    <div class="relative">
                        <label for="mlm"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                        <input type="text" id="mlm"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="curl -s {{ route('mlm.ranks') }}" readonly="">
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id="copybtn" class="input-group-text btn-success" title=""
                            onclick="
                                                  var copyText = document.getElementById('mlm');
                                                  copyText.select();
                                                  copyText.setSelectionRange(0, 99999)
                                                  document.execCommand('copy');
                                                  notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                    </div>



                </div>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="md:col-span-12 my-2">
                        <p class="cron-p-style">{{ __('MLM Daily Business Value Cron') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                {{ __('cron job') }}
                            </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                12-24 </code>{{ __('hours is ideal') }}.</p>
                    </div>
                    <div class="relative">
                        <label for="mlm_daily"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                        <input type="text" id="mlm_daily"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="curl -s {{ route('mlm.daily') }}" readonly="">
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id="copybtn" class="input-group-text btn-success" title=""
                            onclick="
                                                  var copyText = document.getElementById('mlm_daily');
                                                  copyText.select();
                                                  copyText.setSelectionRange(0, 99999)
                                                  document.execCommand('copy');
                                                  notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                    </div>



                </div>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="md:col-span-12 my-2">
                        <p class="cron-p-style">{{ __('MLM Membership Cron') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                {{ __('cron job') }}
                            </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                12-24 </code>{{ __('hours is ideal') }}.</p>
                    </div>
                    <div class="relative">
                        <label for="mlm_membership"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                        <input type="text" id="mlm_membership"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="curl -s {{ route('mlm.membership') }}" readonly="">
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id="copybtn" class="input-group-text btn-success" title=""
                            onclick="
                                                  var copyText = document.getElementById('mlm_membership');
                                                  copyText.select();
                                                  copyText.setSelectionRange(0, 99999)
                                                  document.execCommand('copy');
                                                  notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                    </div>



                </div>
            </div>
        </div>
        <br>
    @endif
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('Provider Markets To Tables') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            3-7 </code>{{ __('days is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="marketsToTable"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="marketsToTable"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('provider.marketsToTable') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="
                                              var copyText = document.getElementById('marketsToTable');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>


            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('Provider Currencies') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            3-7 </code>{{ __('days is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="currencies"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="currencies"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('provider.currencies') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="
                                              var copyText = document.getElementById('currencies');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>


            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('Provider Currencies To Table') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            3-7 </code>{{ __('days is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="currenciesToTable"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="currenciesToTable"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('provider.currenciesToTable') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="
                                              var copyText = document.getElementById('currenciesToTable');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>

            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('Provider Pairs To Table') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            3-7 </code>{{ __('days is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="pairsToTable"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="pairsToTable"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('provider.pairsToTable') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="
                                              var copyText = document.getElementById('pairsToTable');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>

            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('Provider Check Deposit') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            1-5 </code>{{ __('minutes is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="check_deposit"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="check_deposit"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('provider.checkdeposit') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="
                                              var copyText = document.getElementById('check_deposit');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>

            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="md:col-span-12 my-2">
                    <p class="cron-p-style">{{ __('Provider Fetch Address') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ __('cron job') }}
                        </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            1-5 </code>{{ __('minutes is ideal') }}.</p>
                </div>
                <div class="relative">
                    <label for="fetch_order"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                    <input type="text" id="fetch_order"
                        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="curl -s {{ route('provider.fetchorder') }}" readonly="">
                    <button type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="copybtn" class="input-group-text btn-success" title=""
                        onclick="
                                              var copyText = document.getElementById('fetch_order');
                                              copyText.select();
                                              copyText.setSelectionRange(0, 99999)
                                              document.execCommand('copy');
                                              notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                </div>

            </div>
        </div>
    </div>
    <br>

    @if ($staking->installed == 1)
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="md:col-span-12 my-2">
                        <p class="cron-p-style">{{ __('Staking Profit') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                {{ __('cron job') }}
                            </code>{{ __('on your server. Set the Cron time as minimum as possible. Once per') }}<code
                                class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-0.2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                1 </code>{{ __('day is ideal') }}.</p>
                    </div>
                    <div class="relative">
                        <label for="staking"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Cron Command') }}</label>

                        <input type="text" id="staking"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="curl -s {{ route('staking.profit') }}" readonly="">
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id="copybtn" class="input-group-text btn-success" title=""
                            onclick="
                                                  var copyText = document.getElementById('staking');
                                                  copyText.select();
                                                  copyText.setSelectionRange(0, 99999)
                                                  document.execCommand('copy');
                                                  notify('success', 'Url copied successfully ' + copyText.value);">{{ __('Copy') }}</button>
                    </div>

                </div>
            </div>
        </div>
    @endif
@endsection

@push('breadcrumb-plugins')
    <button type="button"
        class="btn @if (Carbon\Carbon::parse($general->last_cron_run)->diffInSeconds() < 600) btn-outline-success @elseif(Carbon\Carbon::parse($general->last_cron_run)->diffInSeconds() < 1200) btn-outline-warning @else
        btn-outline-danger @endif "><i
            class="bi bi-clock mr-1"></i> {{ __('Last Cron Run') }} :
        {{ Carbon\Carbon::parse($general->last_cron_run)->difFforHumans() }}</button>
@endpush
