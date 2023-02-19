@extends('layouts.app')
@section('page-style')
<style>
    path {
        fill: rgb(44, 163, 40);
        box-shadow: 5px 2px 10px;
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
                                src="{{ getImage(imagePath()['profileImage']['path'].'/'. auth()->user()->profile_photo_path,imagePath()['profileImage']['size']) }}"
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
                        <a href="{{ route('user.mlm.withdraw') }}" ><button type="button" class="btn btn-success mt-1">{{ __('locale.Withdraw') }}</button></a>
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
                <div class="row g-1">
                    @foreach ($ref_by as $ref)
                        <span class="col me-1 badge bg-warning">{{ $ref->firstname }} {{ $ref->lastname }}</span>
                    @endforeach
                </div>
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
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            {{ __('locale.Business Network') }}
                        </div>
                            <ul class="tree">
                                <li>
                                    <span class="@if($mlm->rank == 0) text-dark @else text-success border-success @endif">{{ auth()->user()->username }}</span>
                                    <ul>
                                        @if ($mlm['L'] != null)
                                            <li>
                                                <span class="@if($mlm['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']->username }}</span>
                                                <ul>
                                                    @if ($mlm['L']['L'] != null)
                                                        <li>
                                                            <span class="@if($mlm['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']->username }}</span>
                                                            <ul>
                                                                @if ($mlm['L']['L']['L'] != null)
                                                                    <li><span class="@if($mlm['L']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['L']->username }}</span>
                                                                    <ul>
                                                                        @if ($mlm['L']['L']['L']['L'] != null)
                                                                            <li><span class="@if($mlm['L']['L']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['L']['L']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['L']['L']['L']['L']['L'] != null)
                                                                                    <li><span class="@if($mlm['L']['L']['L']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['L']['L']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['L']['L']['L']['L']['R'] != null)
                                                                                    <li><span class="@if($mlm['L']['L']['L']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['L']['L']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                        @if ($mlm['L']['L']['L']['R'] != null)
                                                                            <li><span class="@if($mlm['L']['L']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['L']['R']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['L']['L']['L']['R']['L'] != null)
                                                                                    <li><span class="@if($mlm['L']['L']['L']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['L']['R']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['L']['L']['L']['R']['R'] != null)
                                                                                    <li><span class="@if($mlm['L']['L']['L']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['L']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                    </ul></li>
                                                                @else
                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                @endif
                                                                @if ($mlm['L']['L']['R'] != null)
                                                                    <li><span class="@if($mlm['L']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['R']->username }}</span>
                                                                    <ul>
                                                                        @if ($mlm['L']['L']['R']['L'] != null)
                                                                            <li><span class="@if($mlm['L']['L']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['R']['L']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['L']['L']['R']['L']['L'] != null)
                                                                                    <li><span class="@if($mlm['L']['L']['R']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['R']['L']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['L']['L']['R']['L']['R'] != null)
                                                                                    <li><span class="@if($mlm['L']['L']['R']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                        @if ($mlm['L']['L']['R']['R'] != null)
                                                                            <li><span class="@if($mlm['L']['L']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['R']['R']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['L']['L']['R']['R']['L'] != null)
                                                                                    <li><span class="@if($mlm['L']['L']['R']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['R']['R']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['L']['L']['R']['R']['R'] != null)
                                                                                    <li><span class="@if($mlm['L']['L']['R']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['L']['R']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                    </ul></li>
                                                                @else
                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                @endif
                                                            </ul>
                                                        </li>
                                                    @else
                                                        <li>
                                                            <span class="text-dark">{{ __('locale.No User') }}</span>
                                                        </li>
                                                    @endif
                                                    @if ($mlm['L']['R'] != null)
                                                        <li>
                                                            <span class="@if($mlm['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']->username }}</span>
                                                            <ul>
                                                                @if ($mlm['L']['R']['L'] != null)
                                                                    <li><span class="@if($mlm['L']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['L']->username }}</span>
                                                                    <ul>
                                                                        @if ($mlm['L']['R']['L']['L'] != null)
                                                                            <li><span class="@if($mlm['L']['R']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['L']['L']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['L']['R']['L']['L']['L'] != null)
                                                                                    <li><span class="@if($mlm['L']['R']['L']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['L']['L']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['L']['R']['L']['L']['R'] != null)
                                                                                    <li><span class="@if($mlm['L']['R']['L']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['L']['L']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                        @if ($mlm['L']['R']['L']['R'] != null)
                                                                            <li><span class="@if($mlm['L']['R']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['L']['R']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['L']['R']['L']['R']['L'] != null)
                                                                                    <li><span class="@if($mlm['L']['R']['L']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['L']['R']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['L']['R']['L']['R']['R'] != null)
                                                                                    <li><span class="@if($mlm['L']['R']['L']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['L']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                    </ul>
                                                                @else
                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                @endif
                                                                @if ($mlm['L']['R']['R'] != null)
                                                                    <li><span class="@if($mlm['L']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['R']->username }}</span>
                                                                    <ul>
                                                                        @if ($mlm['L']['R']['R']['L'] != null)
                                                                            <li><span class="@if($mlm['L']['R']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['R']['L']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['L']['R']['R']['L']['L'] != null)
                                                                                    <li><span class="@if($mlm['L']['R']['R']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['R']['L']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['L']['R']['R']['L']['R'] != null)
                                                                                    <li><span class="@if($mlm['L']['R']['R']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                        @if ($mlm['L']['R']['R']['R'] != null)
                                                                            <li><span class="@if($mlm['L']['R']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['R']['R']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['L']['R']['R']['R']['L'] != null)
                                                                                    <li><span class="@if($mlm['L']['R']['R']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['R']['R']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['L']['R']['R']['R']['R'] != null)
                                                                                    <li><span class="@if($mlm['L']['R']['R']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['L']['R']['R']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                    </ul></li>
                                                                @else
                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                @endif
                                                            </ul></li>
                                                        </li>
                                                    @else
                                                        <li>
                                                            <span class="text-dark">{{ __('locale.No User') }}</span>
                                                        </li>
                                                    @endif
                                                </ul>
                                            </li>
                                        @else
                                            <li>
                                                <span class="text-dark">{{ __('locale.No User') }}</span>
                                            </li>
                                        @endif
                                        @if ($mlm['R'] != null)
                                            <li>
                                                <span class="@if($mlm['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']->username }}</span>
                                                <ul>
                                                    @if ($mlm['R']['L'] != null)
                                                        <li>
                                                            <span class="@if($mlm['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']->username }}</span>
                                                            <ul>
                                                                @if ($mlm['R']['L']['L'] != null)
                                                                    <li><span class="@if($mlm['R']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['L']->username }}</span>
                                                                    <ul>
                                                                        @if ($mlm['R']['L']['L']['L'] != null)
                                                                            <li><span class="@if($mlm['R']['L']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['L']['L']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['R']['L']['L']['L']['L'] != null)
                                                                                    <li><span class="@if($mlm['R']['L']['L']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['L']['L']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['R']['L']['L']['L']['R'] != null)
                                                                                    <li><span class="@if($mlm['R']['L']['L']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['L']['L']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                        @if ($mlm['R']['L']['L']['R'] != null)
                                                                            <li><span class="@if($mlm['R']['L']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['L']['R']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['R']['L']['L']['R']['L'] != null)
                                                                                    <li><span class="@if($mlm['R']['L']['L']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['L']['R']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['R']['L']['L']['R']['R'] != null)
                                                                                    <li><span class="@if($mlm['R']['L']['L']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['L']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                    </ul></li>
                                                                @else
                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                @endif
                                                                @if ($mlm['R']['L']['R'] != null)
                                                                    <li><span class="@if($mlm['R']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['R']->username }}</span>
                                                                    <ul>
                                                                        @if ($mlm['R']['L']['R']['L'] != null)
                                                                            <li><span class="@if($mlm['R']['L']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['R']['L']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['R']['L']['R']['L']['L'] != null)
                                                                                    <li><span class="@if($mlm['R']['L']['R']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['R']['L']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['R']['L']['R']['L']['R'] != null)
                                                                                    <li><span class="@if($mlm['R']['L']['R']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                        @if ($mlm['R']['L']['R']['R'] != null)
                                                                            <li><span class="@if($mlm['R']['L']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['R']['R']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['R']['L']['R']['R']['L'] != null)
                                                                                    <li><span class="@if($mlm['R']['L']['R']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['R']['R']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['R']['L']['R']['R']['R'] != null)
                                                                                    <li><span class="@if($mlm['R']['L']['R']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['L']['R']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                    </ul></li>
                                                                @else
                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                @endif
                                                            </ul>
                                                        </li>
                                                    @else
                                                        <li>
                                                            <span class="text-dark">{{ __('locale.No User') }}</span>
                                                        </li>
                                                    @endif
                                                    @if ($mlm['R']['R'] != null)
                                                        <li>
                                                            <span class="@if($mlm['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']->username }}</span>
                                                            <ul>
                                                                @if ($mlm['R']['R']['L'] != null)
                                                                    <li><span class="@if($mlm['R']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['L']->username }}</span>
                                                                    <ul>
                                                                        @if ($mlm['R']['R']['L']['L'] != null)
                                                                            <li><span class="@if($mlm['R']['R']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['L']['L']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['R']['R']['L']['L']['L'] != null)
                                                                                    <li><span class="@if($mlm['R']['R']['L']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['L']['L']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['R']['R']['L']['L']['R'] != null)
                                                                                    <li><span class="@if($mlm['R']['R']['L']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['L']['L']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                        @if ($mlm['R']['R']['L']['R'] != null)
                                                                            <li><span class="@if($mlm['R']['R']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['L']['R']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['R']['R']['L']['R']['L'] != null)
                                                                                    <li><span class="@if($mlm['R']['R']['L']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['L']['R']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['R']['R']['L']['R']['R'] != null)
                                                                                    <li><span class="@if($mlm['R']['R']['L']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['L']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                    </ul></li>
                                                                @else
                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                @endif
                                                                @if ($mlm['R']['R']['R'] != null)
                                                                    <li><span class="@if($mlm['R']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['R']->username }}</span>
                                                                    <ul>
                                                                        @if ($mlm['R']['R']['R']['L'] != null)
                                                                            <li><span class="@if($mlm['R']['R']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['R']['L']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['R']['R']['R']['L']['L'] != null)
                                                                                    <li><span class="@if($mlm['R']['R']['R']['L']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['R']['L']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['R']['R']['R']['L']['R'] != null)
                                                                                    <li><span class="@if($mlm['R']['R']['R']['L']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                        @if ($mlm['R']['R']['R']['R'] != null)
                                                                            <li><span class="@if($mlm['R']['R']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['R']['R']->username }}</span>
                                                                            <ul>
                                                                                @if ($mlm['R']['R']['R']['R']['L'] != null)
                                                                                    <li><span class="@if($mlm['R']['R']['R']['R']['L']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['R']['R']['L']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                                @if ($mlm['R']['R']['R']['R']['R'] != null)
                                                                                    <li><span class="@if($mlm['R']['R']['R']['R']['R']->rank == 0) text-dark @else text-success border-success @endif">{{ $mlm['R']['R']['R']['R']['R']->username }}</span></li>
                                                                                @else
                                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                                @endif
                                                                            </ul></li>
                                                                        @else
                                                                            <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                        @endif
                                                                    </ul></li>
                                                                @else
                                                                    <li><span class="text-dark">{{ __('locale.No User') }}</span></li>
                                                                @endif
                                                            </ul>
                                                        </li>
                                                    @else
                                                        <li>
                                                            <span class="text-dark">{{ __('locale.No User') }}</span>
                                                        </li>
                                                    @endif
                                                </ul>
                                            </li>
                                        @else
                                            <li>
                                                <span class="text-dark">{{ __('locale.No User') }}</span>
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
@endsection
