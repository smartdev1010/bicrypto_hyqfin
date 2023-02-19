@extends('layouts.app')
@section('page-style')
    <link rel="stylesheet" href="{{ asset(mix('css/kyc/style.css')) }}">
    <style>
        footer.footer .scroll-top {
            padding: 1rem .83rem;
        }

        .scroll-top {
            bottom: 6.5%;
            display: none;
            position: fixed;
            right: 26px;
            z-index: 99;
        }

        .bi-arrow-up-square-fill {
            font-size: 1.7rem !important;
        }

    </style>
@endsection
@section('content')
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12">
            <div class="card card-profile">
                <img src="{{ asset('assets/images/ico/stage-3.jpg') }}" class="card-img-top" alt="Profile Cover Photo" />
                <div class="card-body">
                    <div class="profile-image-wrapper">
                        <div class="profile-image">
                            <div class="avatar">
                                <img class="round"
                                    src="{{ getImage(imagePath()['profileImage']['path'] . '/' . auth()->user()->profile_photo_path, imagePath()['profileImage']['size']) }}"
                                    alt="avatar">
                            </div>
                        </div>
                    </div>
                    <h3>{{ auth()->user()->firstname }}</h3>
                    <div>
                        <h6 class="badge badge-light-success profile-badge">{{ __('Verified Trader') }}</h6>
                    </div>
                    @if ($account != null)
                        @if ($account->status == 1)
                            <a href="{{ route('user.forex.trade') }}"><button type="button"
                                    class="btn btn-primary mt-1">{{ __('locale.Launch Forex App') }}</button></a>
                        @else
                            <button type="button" class="btn btn-secondary mt-1"
                                disabled>{{ __('locale.Forex App Locked') }}</button>
                            <div class="text-warning"><small>{{ __('locale.Deposit Firstly') }}</small></div>
                        @endif
                        @if ($wallets != null)
                            <div class="d-flex justify-content-center align-items-center my-1">
                                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                    data-bs-target="#deposit">{{ __('locale.Deposit') }}</button>
                                <button type="button" class="btn btn-danger ms-1" data-bs-toggle="modal"
                                    data-bs-target="#withdraw">{{ __('locale.Withdraw') }}</button>
                            </div>
                        @else
                            <form class="my-1" method="POST" action="{{ route('user.wallet.create') }}">
                                @csrf
                                <input type="hidden" id="symbol" name="symbol" value="USDT">
                                <input type="hidden" id="type" name="type" value="funding">
                                <button type="submit"
                                    class="btn btn-warning">{{ __('locale.Create Wallet') }}</button></span>
                            </form>
                        @endif
                    @else
                        <a href="{{ route('user.forex.create') }}">
                            <button type="submit" class="btn btn-success">{{ __('locale.Create Forex Account') }}</button>
                        </a>
                    @endif
                    @if ($account != null)
                        @if ($account->status == 1)
                            {{-- <div class="fw-bold">{{ __('locale.Account No') }}: <span
                            class="text-success">{{ $account->number }}</span></div> --}}
                            <div class="fw-bold rounded border-success p-1">{{ __('locale.Account Password') }}: <span
                                    class="text-success">{{ $account->password }}</span></div>
                            {{-- <div class="fw-bold">{{ __('locale.Broker') }}: <span
                            class="text-warning">{{ $account->broker }}</span></div> --}}
                        @endif
                    @endif
                </div>
            </div>
        </div>
        <div class="modal modal-slide-in fade" id="deposit">
            <div class="modal-dialog sidebar-sm">
                <form class="add-new-record modal-content pt-0" action="{{ route('user.forex.deposit') }}" method="POST"
                    enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" id="symbol" name="symbol">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                    <div class="modal-header mb-1">
                        <h5 class="modal-title" id="exampleModalLabel">{{ __('locale.Deposit To Forex') }}</h5>
                    </div>
                    <div class="modal-body flex-grow-1">
                        <div class="dropdown w-auto mb-1">
                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" id="wallet1" name="wallet1">
                                {{ __('locale.Select Wallet') }}
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                @if ($wallets != null)
                                    @foreach ($wallets as $wallet)
                                        <li>
                                            <a class="dropdown-item"
                                                onclick="$('#wallet1').text($(this).text());$('#deposit').find('input[name=symbol]').val($(this).data('symbol'));$('#deposit').find('span[name=amountSymbol]').text($(this).data('symbol'));"
                                                data-symbol="{{ $wallet->symbol }}">{{ $wallet->symbol }}
                                                {{ getAmount($wallet->balance) }}
                                            </a>
                                        </li>
                                    @endforeach
                                @endif
                            </ul>
                        </div>
                        <div class="input-group w-auto mb-1">
                            <input type="number" class="form-control" min="" max="" step=""
                                onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')" required="" id="amount"
                                name="amount" placeholder="Amount">
                            <span class="input-group-text text-light" name="amountSymbol" id="amountSymbol"></span>
                        </div>
                        <button type="submit" class="btn btn-primary data-submit me-1">{{ __('locale.Deposit') }}</button>
                        <button type="reset" class="btn btn-outline-secondary"
                            data-bs-dismiss="modal">{{ __('locale.Cancel') }}</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal modal-slide-in fade" id="withdraw">
            <div class="modal-dialog sidebar-sm">
                <form class="add-new-record modal-content pt-0" action="{{ route('user.forex.withdraw') }}" method="POST"
                    enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" id="symbol" name="symbol">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                    <div class="modal-header mb-1">
                        <h5 class="modal-title" id="exampleModalLabel">{{ __('locale.Withdraw From Forex') }}</h5>
                    </div>
                    <div class="modal-body flex-grow-1">
                        <div class="input-group w-auto mb-1">
                            <input type="number" class="form-control" min="" max="" step=""
                                onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')" required="" id="amount"
                                name="amount" placeholder="Amount">
                            <span class="input-group-text text-light">{{ getCurrency()->symbol }}</span>
                        </div>
                        <div class="dropdown w-auto mb-1">
                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" id="wallet2" name="wallet2">
                                {{ __('locale.Select Recieving Wallet') }}
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                @if ($wallets != null)
                                    @foreach ($wallets as $wallet)
                                        <li>
                                            <a class="dropdown-item"
                                                onclick="$('#wallet2').text($(this).text());$('#withdraw').find('input[name=symbol]').val($(this).data('symbol'));"
                                                data-symbol="{{ $wallet->symbol }}">{{ $wallet->symbol }}
                                                {{ getAmount($wallet->balance) }}
                                            </a>
                                        </li>
                                    @endforeach
                                @endif
                            </ul>
                        </div>
                        <button type="submit"
                            class="btn btn-primary data-submit me-1">{{ __('locale.Withdraw') }}</button>
                        <button type="reset" class="btn btn-outline-secondary"
                            data-bs-dismiss="modal">{{ __('locale.Cancel') }}</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12">
            <div class="row matched-height">
                @if ($account != null)
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div class="avatar bg-light-primary p-50 mb-1">
                                            <div class="avatar-content">
                                                <i class="bi bi-briefcase font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">{{ $account->balance * getCurrency()->rate }}
                                            {{ getCurrency()->symbol }}</h2>
                                        <p class="card-text">{{ __('locale.Forex Account Balance') }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div class="avatar bg-light-warning p-50 mb-1">
                                            <div class="avatar-content">
                                                <i class="bi bi-diagram-3 font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">{{ $forex_log->sum('profit') * getCurrency()->rate }}
                                            {{ getCurrency()->symbol }}</h2>
                                        <p class="card-text">{{ __('locale.Forex Account Profit') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div class="avatar bg-light-info p-50 mb-1">
                                            <div class="avatar-content">
                                                <i class="bi bi-node-plus font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{ $investment_logs->sum('amount') * getCurrency()->rate }}
                                            {{ getCurrency()->symbol }}</h2>
                                        <p class="card-text">{{ __('locale.Total Investment') }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div class="avatar bg-light-success p-50 mb-1">
                                            <div class="avatar-content">
                                                <i class="bi bi-node-plus-fill font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{ $investment_logs->where('status', 1)->sum('profit') * getCurrency()->rate }}
                                            {{ getCurrency()->symbol }}</h2>
                                        <p class="card-text">{{ __('locale.Investments Profit') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @else
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">{{ __('locale.Forex Account Details') }}</h4>
                            </div>
                            <div class="card-body text-center">
                            </div>
                        </div>
                    </div>
                @endif
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div class="card card-transaction">
                        <div class="card-header">
                            <h4 class="card-title">{{ __('locale.Forex Transactions') }}</h4>
                        </div>
                        <div class="card-body" style="max-height:280px;overflow-y:auto;">
                            @foreach ($forex_logs as $forex_log)
                                <div class="transaction-item">
                                    <div class="d-flex">
                                        <div class="avatar bg-light-primary rounded float-start">
                                            <div class="avatar-content">
                                                @if ($forex_log->type == 1)
                                                    <span class="text-success font-medium-5"><i
                                                            class="bi bi-journal-arrow-up"></i></span>
                                                @elseif ($forex_log->type == 2)
                                                    <span class="text-danger font-medium-5"><i
                                                            class="bi bi-journal-arrow-down"></i></span>
                                                @elseif ($forex_log->type == 3)
                                                    <span class="text-warning font-medium-5"><i
                                                            class="bi bi-briefcase"></i></span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="transaction-percentage">
                                            @if ($forex_log->type == 1)
                                                <span
                                                    class="text-success fw-bold">{{ __('locale.Forex Deposit') }}</span>
                                                </h6><br>
                                                <small> {{ $forex_log->created_at }} </small>
                                            @elseif ($forex_log->type == 2)
                                                <span
                                                    class="text-danger fw-bold">{{ __('locale.Forex Withdraw') }}</span>
                                                </h6><br>
                                                <small> {{ $forex_log->created_at }} </small>
                                            @elseif ($forex_log->type == 3)
                                                <span
                                                    class="text-warning fw-bold">{{ __('locale.Forex Investment') }}</span>
                                                </h6><br>
                                                <small> {{ $forex_log->created_at }} </small>
                                            @endif
                                        </div>

                                    </div>
                                    <div class="fw-bolder">
                                        @if ($forex_log->type == 1)
                                            @if ($forex_log->status == 0)
                                                <span class="badge bg-warning">{{ __('locale.Pending') }}</span>
                                            @else
                                                <span class="badge bg-success">-
                                                    {{ ttz($forex_log->amount * getCurrency()->rate) }}
                                                    {{ getCurrency()->symbol }}</span>
                                            @endif
                                        @elseif ($forex_log->type == 2)
                                            @if ($forex_log->status == 0)
                                                <span class="badge bg-warning">{{ __('locale.Pending') }}</span>
                                            @else
                                                <span class="badge bg-danger">+
                                                    {{ ttz($forex_log->amount * getCurrency()->rate) }}
                                                    {{ getCurrency()->symbol }}</span>
                                            @endif
                                        @elseif ($forex_log->type == 3)
                                            @if ($forex_log->status != 1)
                                                <span class="badge bg-warning">{{ __('locale.Pending') }}</span>
                                            @else
                                                <span class="badge bg-warning">+
                                                    {{ ttz($forex_log->profit * getCurrency()->rate) }}
                                                    {{ getCurrency()->symbol }}</span>
                                            @endif
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
            @if ($account != null)
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form id="forex_investment" action="{{ route('user.forex.store') }}" method="POST"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <input type="hidden" id="investment_id" name="investment_id">
                                    <input type="hidden" id="symbol" name="symbol">
                                    <div class="card-title">
                                        {{ __('locale.Forex Investments') }}
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            @if ($wallets != null)
                                                <div class="dropdown">
                                                    <button class="btn btn-outline-warning dropdown-toggle w-100 mb-1"
                                                        type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                                        id="wallett" name="wallett">
                                                        {{ __('locale.Select Wallet') }}
                                                    </button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        @foreach ($wallets as $wallet)
                                                            <li>
                                                                <a class="dropdown-item"
                                                                    onclick="$('#wallett').text($(this).text());$('#forex_investment').find('input[name=symbol]').val($(this).data('symbol'));"
                                                                    data-symbol="{{ $wallet->symbol }}">{{ $wallet->symbol }}
                                                                    {{ getAmount($wallet->balance) }}
                                                                </a>
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                </div>
                                            @else
                                                <form method="POST" action="{{ route('user.wallet.create') }}">
                                                    @csrf
                                                    <input type="hidden" id="id" name="id" value="USDT">
                                                    <button type="submit"
                                                        class="btn btn-warning w-100">{{ __('locale.Create Wallet') }}</button></span>
                                                </form>
                                            @endif
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            <div class="input-group w-100 mb-1">
                                                <input type="number" class="form-control" min="" max="" step=""
                                                    onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')"
                                                    required="" id="amount" name="amount" placeholder="Amount">
                                                <span
                                                    class="input-group-text text-light">{{ getCurrency()->symbol }}</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            <button type="button" class="btn btn-primary w-100 mb-1" data-bs-toggle="modal"
                                                data-bs-target="#InvestmentType"
                                                id="selectInvestment">{{ __('locale.Select Investment Plan') }}</button>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            <button
                                                class="w-100 mb-1 btn btn-success d-flex align-items-center justify-content-start"
                                                type="submit"><i
                                                    class="bi bi-caret-right me-1"></i><span>{{ __('locale.Start Investment') }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class="table-dark">
                                        <tr>
                                            <th scope="col">{{ __('locale.ID') }}</th>
                                            <th scope="col">{{ __('locale.Plan') }}</th>
                                            <th scope="col">{{ __('locale.Amount') }}</th>
                                            <th scope="col">{{ __('locale.Profit') }}</th>
                                            <th scope="col">{{ __('locale.Duration') }}</th>
                                            <th scope="col">{{ __('locale.Status') }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse($investment_logs as $investment_log)
                                            <tr>
                                                <td data-label="{{ __('locale.ID') }}">{{ __($loop->iteration) }}</td>
                                                <td data-label="{{ __('locale.Plan') }}" class="text-uppercase">
                                                    {{ getForexInvestment($investment_log->investment_id)->title }}</td>
                                                <td data-label="{{ __('locale.Amount') }}">
                                                    {{ __(getAmount($investment_log->amount * getCurrency()->rate)) }}
                                                    {{ getCurrency()->symbol }}</td>
                                                <td data-label="{{ __('locale.Profit') }}"
                                                    class="@if ($investment_log->result == 1) text-success
                                        @elseif($investment_log->result == 2) text-danger @elseif($investment_log->result == 3) @else @endif">
                                                    @if ($investment_log->result == 1)
                                                        +
                                                        {{ __(getAmount($investment_log->profit * getCurrency()->rate)) }}
                                                        {{ getCurrency()->symbol }}
                                                    @elseif($investment_log->result == 2)
                                                        -
                                                        {{ __(getAmount($investment_log->profit * getCurrency()->rate)) }}
                                                        {{ getCurrency()->symbol }}
                                                    @elseif($investment_log->result == 3)
                                                        {{ __(getAmount($investment_log->profit * getCurrency()->rate)) }}
                                                        {{ getCurrency()->symbol }}
                                                    @else
                                                        <span class="badge bg-warning">{{ __('locale.Pending') }}</span>
                                                    @endif
                                                </td>
                                                <td data-label="{{ __('locale.Duration') }}">
                                                    <div> {{ __('locale.Start') }}: <span
                                                            class="fw-bold">{{ showDateTime($investment_log->start_date, 'd M, Y h:i:s') }}</span>
                                                    </div>
                                                    <div> {{ __('locale.End') }}: <span
                                                            class="fw-bold">{{ showDateTime($investment_log->end_date, 'd M, Y h:i:s') }}</span>
                                                    </div>
                                                </td>
                                                <td data-label="{{ __('locale.Status') }}">
                                                    @if ($investment_log->status != 1)
                                                        <span class="badge bg-primary">{{ __('locale.Running') }}</span>
                                                    @elseif($investment_log->status == 1)
                                                        <span
                                                            class="badge bg-success">{{ __('locale.Complete') }}</span>
                                                    @endif
                                                </td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td class="text-muted text-center" colspan="100%">
                                                    {{ __($empty_message) }}</td>
                                            </tr>
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                            <div class="mb-1">{{ paginateLinks($investment_logs) }}</div>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
    <div class="modal fade" id="InvestmentType" tabindex="-1" aria-labelledby="InvestmentType" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-transparent">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body pb-3 px-sm-3">
                    @foreach ($forex_investment as $investment)
                        <a onclick="$('#forex_investment').find('input[name=investment_id]').val($(this).data('id'));$('#selectInvestment').text($(this).data('investment'));$('#InvestmentType').modal('hide');"
                            style="stretched-link" data-id="{{ $investment->id }}"
                            data-investment="{{ $investment->title }}">
                            <div
                                class="row bg-wallet p-1 rounded mb-1 @if ($investment->id == 1) bg-wallet-active @endif">
                                <div class="col-2">
                                    <img class="rounded-circle shadow-4" style="width: 64px;"
                                        src="{{ getImage('assets/images/forex/investment/' . $investment->image) }}">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex justify-content-between">
                                        <div class="fw-bold fs-4 text-white">{{ $investment->title }}
                                            @if ($investment->is_new == 1)
                                                <span
                                                    class="fs-6 badge bg-success text-white">{{ __('locale.New') }}</span>
                                            @endif
                                        </div>
                                        <div class="fs-6 text-white d-none d-md-block"><i class="bi bi-clock"></i>
                                            {{ $investment->duration }} Days</div>
                                    </div>
                                    <div class="row">
                                        <small class="fs-6 text-warning">{{ $investment->desc }}</small>
                                        <div>{{ __('locale.Return on Investment') }}: <span
                                                class="text-success">{{ ttz($investment->roi) }}%</span></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

    @if ($account != null)
        <div class="row">
            @if ($account->signal1_id != null || $account->signal2_id != null || $account->signal3_id != null || $account->signal4_id != null || $account->signal5_id != null)
                @if ($account->signal1_id != null)
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <span class="card-title">{{ __('locale.Signal') }} 1</span>
                                <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                                    <div class="data-doc-image">
                                        <img class="img-fluid img-thumbnail"
                                            src="{{ getImage('assets/images/signal/' . getSignal($account->signal1_id)->image) }}">
                                    </div>
                                    <ul class="data-doc-actions">
                                        <li><a href="{{ getImage('assets/images/signal/' . getSignal($account->signal1_id)->image) }}"
                                                target="_blank"><i class="bi bi-cloud-download text-white"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif

                @if ($account->signal2_id != null)
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <span class="card-title">{{ __('locale.Signal') }} 2</span>
                                <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                                    <div class="data-doc-image">
                                        <img class="img-fluid img-thumbnail"
                                            src="{{ getImage('assets/images/signal/' . getSignal($account->signal2_id)->image) }}">
                                    </div>
                                    <ul class="data-doc-actions">
                                        <li><a href="{{ getImage('assets/images/signal/' . getSignal($account->signal2_id)->image) }}"
                                                target="_blank"><i class="bi bi-cloud-download text-white"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif

                @if ($account->signal3_id != null)
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <span class="card-title">{{ __('locale.Signal') }} 3</span>
                                <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                                    <div class="data-doc-image">
                                        <img class="img-fluid img-thumbnail"
                                            src="{{ getImage('assets/images/signal/' . getSignal($account->signal3_id)->image) }}">
                                    </div>
                                    <ul class="data-doc-actions">
                                        <li><a href="{{ getImage('assets/images/signal/' . getSignal($account->signal3_id)->image) }}"
                                                target="_blank"><i class="bi bi-cloud-download text-white"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif

                @if ($account->signal4_id != null)
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <span class="card-title">{{ __('locale.Signal') }} 4</span>
                                <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                                    <div class="data-doc-image">
                                        <img class="img-fluid img-thumbnail"
                                            src="{{ getImage('assets/images/signal/' . getSignal($account->signal4_id)->image) }}">
                                    </div>
                                    <ul class="data-doc-actions">
                                        <li><a href="{{ getImage('assets/images/signal/' . getSignal($account->signal4_id)->image) }}"
                                                target="_blank"><i class="bi bi-cloud-download text-white"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif

                @if ($account->signal5_id != null)
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <span class="card-title">{{ __('locale.Signal') }} 5</span>
                                <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                                    <div class="data-doc-image">
                                        <img class="img-fluid img-thumbnail"
                                            src="{{ getImage('assets/images/signal/' . getSignal($account->signal5_id)->image) }}">
                                    </div>
                                    <ul class="data-doc-actions">
                                        <li><a href="{{ getImage('assets/images/signal/' . getSignal($account->signal5_id)->image) }}"
                                                target="_blank"><i class="bi bi-cloud-download text-white"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            @endif
        </div>
    @endif
    <div class="row">
        <div class="col">
            <div class="card" style="height:80vh;">
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
                        {
                            "width": "100%",
                            "height": "100%",
                            "defaultColumn": "overview",
                            "defaultScreen": "general",
                            "market": "forex",
                            "showToolbar": true,
                            "colorTheme": "dark",
                            "locale": "en",
                            "isTransparent": true
                        }
                    </script>
                </div>
            </div>
        </div>
    </div>
@endsection
