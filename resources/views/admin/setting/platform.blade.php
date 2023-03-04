@extends('layouts.admin')
@section('content')
<form action="{{ route('admin.platform.update') }}" method="POST" enctype="multipart/form-data" id="settings">
  @csrf
  <div class="card">
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent"
        role="tablist">
        <li class="mr-2" role="presentation">
          <button class="inline-block p-4 rounded-t-lg border-b-2" id="system-tab" data-tabs-target="#system"
            type="button" role="tab" aria-controls="system" aria-selected="true">{{ __('System') }}</button>

        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
            aria-selected="false">{{ __('Dashboard') }}</button>

        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="trading-tab" data-tabs-target="#trading" type="button" role="tab" aria-controls="trading"
            aria-selected="false">{{ __('Trading') }}</button>

        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="wallet-tab" data-tabs-target="#wallet" type="button" role="tab" aria-controls="wallet"
            aria-selected="false">{{ __('Wallet') }}</button>


        </li>
        @if ($ext[3] == 1)
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="mlm-tab" data-tabs-target="#mlm" type="button" role="tab" aria-controls="mlm"
            aria-selected="false">{{ __('MLM') }}</button>
        </li>
        @endif
        @if ($ext[6] == 1)
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="staking-tab" data-tabs-target="#staking" type="button" role="tab" aria-controls="staking"
            aria-selected="false">{{ __('Staking') }}</button>
        </li>
        @endif
        @if ($ext[10] == 1)
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="eco-tab" data-tabs-target="#eco" type="button" role="tab" aria-controls="eco"
            aria-selected="false">{{ __('Ecosystem') }}</button>
        </li>
        @endif
        {{-- <li class="mr-2" role="presentation">
                        <button
                            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="mobile-tab" data-tabs-target="#mobile" type="button" role="tab" aria-controls="mobile"
                            aria-selected="false">{{ __('Mobile') }}</button>

        </li> --}}
      </ul>
    </div>




    <div>
      <div id="myTabContent">
        <div class="space-y-3 px-3" id="system" aria-labelledby="system-tab" role="tabpanel">

          {{-- <div class="border rounded dark:border-gray-600 shadow p-2">
                            <div class="flex items-center mb-2">
                                <label class="inline-flex relative items-center cursor-pointer mr-3">
                                    <input type="checkbox" value="{{ $platform->system->sw }}" class="sr-only peer"
          data-on="{{ __('Active') }}" data-off="{{ __('Inactive') }}" name="sw"
          id="sw" @if ($platform->system->sw == 1) checked @endif>
          <div class="toggle peer" onclick="$('#sw').val($('#sw').val() != 1 ? 1 : 0)">
          </div>
          </label>
          <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Service Worker') }}</span>
        </div>
        <small class="text-warning">
          {{ __('Enhance performance by caching all (js,css) files into the client PC') }}</small>
      </div> --}}

      <div class="border rounded dark:border-gray-600 shadow p-2">
        <div class="flex items-center mb-2">
          <label class="inline-flex relative items-center cursor-pointer mr-3">
            <input type="checkbox" value="{{ $platform->kyc->kyc_status }}" class="sr-only peer"
              data-on="{{ __('Active') }}" data-off="{{ __('Inactive') }}" name="kyc_status" id="kyc_status" @if
              ($platform->kyc->kyc_status == 1) checked @endif>
            <div class="toggle peer" onclick="$('#kyc_status').val($('#kyc_status').val() != 1 ? 1 : 0)">
            </div>
          </label>
          <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('KYC') }}</span>
        </div>
        <small class="text-warning">
          {{ __('Disabled = Client directly start trading without any verifications') }}</small>
      </div>

      <div class="border rounded dark:border-gray-600 shadow p-2">
        <div class="flex items-center mb-2">
          <label class="inline-flex relative items-center cursor-pointer mr-3">
            <input type="checkbox" value="{{ $platform->system->maintenance }}" class="sr-only peer"
              data-on="{{ __('Active') }}" data-off="{{ __('Inactive') }}" name="maintenance" id="maintenance" @if
              ($platform->system->maintenance == 1) checked @endif>
            <div class="toggle peer" onclick="$('#maintenance').val($('#maintenance').val() != 1 ? 1 : 0)">
            </div>
          </label>
          <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Maintenance') }}</span>
        </div>
        <small class="text-warning">
          {{ __('Set your frontend in maintenance state for users') }}</small>
      </div>

      <div class="border rounded dark:border-gray-600 shadow p-2">
        <div class="flex items-center mb-2">
          <label class="inline-flex relative items-center cursor-pointer mr-3">
            <input type="checkbox" value="{{ $platform->system->phone }}" class="sr-only peer"
              data-on="{{ __('Active') }}" data-off="{{ __('Inactive') }}" name="phone" id="phone" @if
              ($platform->system->phone == 1) checked @endif>
            <div class="toggle peer" onclick="$('#phone').val($('#phone').val() != 1 ? 1 : 0)">
            </div>
          </label>
          <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Phone Number') }}</span>
        </div>
        <small class="text-warning">
          {{ __('Enable phone number in registeration page') }}</small>
      </div>

      <div class="border rounded dark:border-gray-600 shadow p-2">
        <div class="flex items-center mb-2">
          <label class="inline-flex relative items-center cursor-pointer mr-3">
            <input type="checkbox" value="{{ $platform->frontend->frontend_status }}" class="sr-only peer"
              data-on="{{ __('Active') }}" data-off="{{ __('Inactive') }}" name="frontend_status" id="frontend_status"
              @if ($platform->frontend->frontend_status == 1) checked @endif>
            <div class="toggle peer" onclick="$('#frontend_status').val($('#frontend_status').val() != 1 ? 1 : 0)">
            </div>
          </label>
          <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Frontend') }}</span>
        </div>
        <small class="text-warning">
          {{ __('Disabled = Login page becomes the homepage') }}</small>
      </div>

      {{-- <div class="border rounded dark:border-gray-600 shadow p-2">
                            <div class="flex items-center mb-2">
                                <label class="inline-flex relative items-center cursor-pointer mr-3">
                                    <input type="checkbox" value="{{ $platform->frontend->preloader }}"
      class="sr-only peer" data-on="{{ __('Active') }}"
      data-off="{{ __('Inactive') }}" name="preloader" id="preloader"
      @if ($platform->frontend->preloader == 1) checked @endif>
      <div class="toggle peer" onclick="$('#preloader').val($('#preloader').val() != 1 ? 1 : 0)">
      </div>
      </label>
      <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Frontend Preloader') }}</span>
    </div>
    <small class="text-warning">
      {{ __('Disabled = directly show frontend without waiting') }}</small>
  </div> --}}

  {{-- <div class="border rounded dark:border-gray-600 shadow p-2">
                            <div class="flex items-center mb-2">
                                <label class="inline-flex relative items-center cursor-pointer mr-3">
                                    <input type="checkbox" value="{{ $platform->frontend->auth_design }}"
  class="sr-only peer" data-on="Cover" data-off="Minimal" name="auth_design"
  id="auth_design" @if ($platform->frontend->auth_design == 1) checked @endif>
  <div class="toggle peer" onclick="$('#auth_design').val($('#auth_design').val() != 1 ? 1 : 0)">
  </div>
  </label>
  <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Auth Pages Design') }}</span>
  </div>
  <small class="text-warning">
    {{ __('Minimal: Compact Card, Cover: Full Page') }}</small>
  </div> --}}
  </div>
  <div class="space-y-3 px-3" id="dashboard" aria-labelledby="dashboard-tab" role="tabpanel">
    {{-- <div class="border rounded dark:border-gray-600 shadow p-2">
                            <div class="flex items-center justify-between">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="default_page">{{ __('Default Dashboard Page') }}</label>
    <select
      class="max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      id="default_page" name="default_page">
      <option value="" @if (!isset($platform->dashboard->default_page) || $platform->dashboard->default_page == null ||
        $platform->dashboard->default_page == '') selected @endif
        disabled="">
        {{ __('Choose an option') }}
      </option>
      <option value="trading" @if (isset($platform->dashboard->default_page) && $platform->dashboard->default_page ==
        'trading') selected @endif>
        Trading Page
      </option>
      <option value="binary" @if (isset($platform->dashboard->default_page) && $platform->dashboard->default_page ==
        'binary') selected @endif>
        Binary Dashboard
      </option>
      <option value="bot" @if (isset($platform->dashboard->default_page) && $platform->dashboard->default_page == 'bot')
        selected @endif>
        Bot Dashboard
      </option>
      <option value="ico" @if (isset($platform->dashboard->default_page) && $platform->dashboard->default_page == 'ico')
        selected @endif>
        Token Offers Page
      </option>
      <option value="mlm" @if (isset($platform->dashboard->default_page) && $platform->dashboard->default_page == 'mlm')
        selected @endif>
        Referrals Page
      </option>
      <option value="forex" @if (isset($platform->dashboard->default_page) && $platform->dashboard->default_page ==
        'forex') selected @endif>
        Forex Dashboard
      </option>
      <option value="staking" @if (isset($platform->dashboard->default_page) && $platform->dashboard->default_page ==
        'staking') selected @endif>
        Staking Dashboard
      </option>
      <option value="knowledge" @if (isset($platform->dashboard->default_page) && $platform->dashboard->default_page ==
        'knowledge') selected @endif>
        Knowledge Base Page
      </option>
    </select>
  </div>
  <small class="text-warning">{{ __('Set default page to load after user login') }}</small>
  </div> --}}

  <div class="border rounded dark:border-gray-600 shadow p-2">
    <div class="flex items-center justify-between">
      <div>
        <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
          for="first_trade_page">{{ __('First Trading Page') }}</label>
      </div>
      <input class="form-control max-w-sm" type="text" name="first_trade_page"
        value="{{ $platform->trading->first_trade_page ?? 'BTC/USDT' }}">
    </div>
    <small class="text-warning">{{ __('Set first pair to show when you click start trading') }}</small>
  </div>
  </div>
  <div class="space-y-3 px-3" id="trading" aria-labelledby="trading-tab" role="tabpanel">
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center mb-2">
        <label class="inline-flex relative items-center cursor-pointer mr-3">
          <input type="checkbox" value="{{ $platform->trading->binary_status }}" class="sr-only peer" data-on="Cover"
            data-off="Minimal" name="binary_status" id="binary_status" @if ($platform->trading->binary_status == 1)
          checked @endif>
          <div class="toggle peer" onclick="$('#binary_status').val($('#binary_status').val() != 1 ? 1 : 0)">
          </div>
        </label>
        <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Binary Trading') }}</span>
      </div>
      <small class="text-warning">{{ __('Completely Enable/Disable Binary System') }}</small>
    </div>

    {{-- <div class="border rounded dark:border-gray-600 shadow p-2">
                            <div class="flex items-center mb-2">
                                <label class="inline-flex relative items-center cursor-pointer mr-3">
                                    <input type="checkbox" value="{{ $platform->trading->trading_cards }}"
    class="sr-only peer" data-on="Cover" data-off="Minimal" name="trading_cards"
    id="trading_cards" @if ($platform->trading->trading_cards == 1) checked @endif>
    <div class="toggle peer" onclick="$('#trading_cards').val($('#trading_cards').val() != 1 ? 1 : 0)">
    </div>
    </label>
    <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Trading Dynamic Cards') }}</span>
  </div>
  <small class="text-success">{{ __('Enabled = (Resizable, Draggable, Arrangable) cards') }}</small>
  ,
  <small class="text-danger">{{ __('Disabled = static cards') }}</small>
  </div> --}}

  {{-- <div class="border rounded dark:border-gray-600 shadow p-2">
                            <div class="flex items-center mb-2">
                                <label class="inline-flex relative items-center cursor-pointer mr-3">
                                    <input type="checkbox" value="{{ $platform->trading->pair_prices }}"
  class="sr-only peer" data-on="Cover" data-off="Minimal" name="pair_prices"
  id="pair_prices" @if ($platform->trading->pair_prices == 1) checked @endif>
  <div class="toggle peer" onclick="$('#pair_prices').val($('#pair_prices').val() != 1 ? 1 : 0)">
  </div>
  </label>
  <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Trading Page Pair Prices') }}</span>
  </div>
  <small class="text-danger">{{ __('Disabled = No pairs live price updates, faster loading') }}</small>
  </div> --}}

  <div class="border rounded dark:border-gray-600 shadow p-2">
    <div class="flex items-center mb-2">
      <label class="inline-flex relative items-center cursor-pointer mr-3">
        <input type="checkbox" value="{{ $platform->trading->practice }}" class="sr-only peer" data-on="Cover"
          data-off="Minimal" name="practice" id="practice" @if ($platform->trading->practice == 1) checked @endif>
        <div class="toggle peer" onclick="$('#practice').val($('#practice').val() != 1 ? 1 : 0)">
        </div>
      </label>
      <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Practice Trading Only') }}</span>
    </div>
    <small
      class="text-success">{{ __('Enabled = No deposits or withdrawals, Admin manually add balance to clients, Trading become practice only') }}</small>
  </div>
  </div>
  <div class="space-y-3 px-3" id="wallet" aria-labelledby="wallet-tab" role="tabpanel">
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <label class="form-control-label mr-1">{{ __('Deposit Fees') }}</label>
        <select id="deposit_fees_method" name="deposit_fees_method"
          class="max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="added" {{ $platform->wallet->deposit_fees_method == 'added' ? 'selected' : '' }}>
            {{ __('Added') }}</option>
          <option value="subtracted" {{ $platform->wallet->deposit_fees_method == 'subtracted' ? 'selected' : '' }}>
            {{ __('Subtracted') }}</option>
        </select>
      </div>
      <small
        class="text-warning">{{ __('added: deposit fees added to total deposit amount, subtracted: deposit fees subtracted from total deposit amount') }}</small>
    </div>
  </div>
  @if ($ext[3] == 1)
  <div class="grid xs:grid-cols-1 md:grid-cols-4 gap-5" id="mlm" aria-labelledby="mlm-tab" role="tabpanel">
    <ul class="nav nav-tabs nav-fill border-primary shadow col-span-1 ml-3" role="tablist"
      data-tabs-toggle="#myTabContent2">
      <li
        class="flex justify-start items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
        <a id="mlm_general-tab" data-tabs-target="#mlm_general" aria-controls="mlm_general" role="tab"
          aria-selected="true">{{ __('General Settings') }}</a>
      </li>
      <li
        class="flex justify-start items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
        <a id="mlm_membership-tab" data-tabs-target="#mlm_membership" aria-controls="mlm_membership" role="tab"
          aria-selected="false">{{ __('Membership') }}</a>
      </li>
      <li
        class="flex justify-start items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
        <a id="mlm_community_line-tab" data-tabs-target="#mlm_community_line" aria-controls="mlm_community_line"
          role="tab" aria-selected="false">{{ __('Community Line') }}</a>
      </li>
      <li
        class="flex justify-start items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
        <a id="mlm_earning_methods-tab" data-tabs-target="#mlm_earning_methods" aria-controls="mlm_earning_methods"
          role="tab" aria-selected="false">{{ __('Earning Methods') }}</a>
      </li>
      @if ($platform->mlm->type == 'unilevel')
      <li
        class="flex justify-start items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
        <a id="mlm_rewards-tab" data-tabs-target="#mlm_rewards" aria-controls="mlm_rewards" role="tab"
          aria-selected="false">{{ __('Unilevel Reward Percentage') }}</a>
      </li>
      @endif
    </ul>
    <div class="tab-content col-span-3" id="myTabContent2">
      <div class="space-y-3 px-3 mb-1 active" id="mlm_general" aria-labelledby="mlm_general-tab" role="tabpanel">
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <label class="form-control-label mr-1">{{ __('MLM System Type') }}</label>
            <select id="mlm_type" name="mlm_type"
              class="max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="binary" {{ $platform->mlm->type == 'binary' ? 'selected' : '' }}>
                {{ __('Binary') }}</option>
              <option value="unilevel" {{ $platform->mlm->type == 'unilevel' ? 'selected' : '' }}>
                {{ __('Unilevel') }}</option>
            </select>
          </div>
          <small
            class="text-warning">{{ __('Binary system allow users to rank and earn higher commission, Unilevel allow clients up to 5 levels to earn commission defined by percentage') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <label class="form-control-label mr-1">{{ __('MLM Commission Type') }}</label>
            <select id="mlm_commission_type" name="mlm_commission_type"
              class="max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="direct" {{ $platform->mlm->commission_type == 'direct' ? 'selected' : '' }}>
                {{ __('Direct') }}</option>
              <option value="daily" {{ $platform->mlm->commission_type == 'daily' ? 'selected' : '' }}>
                {{ __('Daily') }}</option>
            </select>
          </div>
          <small
            class="text-warning">{{ __('Daily will make investments and plans earn commission on daily bases for referrers') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div>
              <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
                for="mlm_min_withdraw">{{ __('Minimum Bv to unlock withdrawal') }}</label>
            </div>
            <div class="input-group">
              <input type="text" name="mlm_min_withdraw" value="{{ $platform->mlm->min_withdraw ?? 100 }}">
              <span>BV</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Minimum business value earned to unlock withdrawal button') }}</small>
        </div>
      </div>
      <div class="space-y-3 px-3 mb-1" id="mlm_membership" aria-labelledby="mlm_membership-tab" role="tabpanel">
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->membership_status }}" class="sr-only peer"
                data-on="Cover" data-off="Minimal" name="membership_status" id="membership_status" @if
                ($platform->mlm->membership_status == 1) checked @endif>
              <div class="toggle peer"
                onclick="$('#membership_status').val($('#membership_status').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Membership') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Enable membership system where only those who deposit can earn from commission methods') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->membership_can_earn }}" class="sr-only peer"
                data-on="Cover" data-off="Minimal" name="membership_can_earn" id="membership_can_earn" @if
                ($platform->mlm->membership_can_earn == 1) checked @endif>
              <div class="toggle peer"
                onclick="$('#membership_can_earn').val($('#membership_can_earn').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Only Members Can Earn') }}</span>
          </div>
          <small class="text-warning">{{ __('Only clients with active membership can earn BV or reward his uplines') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
              for="membership_fees">{{ __('Membership deposit/withadraw fees') }}
            </label>
            <input class="form-control max-w-sm" type="text" name="membership_fees"
              value="{{ $platform->mlm->membership_fees ?? '1' }}">
          </div>
          <small
            class="text-warning">{{ __('Fees for the site from all deposits or withdrawals of clients with active membership') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
              for="membership_duration">{{ __('Membership Duration') }}
            </label>
            <input class="form-control max-w-sm" type="text" name="membership_duration"
              value="{{ $platform->mlm->membership_duration ?? '25' }}">
          </div>
          <small class="text-warning">{{ __('Duration of no BV earning until membership is cancelled') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
              for="membership_grace_duration">{{ __('Membership Grace Duration') }}
            </label>
            <input class="form-control max-w-sm" type="text" name="membership_grace_duration"
              value="{{ $platform->mlm->membership_grace_duration ?? '5' }}">
          </div>
          <small
            class="text-warning">{{ __('Grace duration to notify client to earn bv before final cancellation of membership') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->membership_custom_deposit }}" class="sr-only peer"
                data-on="Cover" data-off="Minimal" name="membership_custom_deposit" id="membership_custom_deposit" @if
                ($platform->mlm->membership_custom_deposit == 1) checked @endif>
              <div class="toggle peer"
                onclick="$('#membership_custom_deposit').val($('#membership_custom_deposit').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span
              class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Membership Custom Deposit Token') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Show deposit card with custom token and wallet address to send to in order to join membership plan') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
              for="membership_deposit_currency">{{ __('Membership Custom Deposit Currency') }}
            </label>
            <input class="form-control max-w-sm" type="text" name="membership_deposit_currency"
              value="{{ $platform->mlm->membership_deposit_currency ?? 'USDT' }}">
          </div>
          <small class="text-warning">{{ __('Deposit token to show in the deposit card') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
              for="membership_deposit_currency_network">{{ __('Membership Custom Deposit Currency Network') }}
            </label>
            <input class="form-control max-w-sm" type="text" name="membership_deposit_currency_network"
              value="{{ $platform->mlm->membership_deposit_currency_network ?? 'ETH' }}">
          </div>
          <small class="text-warning">{{ __('Deposit token to show in the deposit card') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
              for="membership_deposit_wallet">{{ __('Membership Custom Deposit Wallet') }}
            </label>
            <input class="form-control max-w-sm" type="text" name="membership_deposit_wallet"
              value="{{ $platform->mlm->membership_deposit_wallet ?? '' }}">
          </div>
          <small
            class="text-warning">{{ __('Wallet address to show to client when he want to subscribe to membership plan') }}
          </small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->membership_custom_withdraw }}" class="sr-only peer"
                data-on="Cover" data-off="Minimal" name="membership_custom_withdraw" id="membership_custom_withdraw" @if
                ($platform->mlm->membership_custom_withdraw == 1) checked @endif>
              <div class="toggle peer"
                onclick="$('#membership_custom_withdraw').val($('#membership_custom_withdraw').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span
              class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Membership Custom Withdraw') }}</span>
          </div>
          <small class="text-warning">{{ __('Show withdraw card ability to set client own wallet to withdraw to') }}
          </small>
        </div>

        <div class="shadow rounded p-1">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
              for="membership_withdraw_currency">{{ __('Membership Custom Withdraw Currency') }}
            </label>
            <input class="form-control max-w-sm" type="text" name="membership_withdraw_currency"
              value="{{ $platform->mlm->membership_withdraw_currency ?? 'USDT' }}">
          </div>
          <small class="text-warning">{{ __('Withdraw currency to collect earnings') }}
          </small>
        </div>

        <div class="shadow rounded p-1">
          <label class="form-label" for="membership_terms">{{ __('Membership Upgrade Terms') }}</label>
          <textarea id="membership_terms" name="membership_terms">{!! $platform->mlm->membership_terms ?? '' !!}
                                        </textarea>
        </div>
      </div>
      <div class="space-y-3 px-3 mb-1" id="mlm_community_line" aria-labelledby="mlm_community_line-tab" role="tabpanel">
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->community_line_status }}" class="sr-only peer"
                data-on="Cover" data-off="Minimal" name="community_line_status" id="community_line_status" @if
                ($platform->mlm->community_line_status == 1) checked @endif>
              <div class="toggle peer"
                onclick="$('#community_line_status').val($('#community_line_status').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Community Line') }}</span>
          </div>
          <small class="text-warning">{{ __('When client deposit, latest clients in the community will get 1% as BV') }}
          </small>
        </div>
        <div class="shadow rounded p-1">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
              for="community_line_clients">{{ __('Community Line Clients') }}
            </label>
            <div class="input-group">
              <input type="text" name="community_line_clients"
                value="{{ $platform->mlm->community_line_clients ?? '' }}">
              <span>{{ __('Client') }}</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Number of clients that will recieve the 1% BV in the community line') }}
          </small>
        </div>
      </div>
      <div class="space-y-3 px-3 mb-1" id="mlm_earning_methods" aria-labelledby="mlm_earning_methods" role="tabpanel">
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->deposits }}" class="sr-only peer" data-on="Cover"
                data-off="Minimal" name="mlm_deposits" id="mlm_deposits" @if ($platform->mlm->deposits == 1) checked
              @endif>
              <div class="toggle peer" onclick="$('#mlm_deposits').val($('#mlm_deposits').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from Deposits') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his downlines deposits') }}</small>
        </div>
        @if ($platform->mlm->type == 'binary')
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->first_deposit }}" class="sr-only peer" data-on="Cover"
                data-off="Minimal" name="mlm_first_deposit" id="mlm_first_deposit" @if ($platform->mlm->first_deposit ==
              1) checked @endif>
              <div class="toggle peer"
                onclick="$('#mlm_first_deposit').val($('#mlm_first_deposit').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from First Deposits') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his downlines first deposit') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->active_first_deposit }}" class="sr-only peer"
                data-on="Cover" data-off="Minimal" name="mlm_active_first_deposit" id="mlm_active_first_deposit" @if
                ($platform->mlm->active_first_deposit == 1) checked @endif>
              <div class="toggle peer"
                onclick="$('#mlm_active_first_deposit').val($('#mlm_active_first_deposit').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span
              class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from Active First Deposits') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his active downlines first deposits') }}</small>
        </div>
        @endif

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->trades }}" class="sr-only peer" data-on="Cover"
                data-off="Minimal" name="mlm_trades" id="mlm_trades" @if ($platform->mlm->trades == 1) checked @endif>
              <div class="toggle peer" onclick="$('#mlm_trades').val($('#mlm_trades').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from Trades') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his downlines trades') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->bot_investment }}" class="sr-only peer" data-on="Cover"
                data-off="Minimal" name="mlm_bot_investment" id="mlm_bot_investment" @if ($platform->mlm->bot_investment
              == 1) checked @endif>
              <div class="toggle peer"
                onclick="$('#mlm_bot_investment').val($('#mlm_bot_investment').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span
              class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from Bot Investments') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his downlines bot investments') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->ico_purchase }}" class="sr-only peer" data-on="Cover"
                data-off="Minimal" name="mlm_ico_purchase" id="mlm_ico_purchase" @if ($platform->mlm->ico_purchase == 1)
              checked @endif>
              <div class="toggle peer" onclick="$('#mlm_ico_purchase').val($('#mlm_ico_purchase').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span
              class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from Token Ico Purchases') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his downlines token ico purchases') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->forex_deposit }}" class="sr-only peer" data-on="Cover"
                data-off="Minimal" name="mlm_forex_deposit" id="mlm_forex_deposit" @if ($platform->mlm->forex_deposit ==
              1) checked @endif>
              <div class="toggle peer"
                onclick="$('#mlm_forex_deposit').val($('#mlm_forex_deposit').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from Forex Deposits') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his downlines forex deposits') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->forex_investment }}" class="sr-only peer" data-on="Cover"
                data-off="Minimal" name="mlm_forex_investment" id="mlm_forex_investment" @if
                ($platform->mlm->forex_investment == 1) checked @endif>
              <div class="toggle peer"
                onclick="$('#mlm_forex_investment').val($('#mlm_forex_investment').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span
              class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from Forex Investments') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his downlines forex investments') }}</small>
        </div>
        @if ($ext[6] == 1)
        <div class="shadow rounded p-1">
          <div class="flex items-center mb-2">
            <label class="inline-flex relative items-center cursor-pointer mr-3">
              <input type="checkbox" value="{{ $platform->mlm->staking }}" class="sr-only peer" data-on="Cover"
                data-off="Minimal" name="mlm_staking" id="mlm_staking" @if ($platform->mlm->staking == 1) checked
              @endif>
              <div class="toggle peer" onclick="$('#mlm_staking').val($('#mlm_staking').val() != 1 ? 1 : 0)">
              </div>
            </label>
            <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('BV from Staking') }}</span>
          </div>
          <small
            class="text-warning">{{ __('Referrar earn BV percentage set by admin for each of his downlines staking') }}</small>
        </div>
        @endif
      </div>
      @if ($platform->mlm->type == 'unilevel')
      <div class="space-y-3 px-3 mb-1" id="mlm_rewards" aria-labelledby="mlm_rewards-tab" role="tabpanel">
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div>
              <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
                for="unilevel_upline1_percentage">{{ __('1st Upline') }}
              </label>
              <span class="badge bg-success">{{ __('Active') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline1_percentage"
                value="{{ $platform->mlm->unilevel_upline1_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Direct Referrer Commission Percentage') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline2_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline2_status" id="unilevel_upline2_status" @if
                  ($platform->mlm->unilevel_upline2_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline2_status').val($('#unilevel_upline2_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('2nd Upline') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline2_percentage"
                value="{{ $platform->mlm->unilevel_upline2_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Second Upline Commission Percentage') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline3_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline3_status" id="unilevel_upline3_status" @if
                  ($platform->mlm->unilevel_upline3_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline3_status').val($('#unilevel_upline3_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('3nd Upline') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline3_percentage"
                value="{{ $platform->mlm->unilevel_upline3_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Third Upline Commission Percentage') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline4_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline4_status" id="unilevel_upline4_status" @if
                  ($platform->mlm->unilevel_upline4_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline4_status').val($('#unilevel_upline4_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('4nd Upline') }}</span>
            </div>
            <div>
              <div class="input-group">
                <input type="text" name="unilevel_upline4_percentage"
                  value="{{ $platform->mlm->unilevel_upline4_percentage ?? '' }}">
                <span>%</span>
              </div>
            </div>
          </div>
          <small class="text-warning">{{ __('Fourth Upline Commission Percentage') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline5_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline5_status" id="unilevel_upline5_status" @if
                  ($platform->mlm->unilevel_upline5_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline5_status').val($('#unilevel_upline5_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('5nd Upline') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline5_percentage"
                value="{{ $platform->mlm->unilevel_upline5_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Fifth Upline Commission Percentage') }}</small>
        </div>

        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline6_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline6_status" id="unilevel_upline6_status" @if
                  ($platform->mlm->unilevel_upline6_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline6_status').val($('#unilevel_upline6_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('6nd Upline') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline6_percentage"
                value="{{ $platform->mlm->unilevel_upline6_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Sixth Upline Commission Percentage') }}</small>
        </div>
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline7_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline7_status" id="unilevel_upline7_status" @if
                  ($platform->mlm->unilevel_upline7_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline7_status').val($('#unilevel_upline7_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('7nd Upline') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline7_percentage"
                value="{{ $platform->mlm->unilevel_upline7_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Seventh Upline Commission Percentage') }}</small>
        </div>
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline8_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline8_status" id="unilevel_upline8_status" @if
                  ($platform->mlm->unilevel_upline8_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline8_status').val($('#unilevel_upline8_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('8nd Upline') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline8_percentage"
                value="{{ $platform->mlm->unilevel_upline8_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Eighth Upline Commission Percentage') }}</small>
        </div>
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline9_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline9_status" id="unilevel_upline9_status" @if
                  ($platform->mlm->unilevel_upline9_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline9_status').val($('#unilevel_upline9_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('9nd Upline') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline9_percentage"
                value="{{ $platform->mlm->unilevel_upline9_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Ninth Upline Commission Percentage') }}</small>
        </div>
        <div class="border rounded dark:border-gray-600 shadow p-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center mb-2">
              <label class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="{{ $platform->mlm->unilevel_upline10_status }}" class="sr-only peer"
                  data-on="Cover" data-off="Minimal" name="unilevel_upline10_status" id="unilevel_upline10_status" @if
                  ($platform->mlm->unilevel_upline10_status == 1) checked @endif>
                <div class="toggle peer"
                  onclick="$('#unilevel_upline10_status').val($('#unilevel_upline10_status').val() != 1 ? 1 : 0)">
                </div>
              </label>
              <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('10nd Upline') }}</span>
            </div>
            <div class="input-group">
              <input type="text" name="unilevel_upline10_percentage"
                value="{{ $platform->mlm->unilevel_upline10_percentage ?? '' }}">
              <span>%</span>
            </div>
          </div>
          <small class="text-warning">{{ __('Tenth Upline Commission Percentage') }}</small>
        </div>

      </div>
      @endif
    </div>
  </div>
  @endif
  @if ($ext[6] == 1)
  <div class="space-y-3 px-3" id="staking" aria-labelledby="staking-tab" role="tabpanel">
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center mb-2">
        <label class="inline-flex relative items-center cursor-pointer mr-3">
          <input type="checkbox" value="{{ $platform->staking->cancel_stake }}" class="sr-only peer" data-on="Cover"
            data-off="Minimal" name="cancel_stake" id="cancel_stake" @if ($platform->staking->cancel_stake == 1) checked
          @endif>
          <div class="toggle peer" onclick="$('#cancel_stake').val($('#cancel_stake').val() != 1 ? 1 : 0)">
          </div>
        </label>
        <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Cancel Claim Option') }}</span>
      </div>
      <small
        class="text-danger">{{ __('Enabled: allow client to cancel his staking and claim his original amount without profit before the end of staking duration') }}</small>
    </div>
  </div>
  @endif
  @if ($ext[10] == 1)
  <div class="space-y-3 px-3" id="eco" aria-labelledby="eco-tab" role="tabpanel">
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center mb-2">
        <label class="inline-flex relative items-center cursor-pointer mr-3">
          <input type="checkbox" value="{{ $platform->eco->ecosystem_trading_only }}" class="sr-only peer"
            data-on="Cover" data-off="Minimal" name="ecosystem_trading_only" id="ecosystem_trading_only" @if
            ($platform->eco->ecosystem_trading_only == 1) checked @endif>
          <div class="toggle peer"
            onclick="$('#ecosystem_trading_only').val($('#ecosystem_trading_only').val() != 1 ? 1 : 0)">
          </div>
        </label>
        <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Show only ecosystem pairs') }}</span>
      </div>
      <small
        class="text-danger">{{ __('Enabled: only show eco system pairs while hiding all providers trading pairs and make tabs from the ecosystem pairing') }}</small>
    </div>
  </div>
  @endif
  {{-- <div class="space-y-3 px-3" id="mobile" aria-labelledby="mobile-tab" role="tabpanel">
                        <div class="border rounded dark:border-gray-600 shadow p-2">
                            <div class="flex items-center mb-2">
                                <label class="inline-flex relative items-center cursor-pointer mr-3">
                                    <input type="checkbox" value="{{ $platform->mobile->market_info }}"
  class="sr-only peer" data-on="Cover" data-off="Minimal"
  name="mobile_market_info" id="mobile_market_info"
  @if ($platform->mobile->market_info == 1) checked @endif>
  <div class="toggle peer" onclick="$('#mobile_market_info').val($('#mobile_market_info').val() != 1 ? 1 : 0)">
  </div>
  </label>
  <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Market Info Card In Phones') }}</span>
  </div>
  </div>

  <div class="border rounded dark:border-gray-600 shadow p-2">
    <div class="flex items-center mb-2">
      <label class="inline-flex relative items-center cursor-pointer mr-3">
        <input type="checkbox" value="{{ $platform->mobile->trades }}" class="sr-only peer" data-on="Cover"
          data-off="Minimal" name="mobile_trades" id="mobile_trades" @if ($platform->mobile->trades == 1) checked
        @endif>
        <div class="toggle peer" onclick="$('#mobile_trades').val($('#mobile_trades').val() != 1 ? 1 : 0)">
        </div>
      </label>
      <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Trades Card In Phones') }}</span>
    </div>
  </div>

  <div class="border rounded dark:border-gray-600 shadow p-2">
    <div class="flex items-center mb-2">
      <label class="inline-flex relative items-center cursor-pointer mr-3">
        <input type="checkbox" value="{{ $platform->mobile->charting }}" class="sr-only peer" data-on="Cover"
          data-off="Minimal" name="mobile_charting" id="mobile_charting" @if ($platform->mobile->charting == 1) checked
        @endif>
        <div class="toggle peer" onclick="$('#mobile_charting').val($('#mobile_charting').val() != 1 ? 1 : 0)">
        </div>
      </label>
      <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Charting Card In Phones') }}</span>
    </div>
  </div>

  <div class="border rounded dark:border-gray-600 shadow p-2">
    <div class="flex items-center mb-2">
      <label class="inline-flex relative items-center cursor-pointer mr-3">
        <input type="checkbox" value="{{ $platform->mobile->orders }}" class="sr-only peer" data-on="Cover"
          data-off="Minimal" name="mobile_orders" id="mobile_orders" @if ($platform->mobile->orders == 1) checked
        @endif>
        <div class="toggle peer" onclick="$('#mobile_orders').val($('#mobile_orders').val() != 1 ? 1 : 0)">
        </div>
      </label>
      <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Orders Card In Phones') }}</span>
    </div>
  </div>

  </div> --}}
  </div>
  </div>
  <div class="card-footer text-end">
    <button type="submit" class="btn btn-primary">{{ __('Update') }}</button>
  </div>
  </div>
</form>
@endsection


@section('page-scripts')
<script src="https://cdn.tiny.cloud/1/{{ $general->tinymce }}/tinymce/6/tinymce.min.js" referrerpolicy="origin">
</script>
<script>
$(function() {
  "use strict";
  tinymce.init({
    selector: 'textarea#membership_terms',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat | code',
  });
})
</script>
@endsection