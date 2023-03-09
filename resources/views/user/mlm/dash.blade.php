@extends('layouts.app')
@section('page-style')
<style>
    path {
        fill: rgb(44, 163, 40);
        box-shadow: 5px 2px 10px;
    }
    ul{
        margin: 0;
        padding: 0;
    }
</style>
@endsection
@section('content')
<div class="row">
    <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12">
        <div class="card card-profile">
            <img src="{{asset('assets/images/ico/stage-3.jpg')}}" class="card-img-top"
                alt="Profile Cover Photo" />
            <div class="card-body">
                <div class="profile-image-wrapper">
                    <div class="profile-image">
                        <div class="avatar">
                            <img class="round"
                                src="{{ Auth::user() ? Auth::user()->profile_photo_url : asset('images/portrait/small/avatar-s-11.jpg') }}"
                                alt="avatar">
                        </div>
                    </div>
                </div>
                <h3>{{auth()->user()->firstname}}</h3>
                <h6 class="badge badge-light-success profile-badge">{{ __('Verified Trader') }}</h6>
                <span class="badge badge-light-primary profile-badge">@if ($planA->rank == 0) {{ __('locale.No Business Rank') }} @else {{ __('locale.Business Rank') }} {{ $planA->rank }} @endif</span>
                <div class="mt-1">
                    <div class="d-flex justify-content-between">
                        <small>0 BV</small>
                        <small>{{ $planA->bv }} BV</small>
                    </div>
                    <div id="myRangeColor" class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar" aria-valuenow="{{ $bvWithdrawable }}" aria-valuemin="0" aria-valuemax="{{ $planA->bv }}"
                            style="width: {{ $bvWithdrawable }}%"></div>
                    </div>
                    <small class="text-warning">{{ __('locale.Progress To Unlock Withdrawal') }}</small><br>
                    @if ($bvWithdrawable >= $planA->bv)
                        <a href="{{ route('user.mlm.withdraw') }}" ><button type="button" class="btn btn-success mt-1">{{ __('locale.Withdraw To USDT Wallet') }}</button></a>
                        <button type="button" class="ms-1 mt-1 btn btn-primary" data-bs-toggle="modal" data-bs-target="#referEarnModal">{{ __('locale.Invite') }}</button>
                    @else
                        <button type="button" class="btn btn-secondary mt-1" disabled>{{ __('locale.Withdraw Locked') }}</button>
                        <button type="button" class="ms-1 mt-1 btn btn-success" data-bs-toggle="modal" data-bs-target="#referEarnModal">{{ __('locale.Invite') }}</button>
                    @endif
                </div>
            </div>
        </div>
        @include('user/partials/refer-earn')
        <div class="card">
            <div class="card-header">
                <div class="col-md-10">
                    <h4 class="card-title">{{ __('locale.All Referrals') }}</h4>
                </div>
            </div>
            <div class="card-body">
                @foreach ($ref_by as $ref)
                    <span class="badge bg-warning">{{ $ref->firstname }} {{ $ref->lastname }}</span>
                @endforeach
            </div>
        </div>
    </div>
    <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12">
        <div class="row">
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
                                <h2 class="fw-bolder">{{ ttz($bvTotal) }} BV</h2>
                                <p class="card-text">{{ __('locale.Total Business Value')}}</p>
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
                                <h2 class="fw-bolder">{{ $planA->trade_commission }} BV</h2>
                                <p class="card-text">{{ __('locale.Network Commission')}}</p>
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
                                <h2 class="fw-bolder">{{ $planA->ref_commission }} BV</h2>
                                <p class="card-text">{{ __('locale.Referral Commission')}}</p>
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
                                <h2 class="fw-bolder">{{ $planA->active_ref_commission }} BV</h2>
                                <p class="card-text">{{ __('locale.Active Referral Comission')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="card card-transaction">
                    <div class="card-header">
                        <h4 class="card-title">{{ __('locale.Business Commissions') }}</h4>
                    </div>
                    <div class="card-body" style="max-height:280px;overflow-y:auto;">
                        @foreach($bvLogs as $bvLog)
                            <div class="transaction-item">
                                <div class="d-flex">
                                    <div class="avatar bg-light-primary rounded float-start">
                                        <div class="avatar-content">
                                            @if ($bvLog->type == 1)
                                                <span class="text-success font-medium-5"><i class="bi bi-cash"></i></span>
                                            @elseif ($bvLog->type == 2)
                                                <span class="text-success font-medium-5"><i class="bi bi-node-plus"></i></span>
                                            @elseif ($bvLog->type == 3)
                                                <span class="text-success font-medium-5"><i class="bi bi-award"></i></span>
                                            @elseif ($bvLog->type == 4)
                                                <span class="text-success font-medium-5"><i class="bi bi-currency-exchange"></i></span>
                                            @elseif ($bvLog->type == 5)
                                                <span class="text-success font-medium-5"><i class="bi bi-robot"></i></span>
                                            @elseif ($bvLog->type == 6)
                                                <span class="text-success font-medium-5"><i class="bi bi-coin"></i></span>
                                            @elseif ($bvLog->type == 7)
                                                <span class="text-success font-medium-5"><i class="bi bi-bar-chart"></i></span>
                                            @elseif ($bvLog->type == 8)
                                                <span class="text-success font-medium-5"><i class="bi bi-bar-chart"></i></span>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="transaction-percentage">
                                        @if ($bvLog->type == 1)
                                            <span class="text-success fw-bold">{{ __('locale.Referral Deposit Commission')}}</span>
                                            </h6><br>
                                            <small> {{ $bvLog->created_at }} </small>
                                        @elseif ($bvLog->type == 2)
                                            <span class="text-success fw-bold">{{ __('locale.Referral First Deposit Commission')}}</span>
                                            </h6><br>
                                            <small> {{ $bvLog->created_at }} </small>
                                        @elseif ($bvLog->type == 3)
                                            <span class="text-success fw-bold">{{ __('locale.Active Referral First Deposit Commission')}}</span>
                                            </h6><br>
                                            <small> {{ $bvLog->created_at }} </small>
                                        @elseif ($bvLog->type == 4)
                                            <span class="text-success fw-bold">{{ __('locale.Trade Commission')}}</span>
                                            </h6><br>
                                            <small> {{ $bvLog->created_at }} </small>
                                        @elseif ($bvLog->type == 5)
                                            <span class="text-success fw-bold">{{ __('locale.Bot Investment Commission')}}</span>
                                            </h6><br>
                                            <small> {{ $bvLog->created_at }} </small>
                                        @elseif ($bvLog->type == 6)
                                            <span class="text-success fw-bold">{{ __('locale.Token ICO Purchase Commission')}}</span>
                                            </h6><br>
                                            <small> {{ $bvLog->created_at }} </small>
                                        @elseif ($bvLog->type == 7)
                                            <span class="text-success fw-bold">{{ __('locale.Forex Deposit Commission')}}</span>
                                            </h6><br>
                                            <small> {{ $bvLog->created_at }} </small>
                                        @elseif ($bvLog->type == 8)
                                            <span class="text-success fw-bold">{{ __('locale.Forex Investment Commission')}}</span>
                                            </h6><br>
                                            <small> {{ $bvLog->created_at }} </small>
                                        @endif
                                    </div>

                                </div>
                                <div class="fw-bolder">
                                    <span class="badge bg-success">+ {{ ttz($bvLog->amount) }} BV</span>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card" style="min-width:1000px;overflow-x:auto;">
                    <div class="card-body">
                        <div class="card-title">
                            {{ __('locale.Business Network') }}
                        </div>
                        <div class="tree" style="min-width:1000px;overflow-x:auto;">
                            <ul>
                                <li>
                                    <a href="#" class="@if($mlm->rank == 0) text-dark @else text-success border-success @endif">{{ auth()->user()->username }}</a>
                                    <ul>
                                        @if ($mlm->left != null)
                                            <li>
                                                <a href="#" class="@if($mlm1A->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1A->username }}</a>
                                                <ul>
                                                    @if ($mlm1A->left != null)
                                                        <li>
                                                            <a href="#" class="@if($mlm1AA->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1AA->username }}</a>
                                                            <ul>
                                                                @if ($mlm1AA->left != null)
                                                                    <li><a href="#" class="@if($mlm1AAA->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1AAA->username }}</a></li>
                                                                @else
                                                                    <li><a href="#" class="text-dark">{{ __('locale.No User') }}</a></li>
                                                                @endif
                                                                @if ($mlm1AA->right != null)
                                                                    <li><a href="#" class="@if($mlm1AAB->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1AAB->username }}</a></li>
                                                                @else
                                                                    <li><a href="#" class="text-dark">{{ __('locale.No User') }}</a></li>
                                                                @endif
                                                            </ul>
                                                        </li>
                                                    @else
                                                        <li>
                                                            <a href="#" class="text-dark">{{ __('locale.No User') }}</a>
                                                        </li>
                                                    @endif
                                                    @if ($mlm1A->right != null)
                                                        <li>
                                                            <a href="#" class="@if($mlm1AB->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1AB->username }}</a>
                                                            <ul>
                                                                @if ($mlm1AB->left != null)
                                                                    <li><a href="#" class="@if($mlm1ABA->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1ABA->username }}</a></li>
                                                                @else
                                                                    <li><a href="#" class="text-dark">{{ __('locale.No User') }}</a></li>
                                                                @endif
                                                                @if ($mlm1AA->right != null)
                                                                    <li><a href="#" class="@if($mlm1ABB->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1ABB->username }}</a></li>
                                                                @else
                                                                    <li><a href="#" class="text-dark">{{ __('locale.No User') }}</a></li>
                                                                @endif
                                                            </ul>
                                                        </li>
                                                    @else
                                                        <li>
                                                            <a href="#" class="text-dark">{{ __('locale.No User') }}</a>
                                                        </li>
                                                    @endif
                                                </ul>
                                            </li>
                                        @else
                                            <li>
                                                <a href="#" class="text-dark">{{ __('locale.No User') }}</a>
                                            </li>
                                        @endif
                                        @if ($mlm->right != null)
                                            <li>
                                                <a href="#" class="@if($mlm1B->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1B->username }}</a>
                                                <ul>
                                                    @if ($mlm1B->left != null)
                                                        <li>
                                                            <a href="#" class="@if($mlm1BA->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1BA->username }}</a>
                                                            <ul>
                                                                @if ($mlm1BA->left != null)
                                                                    <li><a href="#" class="@if($mlm1BAA->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1BAA->username }}</a></li>
                                                                @else
                                                                    <li><a href="#" class="text-dark">{{ __('locale.No User') }}</a></li>
                                                                @endif
                                                                @if ($mlm1BA->right != null)
                                                                    <li><a href="#" class="@if($mlm1BAB->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1BAB->username }}</a></li>
                                                                @else
                                                                    <li><a href="#" class="text-dark">{{ __('locale.No User') }}</a></li>
                                                                @endif
                                                            </ul>
                                                        </li>
                                                    @else
                                                        <li>
                                                            <a href="#" class="text-dark">{{ __('locale.No User') }}</a>
                                                        </li>
                                                    @endif
                                                    @if ($mlm1B->right != null)
                                                        <li>
                                                            <a href="#" class="@if($mlm1BB->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1BB->username }}</a>
                                                            <ul>
                                                                @if ($mlm1BB->left != null)
                                                                    <li><a href="#" class="@if($mlm1BBA->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1BBA->username }}</a></li>
                                                                @else
                                                                    <li><a href="#" class="text-dark">{{ __('locale.No User') }}</a></li>
                                                                @endif
                                                                @if ($mlm1BA->right != null)
                                                                    <li><a href="#" class="@if($mlm1BBB->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm1BBB->username }}</a></li>
                                                                @else
                                                                    <li><a href="#" class="text-dark">{{ __('locale.No User') }}</a></li>
                                                                @endif
                                                            </ul>
                                                        </li>
                                                    @else
                                                        <li>
                                                            <a href="#" class="text-dark">{{ __('locale.No User') }}</a>
                                                        </li>
                                                    @endif
                                                </ul>
                                            </li>
                                        @else
                                            <li>
                                                <a href="#" class="text-dark">{{ __('locale.No User') }}</a>
                                            </li>
                                        @endif
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
