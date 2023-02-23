@extends('layouts.admin')

@section('content')
<div class="card">
  <div class="card-header flex justify-between items-center">
    <h4 class="card-title">{{ 'Editing ' . $rank->title . ' rank' }}</h4>

  </div>
  <form action="{{ route('admin.mlm.update') }}" method="POST" enctype="multipart/form-data" id="rankUpdate">
    @csrf
    <input type="hidden" name="id" id="id" value="{{ $rank->id }}">
    <div class="card-body">
      <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label for="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Title') }}</label>
          <input type="text" id="title" name="title" aria-label="Coin Title" aria-describedby="title"
            value="{{ $rank->title }}" required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="rank"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Rank') }}</label>
          <input type="text" id="rank" name="rank" aria-label="Rank" aria-describedby="rank" value="{{ $rank->rank }}"
            required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Withdraw Margin') }}</label>
          </div>
          <div class="input-group">
            <input type="number" id="margin" name="margin" aria-label="Rank Withdraw Margin" aria-describedby="margin"
              value="{{ $rank->margin }}" required>
            <span id="margin" for="margin">
              %
            </span>
          </div>
        </div>
        @if (getPlatform('mlm')->deposits == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Referral Deposit Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="deposit_commission" name="deposit_commission" aria-label="Deposit Commission"
              aria-describedby="deposit_commission" value="{{ $rank->deposit_commission }}" required>
            <span id="deposit_commission" for="deposit_commission">
              %
            </span>
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->first_deposit == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Referral First Deposit Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="ref_commission" name="ref_commission" aria-label="ref Commission"
              aria-describedby="ref_commission" value="{{ $rank->ref_commission }}">
            <span id="ref_commission" for="ref_commission" required>
              %
            </span>
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->active_first_deposit == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Active Referral First Deposit Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="active_ref_commission" name="active_ref_commission"
              aria-label="active_ref Commission" aria-describedby="active_ref_commission"
              value="{{ $rank->active_ref_commission }}" required>
            <span id="active_ref_commission" for="active_ref_commission">
              %
            </span>
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->trades == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Referral Trade Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="trade_commission" name="trade_commission" aria-label="trade Commission"
              aria-describedby="trade_commission" value="{{ $rank->trade_commission }}" required>
            <span id="trade_commission" for="trade_commission">
              %
            </span>
          </div>
        </div>
        @endif
        @if (getExt(1) == 1 && getPlatform('mlm')->bot_investment == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Referral Bot Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="bot_commission" name="bot_commission" aria-label="bot Commission"
              aria-describedby="bot_commission" value="{{ $rank->bot_commission }}" required>
            <span id="bot_commission" for="bot_commission">
              %
            </span>
          </div>
        </div>
        @endif
        @if (getExt(2) == 1 && getPlatform('mlm')->ico_purchase == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Referral Token ICO Purchase Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="ico_commission" name="ico_commission" aria-label="ico Commission"
              aria-describedby="ico_commission" required value="{{ $rank->ico_commission }}">
            <span id="ico_commission" for="ico_commission">
              %
            </span>
          </div>
        </div>
        @endif
        @if (getExt(4) == 1)
        @if (getPlatform('mlm')->forex_deposit == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Forex Deposit Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="forex_commission" name="forex_commission" aria-label="ico Commission"
              aria-describedby="forex_commission" required value="{{ $rank->forex_commission }}">
            <span id="forex_commission" for="forex_commission">
              %
            </span>
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->forex_investment == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Forex Investment Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="forex_investment_commission" name="forex_investment_commission"
              aria-label="ico Commission" required aria-describedby="forex_investment_commission"
              value="{{ $rank->forex_investment_commission }}">
            <span id="forex_investment_commission" for="forex_investment_commission">
              %
            </span>
          </div>
        </div>
        @endif
        @endif
        @if (getExt(6) == 1 && getPlatform('mlm')->staking == 1)
        <div>
          <div class="flex justify-between">
            <label for="profit_missed"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Staking Commission') }}</label>
          </div>
          <div class="input-group">
            <input type="text" id="staking" name="staking" aria-label="Staking Commission" required
              aria-describedby="staking" value="{{ $rank->staking }}">
            <span id="staking" for="staking">
              %
            </span>
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->type == 'unilevel')
        <div>
          <label for="deposits_required"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('VIP Rank Deposit Required') }}</label>
          <input type="text" id="deposits_required" name="deposits_required" aria-label="Deposits Required"
            aria-describedby="deposits_required" required value="{{ $rank->deposits_required }}"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="bv_required"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('VIP Rank BV Required') }}</label>
          <input type="text" id="bv_required" name="bv_required" aria-label="ico Commission"
            aria-describedby="bv_required" value="{{ $rank->bv_required }}" required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="direct_required"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('VIP Rank Direct Referral Required') }}</label>
          <input type="text" id="direct_required" name="direct_required" required aria-label="ico Commission"
            aria-describedby="direct_required" value="{{ $rank->direct_required }}"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        @endif
      </div>
      <div class="mt-5">
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="{{ $rank->status }}" @if ($rank->status == 1) checked @endif class="sr-only
          peer"
          data-on="{{ __('Active') }}" data-off="{{ __('Disabled') }}" name="status"
          id="statusEdit">
          <div onclick="$('#statusEdit').val($('#statusEdit').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
        </label>
      </div>
    </div>
    <div class="card-footer text-end">
      <button type="submit" class="btn btn-outline-success">
        {{ __('Edit') }}</button>
    </div>
  </form>
</div>
@endsection


@push('breadcrumb-plugins')
<a href="{{ route('admin.mlm.index') }}" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
  {{ __('Back') }}</a>
@endpush