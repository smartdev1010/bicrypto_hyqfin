@extends('layouts.admin')

@section('content')
<div class="card">
  <div class="card-header flex justify-between items-center">
    <h4 class="card-title">{{ __('New Bot') }}</h4>

  </div>
  <form action="{{ route('admin.mlm.store') }}" method="POST" enctype="multipart/form-data" id="newBot">
    @csrf
    <div class="card-body">
      <input type="hidden" name="result_missed" id="result_missed">
      <div class="row">
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="title">{{ __('Title') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="title" name="title" aria-label="Rank Title"
              aria-describedby="title" value="{{ old('title') }}">
          </div>
        </div>
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="rank">{{ __('Rank') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="rank" name="rank" aria-label="Rank" aria-describedby="rank"
              value="{{ old('rank') }}">
          </div>
        </div>
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="margin">{{ __('Withdraw Margin') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="margin" name="margin" aria-label="Rank Withdraw Margin"
              aria-describedby="margin" value="{{ old('margin') }}">
            <span class="input-group-text" for="margin">%</span>
          </div>
        </div>
        @if (getPlatform('mlm')->deposits == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="deposit_commission">{{ __('Referral Deposit Commission') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="deposit_commission" name="deposit_commission"
              aria-label="Deposit Commission" aria-describedby="deposit_commission"
              value="{{ old('deposit_commission') }}">
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->first_deposit == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="ref_commission">{{ __('Referral First Deposit Commission') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="ref_commission" name="ref_commission"
              aria-label="ref Commission" aria-describedby="ref_commission" value="{{ old('ref_commission') }}">
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->active_first_deposit == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="active_ref_commission">{{ __('Active Referral First Deposit Commission') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="active_ref_commission" name="active_ref_commission"
              aria-label="active_ref Commission" aria-describedby="active_ref_commission"
              value="{{ old('active_ref_commission') }}">
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->trades == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="trade_commission">{{ __('Referral Trade Commission') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="trade_commission" name="trade_commission"
              aria-label="trade Commission" aria-describedby="trade_commission" value="{{ old('trade_commission') }}">
          </div>
        </div>
        @endif
        @if (getExt(1) == 1 && getPlatform('mlm')->bot_investment == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="bot_commission">{{ __('Referral Bot Commission') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="bot_commission" name="bot_commission"
              aria-label="bot Commission" aria-describedby="bot_commission" value="{{ old('bot_commission') }}">
          </div>
        </div>
        @endif
        @if (getExt(2) == 1 && getPlatform('mlm')->ico_purchase == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="ico_commission">{{ __('Referral Token ICO Purchase Commission') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="ico_commission" name="ico_commission"
              aria-label="ico Commission" aria-describedby="ico_commission" value="{{ old('ico_commission') }}">
          </div>
        </div>
        @endif
        @if (getExt(4) == 1)
        @if (getPlatform('mlm')->forex_deposit == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="forex_commission">{{ __('Forex Deposit Commission') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="forex_commission" name="forex_commission"
              aria-label="ico Commission" aria-describedby="forex_commission" value="{{ old('forex_commission') }}">
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->forex_investment == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="forex_investment_commission">{{ __('Forex Investment Commission') }}</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="forex_investment_commission" name="forex_investment_commission"
              aria-label="ico Commission" aria-describedby="forex_investment_commission"
              value="{{ old('forex_investment_commission') }}">
          </div>
        </div>
        @endif
        @endif
        @if (getExt(6) == 1 && getPlatform('mlm')->staking == 1)
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="staking">Staking Commission</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="staking" name="staking" aria-label="Staking Commission"
              aria-describedby="staking" value="{{ old('staking') }}">
          </div>
        </div>
        @endif
        @if (getPlatform('mlm')->type == 'unilevel')
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="deposits_required">VIP Rank Deposit Required</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="deposits_required" name="deposits_required"
              aria-label="Deposits Required" aria-describedby="deposits_required"
              value="{{ old('deposits_required') }}">
          </div>
        </div>
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="bv_required">VIP Rank BV Required</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="bv_required" name="bv_required" aria-label="ico Commission"
              aria-describedby="bv_required" value="{{ old('bv_required') }}">
          </div>
        </div>
        <div class="lg:col-span-3 md:col-span-4 xs:col-span-6">
          <label for="direct_required">VIP Rank Direct Referral Required</label>
          <div class="input-group mb-1">
            <input type="text" class="form-control" id="direct_required" name="direct_required"
              aria-label="ico Commission" aria-describedby="direct_required" value="{{ old('direct_required') }}">
          </div>
        </div>
        @endif
      </div>
      <div class="mt-5">
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="0" class="sr-only peer" data-on="{{ __('Active') }}"
            data-off="{{ __('Disabled') }}" name="status" id="statusNew">
          <div onclick="$('#statusNew').val($('#statusNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
        </label>
      </div>
    </div>
    <div class="card-footer text-end">
      <button class="btn btn-success" type="submit">{{ __('Submit') }}
      </button>
    </div>
  </form>
</div>
@endsection

@push('breadcrumb-plugins')
<a href="{{ route('admin.mlm.index') }}" class="btn btn-primary btn-sm"><i class="bi bi-chevron-left"></i>
  {{ __('Back') }}</a>
@endpush