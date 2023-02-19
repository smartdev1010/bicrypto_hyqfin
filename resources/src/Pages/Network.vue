<template>
    <div>
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div class="card card-profile">
                    <img
                        src="assets/images/ico/stage-3.jpg"
                        class="card-img-top"
                        alt="Profile Cover Photo"
                    />
                    <div class="card-body">
                        <div class="profile-image-wrapper">
                            <div class="profile-image">
                                <div class="avatar">
                                    <img
                                        class="round"
                                        v-if="user.profile_photo_path != null"
                                        :src="
                                            user.profile_photo_path
                                                ? 'assets/images/profile/' +
                                                  user.profile_photo_path
                                                : '/market/notification.png'
                                        "
                                        :key="user.profile_photo_path"
                                        alt="avatar"
                                    />
                                </div>
                            </div>
                        </div>
                        <h3>{{ user.firstname }}</h3>
                        <div>
                            <span
                                class="badge badge-light-success profile-badge"
                            >
                                {{ $t("Verified Trader") }}
                            </span>
                            <template v-if="plat.mlm.type == 'binary'">
                                <span
                                    v-if="planA.rank == 0"
                                    class="badge badge-light-primary profile-badge"
                                    >{{ $t("No Business Rank") }}</span
                                >
                                <span
                                    v-else
                                    class="badge badge-light-primary profile-badge"
                                    >{{ $t("Business Rank") }}
                                    {{ planA.rank }}</span
                                >
                            </template>
                            <template v-else-if="plat.mlm.type == 'unilevel'">
                                <span
                                    v-if="
                                        mlm.membership != 1 ||
                                        mlm.membership != 2
                                    "
                                    class="badge badge-light-primary profile-badge"
                                    >{{ $t("No VIP Privilege") }}</span
                                >
                                <span
                                    v-else
                                    class="badge badge-light-primary profile-badge"
                                    >{{ $t("VIP Rank") }}
                                    {{ mlm.membership_rank }}</span
                                >
                            </template>
                        </div>
                        <div
                            class="mt-1"
                            v-if="bvWithdrawable != null"
                            :key="bvWithdrawable"
                        >
                            <div class="d-flex justify-content-between">
                                <small>0 BV</small>
                                <small>{{ plat.mlm.min_withdraw }} BV</small>
                            </div>
                            <div
                                id="myRangeColor"
                                class="progress"
                                v-if="plat.mlm.min_withdraw != null"
                            >
                                <div
                                    class="progress-bar progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    :aria-valuenow="bvWithdrawable"
                                    aria-valuemin="0"
                                    :aria-valuemax="plat.mlm.min_withdraw"
                                    :style="'width:' + bvWithdrawable + '%'"
                                ></div>
                            </div>
                            <small class="text-warning">{{
                                $t("Progress To Unlock Withdrawal")
                            }}</small
                            ><br />
                            <div
                                v-if="bvWithdrawable >= plat.mlm.min_withdraw"
                                :key="bvWithdrawable"
                            >
                                <template
                                    v-if="plat.mlm.membership_status == 1"
                                >
                                    <button
                                        class="btn w-100 btn-success mt-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#withdraw"
                                    >
                                        {{ $t("Withdraw") }}
                                    </button>
                                </template>
                                <template v-else>
                                    <button
                                        type="button"
                                        class="btn btn-success mt-1"
                                        :disabled="loading"
                                        @click="Withdraw()"
                                    >
                                        {{ $t("Withdraw") }}
                                    </button>
                                </template>
                            </div>
                            <div v-else>
                                <button
                                    type="button"
                                    class="btn btn-secondary mt-1"
                                    disabled
                                >
                                    {{ $t("Withdraw Locked") }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Refer
                    :pathname="pathname"
                    :user="user"
                    :reward="
                        plat.mlm.unilevel_upline1_percentage
                            ? plat.mlm.unilevel_upline1_percentage
                            : 5
                    "
                />
                <div class="card" v-if="plat.mlm.type == 'binary'">
                    <div class="card-header">
                        <div class="col-md-10">
                            <h4 class="card-title">
                                {{ $t("All Referrals") }}
                            </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row g-1">
                            <span
                                v-for="(ref, index) in ref_by"
                                :key="index"
                                class="col me-1 badge bg-warning"
                                >{{ ref.firstname }} {{ ref.lastname }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-md-8 col-sm-6">
                <div class="row match-height">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="row g-2" :key="bvWithdrawable">
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div
                                            class="avatar bg-light-primary p-50 mb-1"
                                        >
                                            <div class="avatar-content">
                                                <i
                                                    class="bi bi-briefcase font-medium-5"
                                                ></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{ bvWithdrawable }} BV
                                        </h2>
                                        <p class="card-text">
                                            {{ $t("Your Business Value") }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="plat.mlm.commission_type == 'direct'"
                                class="col-xl-6 col-lg-6"
                            >
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div
                                            class="avatar bg-light-warning p-50 mb-1"
                                        >
                                            <div class="avatar-content">
                                                <i
                                                    class="bi bi-diagram-3 font-medium-5"
                                                ></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{ planA.trade_commission }} BV
                                        </h2>
                                        <p class="card-text">
                                            {{ $t("Trade Commission") }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-else-if="plat.mlm.commission_type == 'daily'"
                                class="col-xl-6 col-lg-6"
                            >
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div
                                            class="avatar bg-light-warning p-50 mb-1"
                                        >
                                            <div class="avatar-content">
                                                <i
                                                    class="bi bi-diagram-3 font-medium-5"
                                                ></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{ daily_bv }} BV
                                        </h2>
                                        <p class="card-text">
                                            {{ $t("Daily Business Value") }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="card card-transaction">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            {{ $t("Rank Commissions") }}
                                        </h4>
                                    </div>
                                    <div
                                        class="card-body"
                                        style="
                                            overflow-y: auto;
                                            max-height: 280px;
                                        "
                                    >
                                        <div
                                            class="transaction-item"
                                            v-if="
                                                planA.deposit_commission != null
                                            "
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-cash"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{
                                                        planA.deposit_commission
                                                    }}
                                                    %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="
                                                plat.mlm.type == 'binary' &&
                                                planA.ref_commission != null
                                            "
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-node-plus"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "First Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{
                                                        planA.ref_commission
                                                    }}
                                                    %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="
                                                plat.mlm.type == 'binary' &&
                                                planA.active_ref_commission !=
                                                    null
                                            "
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-award"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Active Referral First Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{
                                                        planA.active_ref_commission
                                                    }}
                                                    %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="
                                                planA.trade_commission != null
                                            "
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-currency-exchange"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Trade Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{
                                                        planA.trade_commission
                                                    }}
                                                    %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="planA.bot_commission != null"
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-robot"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Bot Investment Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{
                                                        planA.bot_commission
                                                    }}
                                                    %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="planA.ico_commission != null"
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-coin"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Token Offer Purchase Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{
                                                        planA.ico_commission
                                                    }}
                                                    %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="
                                                planA.forex_commission != null
                                            "
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-bar-chart"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Forex Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{
                                                        planA.forex_commission
                                                    }}
                                                    %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="
                                                planA.forex_investment_commission !=
                                                null
                                            "
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-bar-chart"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Forex Investment Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{
                                                        planA.forex_investment_commission
                                                    }}
                                                    %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="planA.staking != null"
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-layers"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Staking Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >{{ planA.staking }} %</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="transaction-item"
                                            v-if="
                                                plat.mlm
                                                    .community_line_status == 1
                                            "
                                        >
                                            <div class="d-flex">
                                                <div
                                                    class="avatar bg-light-primary rounded float-start"
                                                >
                                                    <div class="avatar-content">
                                                        <span
                                                            class="text-dark font-medium-5"
                                                            ><i
                                                                class="bi bi-layers"
                                                            ></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="transaction-percentage"
                                                >
                                                    <span
                                                        class="text-dark fw-bold"
                                                        >{{
                                                            $t(
                                                                "Community Line Commission"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="fw-bolder">
                                                <span class="badge bg-dark"
                                                    >1.00 %</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="card card-transaction">
                            <div class="card-header">
                                <h4 class="card-title">
                                    {{ $t("Latest Commissions") }}
                                </h4>
                            </div>
                            <div
                                class="card-body"
                                style="overflow-y: auto; max-height: 460px"
                            >
                                <template
                                    v-if="bvLogs != null && bvLogs.length > 0"
                                >
                                    <div
                                        v-for="(bvLog, index) in bvLogs"
                                        :key="index"
                                        class="transaction-item"
                                    >
                                        <div class="d-flex">
                                            <div
                                                class="avatar bg-light-primary rounded float-start"
                                            >
                                                <div class="avatar-content">
                                                    <span
                                                        v-if="bvLog.type == 1"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-cash"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-else-if="
                                                            bvLog.type == 2
                                                        "
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-node-plus"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 3"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-award"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 4"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-currency-exchange"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 5"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-robot"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 6"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-coin"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 7"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-bar-chart"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 8"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-bar-chart"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 9"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-layers"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 10"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-person-lines-fill"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 11"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-download"
                                                        ></i
                                                    ></span>
                                                    <span
                                                        v-if="bvLog.type == 12"
                                                        class="text-success font-medium-5"
                                                        ><i
                                                            class="bi bi-upload"
                                                        ></i
                                                    ></span>
                                                </div>
                                            </div>
                                            <div class="transaction-percentage">
                                                <template
                                                    v-if="bvLog.type == 1"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Referral Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 2"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Referral First Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 3"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Active Referral First Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 4"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Trade Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 5"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Bot Investment Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 6"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Token ICO Purchase Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 7"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Forex Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 8"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Forex Investment Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 9"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Staking Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 10"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Community Line Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 11"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Membership Withdraw Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                                <template
                                                    v-if="bvLog.type == 12"
                                                >
                                                    <span
                                                        class="text-success fw-bold"
                                                        >{{
                                                            $t(
                                                                "Membership Deposit Commission"
                                                            )
                                                        }}</span
                                                    >
                                                    <br />
                                                    <small>
                                                        {{
                                                            bvLog.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="fw-bolder">
                                            <span class="badge bg-success"
                                                >{{ bvLog.amount }} BV</span
                                            >
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div
                                        class="text-muted text-center py-5"
                                        colspan="100%"
                                    >
                                        <img
                                            height="128px"
                                            width="128px"
                                            src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                            alt=""
                                        />
                                        <p class="">
                                            {{ $t("No Data Found") }}
                                        </p>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    {{ $t("Business Network") }}
                                </div>
                                <template v-if="plat.mlm.type == 'binary'">
                                    <ul class="tree">
                                        <li>
                                            <span
                                                :class="
                                                    mlm.rank == 0
                                                        ? 'text-dark'
                                                        : 'text-success border-success'
                                                "
                                                >{{ user.username }}</span
                                            >
                                            <ul>
                                                <li v-if="mlm.L != null">
                                                    <span
                                                        :class="
                                                            mlm.L.rank == 0
                                                                ? 'text-dark'
                                                                : 'text-success border-success'
                                                        "
                                                        >{{
                                                            mlm.L.username
                                                        }}</span
                                                    >
                                                    <ul>
                                                        <li
                                                            v-if="
                                                                mlm.L.L != null
                                                            "
                                                        >
                                                            <span
                                                                :class="
                                                                    mlm.L.L
                                                                        .rank ==
                                                                    0
                                                                        ? 'text-dark'
                                                                        : 'text-success border-success'
                                                                "
                                                                >{{
                                                                    mlm.L.L
                                                                        .username
                                                                }}</span
                                                            >
                                                            <ul>
                                                                <li
                                                                    v-if="
                                                                        mlm.L.L
                                                                            .L !=
                                                                        null
                                                                    "
                                                                >
                                                                    <span
                                                                        :class="
                                                                            mlm
                                                                                .L
                                                                                .L
                                                                                .L
                                                                                .rank ==
                                                                            0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            mlm
                                                                                .L
                                                                                .L
                                                                                .L
                                                                                .username
                                                                        }}</span
                                                                    >
                                                                    <ul>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .L
                                                                                    .L
                                                                                    .L
                                                                                    .L !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .L
                                                                                        .L
                                                                                        .L
                                                                                        .L
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .L
                                                                                        .L
                                                                                        .L
                                                                                        .L
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .L
                                                                                            .L
                                                                                            .L
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .L
                                                                                            .L
                                                                                            .L
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .L
                                                                                    .L
                                                                                    .L
                                                                                    .R !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .L
                                                                                        .L
                                                                                        .L
                                                                                        .R
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .L
                                                                                        .L
                                                                                        .L
                                                                                        .R
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .L
                                                                                            .L
                                                                                            .R
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .L
                                                                                            .L
                                                                                            .R
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li v-else>
                                                                    <span
                                                                        class="text-dark"
                                                                        >{{
                                                                            $t(
                                                                                "No User"
                                                                            )
                                                                        }}</span
                                                                    >
                                                                </li>
                                                                <li
                                                                    v-if="
                                                                        mlm.L.L
                                                                            .R !=
                                                                        null
                                                                    "
                                                                >
                                                                    <span
                                                                        :class="
                                                                            mlm
                                                                                .L
                                                                                .L
                                                                                .R
                                                                                .rank ==
                                                                            0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            mlm
                                                                                .L
                                                                                .L
                                                                                .R
                                                                                .username
                                                                        }}</span
                                                                    >
                                                                    <ul>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .L
                                                                                    .L
                                                                                    .R
                                                                                    .L !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .L
                                                                                        .L
                                                                                        .R
                                                                                        .L
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .L
                                                                                        .L
                                                                                        .R
                                                                                        .L
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .L
                                                                                            .R
                                                                                            .L
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .L
                                                                                            .R
                                                                                            .L
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>

                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .L
                                                                                    .L
                                                                                    .R
                                                                                    .R !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .L
                                                                                        .L
                                                                                        .R
                                                                                        .R
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .L
                                                                                        .L
                                                                                        .R
                                                                                        .R
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .L
                                                                                            .R
                                                                                            .R
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .L
                                                                                            .R
                                                                                            .R
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li v-else>
                                                                    <span
                                                                        class="text-dark"
                                                                        >{{
                                                                            $t(
                                                                                "No User"
                                                                            )
                                                                        }}</span
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li v-else>
                                                            <span
                                                                class="text-dark"
                                                                >{{
                                                                    $t(
                                                                        "No User"
                                                                    )
                                                                }}</span
                                                            >
                                                        </li>

                                                        <li
                                                            v-if="
                                                                mlm.L.R != null
                                                            "
                                                        >
                                                            <span
                                                                :class="
                                                                    mlm.L.R
                                                                        .rank ==
                                                                    0
                                                                        ? 'text-dark'
                                                                        : 'text-success border-success'
                                                                "
                                                                >{{
                                                                    mlm.L.R
                                                                        .username
                                                                }}</span
                                                            >
                                                            <ul>
                                                                <li
                                                                    v-if="
                                                                        mlm.L.R
                                                                            .L !=
                                                                        null
                                                                    "
                                                                >
                                                                    <span
                                                                        :class="
                                                                            mlm
                                                                                .L
                                                                                .R
                                                                                .L
                                                                                .rank ==
                                                                            0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            mlm
                                                                                .L
                                                                                .R
                                                                                .L
                                                                                .username
                                                                        }}</span
                                                                    >
                                                                    <ul>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .L
                                                                                    .R
                                                                                    .L
                                                                                    .L !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .L
                                                                                        .R
                                                                                        .L
                                                                                        .L
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .L
                                                                                        .R
                                                                                        .L
                                                                                        .L
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .R
                                                                                            .L
                                                                                            .L
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .R
                                                                                            .L
                                                                                            .L
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>

                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .L
                                                                                    .R
                                                                                    .L
                                                                                    .R !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .L
                                                                                        .R
                                                                                        .L
                                                                                        .R
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .L
                                                                                        .R
                                                                                        .L
                                                                                        .R
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .R
                                                                                            .L
                                                                                            .R
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .R
                                                                                            .L
                                                                                            .R
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>

                                                                <li v-else>
                                                                    <span
                                                                        class="text-dark"
                                                                        >{{
                                                                            $t(
                                                                                "No User"
                                                                            )
                                                                        }}</span
                                                                    >
                                                                </li>

                                                                <li
                                                                    v-if="
                                                                        mlm.L.R
                                                                            .R !=
                                                                        null
                                                                    "
                                                                >
                                                                    <span
                                                                        :class="
                                                                            mlm
                                                                                .L
                                                                                .R
                                                                                .R
                                                                                .rank ==
                                                                            0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            mlm
                                                                                .L
                                                                                .R
                                                                                .R
                                                                                .username
                                                                        }}</span
                                                                    >
                                                                    <ul>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .L
                                                                                    .R
                                                                                    .R
                                                                                    .L !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .L
                                                                                        .R
                                                                                        .R
                                                                                        .L
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .L
                                                                                        .R
                                                                                        .R
                                                                                        .L
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .R
                                                                                            .R
                                                                                            .L
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .R
                                                                                            .R
                                                                                            .L
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>

                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .L
                                                                                    .R
                                                                                    .R
                                                                                    .R !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .L
                                                                                        .R
                                                                                        .R
                                                                                        .R
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .L
                                                                                        .R
                                                                                        .R
                                                                                        .R
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .R
                                                                                            .R
                                                                                            .R
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .L
                                                                                            .R
                                                                                            .R
                                                                                            .R
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li v-else>
                                                                    <span
                                                                        class="text-dark"
                                                                        >{{
                                                                            $t(
                                                                                "No User"
                                                                            )
                                                                        }}</span
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li v-else>
                                                    <span class="text-dark">{{
                                                        $t("No User")
                                                    }}</span>
                                                </li>
                                                <li v-if="mlm.R != null">
                                                    <span
                                                        :class="
                                                            mlm.R.rank == 0
                                                                ? 'text-dark'
                                                                : 'text-success border-success'
                                                        "
                                                        >{{
                                                            mlm.R.username
                                                        }}</span
                                                    >
                                                    <ul>
                                                        <li
                                                            v-if="
                                                                mlm.R.L != null
                                                            "
                                                        >
                                                            <span
                                                                :class="
                                                                    mlm.R.L
                                                                        .rank ==
                                                                    0
                                                                        ? 'text-dark'
                                                                        : 'text-success border-success'
                                                                "
                                                                >{{
                                                                    mlm.R.L
                                                                        .username
                                                                }}</span
                                                            >
                                                            <ul>
                                                                <li
                                                                    v-if="
                                                                        mlm.R.L
                                                                            .L !=
                                                                        null
                                                                    "
                                                                >
                                                                    <span
                                                                        :class="
                                                                            mlm
                                                                                .R
                                                                                .L
                                                                                .L
                                                                                .rank ==
                                                                            0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            mlm
                                                                                .R
                                                                                .L
                                                                                .L
                                                                                .username
                                                                        }}</span
                                                                    >
                                                                    <ul>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .R
                                                                                    .L
                                                                                    .L
                                                                                    .L !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .R
                                                                                        .L
                                                                                        .L
                                                                                        .L
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .R
                                                                                        .L
                                                                                        .L
                                                                                        .L
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .L
                                                                                            .L
                                                                                            .L
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .L
                                                                                            .L
                                                                                            .L
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>

                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .R
                                                                                    .L
                                                                                    .L
                                                                                    .R !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .R
                                                                                        .L
                                                                                        .L
                                                                                        .R
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .R
                                                                                        .L
                                                                                        .L
                                                                                        .R
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .L
                                                                                            .L
                                                                                            .R
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .L
                                                                                            .L
                                                                                            .R
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li v-else>
                                                                    <span
                                                                        class="text-dark"
                                                                        >{{
                                                                            $t(
                                                                                "No User"
                                                                            )
                                                                        }}</span
                                                                    >
                                                                </li>

                                                                <li
                                                                    v-if="
                                                                        mlm.R.L
                                                                            .R !=
                                                                        null
                                                                    "
                                                                >
                                                                    <span
                                                                        :class="
                                                                            mlm
                                                                                .R
                                                                                .L
                                                                                .R
                                                                                .rank ==
                                                                            0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            mlm
                                                                                .R
                                                                                .L
                                                                                .R
                                                                                .username
                                                                        }}</span
                                                                    >
                                                                    <ul>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .R
                                                                                    .L
                                                                                    .R
                                                                                    .L !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .R
                                                                                        .L
                                                                                        .R
                                                                                        .L
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .R
                                                                                        .L
                                                                                        .R
                                                                                        .L
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .L
                                                                                            .R
                                                                                            .L
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .L
                                                                                            .R
                                                                                            .L
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>

                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .R
                                                                                    .L
                                                                                    .R
                                                                                    .R !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .R
                                                                                        .L
                                                                                        .R
                                                                                        .R
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .R
                                                                                        .L
                                                                                        .R
                                                                                        .R
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .L
                                                                                            .R
                                                                                            .R
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .L
                                                                                            .R
                                                                                            .R
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li v-else>
                                                                    <span
                                                                        class="text-dark"
                                                                        >{{
                                                                            $t(
                                                                                "No User"
                                                                            )
                                                                        }}</span
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li v-else>
                                                            <span
                                                                class="text-dark"
                                                                >{{
                                                                    $t(
                                                                        "No User"
                                                                    )
                                                                }}</span
                                                            >
                                                        </li>

                                                        <li
                                                            v-if="
                                                                mlm.R.R != null
                                                            "
                                                        >
                                                            <span
                                                                :class="
                                                                    mlm.R.R
                                                                        .rank ==
                                                                    0
                                                                        ? 'text-dark'
                                                                        : 'text-success border-success'
                                                                "
                                                                >{{
                                                                    mlm.R.R
                                                                        .username
                                                                }}</span
                                                            >
                                                            <ul>
                                                                <li
                                                                    v-if="
                                                                        mlm.R.R
                                                                            .L !=
                                                                        null
                                                                    "
                                                                >
                                                                    <span
                                                                        :class="
                                                                            mlm
                                                                                .R
                                                                                .R
                                                                                .L
                                                                                .rank ==
                                                                            0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            mlm
                                                                                .R
                                                                                .R
                                                                                .L
                                                                                .username
                                                                        }}</span
                                                                    >
                                                                    <ul>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .R
                                                                                    .R
                                                                                    .L
                                                                                    .L !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .R
                                                                                        .R
                                                                                        .L
                                                                                        .L
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .R
                                                                                        .R
                                                                                        .L
                                                                                        .L
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .R
                                                                                            .L
                                                                                            .L
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .R
                                                                                            .L
                                                                                            .L
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>

                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .R
                                                                                    .R
                                                                                    .L
                                                                                    .R !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .R
                                                                                        .R
                                                                                        .L
                                                                                        .R
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .R
                                                                                        .R
                                                                                        .L
                                                                                        .R
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .R
                                                                                            .L
                                                                                            .R
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .R
                                                                                            .L
                                                                                            .R
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li v-else>
                                                                    <span
                                                                        class="text-dark"
                                                                        >{{
                                                                            $t(
                                                                                "No User"
                                                                            )
                                                                        }}</span
                                                                    >
                                                                </li>

                                                                <li
                                                                    v-if="
                                                                        mlm.R.R
                                                                            .R !=
                                                                        null
                                                                    "
                                                                >
                                                                    <span
                                                                        :class="
                                                                            mlm
                                                                                .R
                                                                                .R
                                                                                .R
                                                                                .rank ==
                                                                            0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            mlm
                                                                                .R
                                                                                .R
                                                                                .R
                                                                                .username
                                                                        }}</span
                                                                    >
                                                                    <ul>
                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .R
                                                                                    .R
                                                                                    .R
                                                                                    .L !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .R
                                                                                        .R
                                                                                        .R
                                                                                        .L
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .R
                                                                                        .R
                                                                                        .R
                                                                                        .L
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .R
                                                                                            .R
                                                                                            .L
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .R
                                                                                            .R
                                                                                            .L
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>

                                                                        <li
                                                                            v-if="
                                                                                mlm
                                                                                    .R
                                                                                    .R
                                                                                    .R
                                                                                    .R !=
                                                                                null
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    mlm
                                                                                        .R
                                                                                        .R
                                                                                        .R
                                                                                        .R
                                                                                        .rank ==
                                                                                    0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    mlm
                                                                                        .R
                                                                                        .R
                                                                                        .R
                                                                                        .R
                                                                                        .username
                                                                                }}</span
                                                                            >
                                                                            <ul>
                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .R
                                                                                            .R
                                                                                            .R
                                                                                            .L !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .L
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>

                                                                                <li
                                                                                    v-if="
                                                                                        mlm
                                                                                            .R
                                                                                            .R
                                                                                            .R
                                                                                            .R
                                                                                            .R !=
                                                                                        null
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .rank ==
                                                                                            0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            mlm
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .R
                                                                                                .username
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                                <li
                                                                                    v-else
                                                                                >
                                                                                    <span
                                                                                        class="text-dark"
                                                                                        >{{
                                                                                            $t(
                                                                                                "No User"
                                                                                            )
                                                                                        }}</span
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li
                                                                            v-else
                                                                        >
                                                                            <span
                                                                                class="text-dark"
                                                                                >{{
                                                                                    $t(
                                                                                        "No User"
                                                                                    )
                                                                                }}</span
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li v-else>
                                                                    <span
                                                                        class="text-dark"
                                                                        >{{
                                                                            $t(
                                                                                "No User"
                                                                            )
                                                                        }}</span
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li v-else>
                                                            <span
                                                                class="text-dark"
                                                                >{{
                                                                    $t(
                                                                        "No User"
                                                                    )
                                                                }}</span
                                                            >
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li v-else>
                                                    <span class="text-dark">{{
                                                        $t("No User")
                                                    }}</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </template>
                                <template
                                    v-else-if="plat.mlm.type == 'unilevel'"
                                >
                                    <ul class="tree">
                                        <li>
                                            <span
                                                :class="
                                                    plat.mlm
                                                        .membership_status == 1
                                                        ? mlm.membership != 0
                                                            ? mlm.membership ==
                                                              1
                                                                ? 'text-success border-success'
                                                                : 'text-warning border-warning'
                                                            : 'text-dark'
                                                        : mlm.rank == 0
                                                        ? 'text-dark'
                                                        : 'text-success border-success'
                                                "
                                                >{{ user.username }}</span
                                            >
                                            <ul
                                                v-if="
                                                    mlm.downlines != null &&
                                                    mlm.downlines != ''
                                                "
                                            >
                                                <li
                                                    v-for="(
                                                        D1, index
                                                    ) in mlm.downlines"
                                                    :key="index"
                                                >
                                                    <span
                                                        :class="
                                                            plat.mlm
                                                                .membership_status ==
                                                            1
                                                                ? D1.mlm
                                                                      .membership !=
                                                                  0
                                                                    ? D1.mlm
                                                                          .membership ==
                                                                      1
                                                                        ? 'text-success border-success'
                                                                        : 'text-warning border-warning'
                                                                    : 'text-dark'
                                                                : D1.mlm.rank ==
                                                                  0
                                                                ? 'text-dark'
                                                                : 'text-success border-success'
                                                        "
                                                        >{{ D1.username }}</span
                                                    >
                                                    <ul
                                                        v-if="
                                                            D1.downlines !=
                                                                null &&
                                                            D1.downlines != ''
                                                        "
                                                    >
                                                        <li
                                                            v-for="(
                                                                D2, index
                                                            ) in D1.downlines"
                                                            :key="index"
                                                        >
                                                            <span
                                                                :class="
                                                                    plat.mlm
                                                                        .membership_status ==
                                                                    1
                                                                        ? D2.mlm
                                                                              .membership !=
                                                                          0
                                                                            ? D2
                                                                                  .mlm
                                                                                  .membership ==
                                                                              1
                                                                                ? 'text-success border-success'
                                                                                : 'text-warning border-warning'
                                                                            : 'text-dark'
                                                                        : D2.mlm
                                                                              .rank ==
                                                                          0
                                                                        ? 'text-dark'
                                                                        : 'text-success border-success'
                                                                "
                                                                >{{
                                                                    D2.username
                                                                }}</span
                                                            >
                                                            <ul
                                                                v-if="
                                                                    D2.downlines !=
                                                                        null &&
                                                                    D2.downlines !=
                                                                        ''
                                                                "
                                                            >
                                                                <li
                                                                    v-for="(
                                                                        D3,
                                                                        index
                                                                    ) in D2.downlines"
                                                                    :key="index"
                                                                >
                                                                    <span
                                                                        :class="
                                                                            plat
                                                                                .mlm
                                                                                .membership_status ==
                                                                            1
                                                                                ? D3
                                                                                      .mlm
                                                                                      .membership !=
                                                                                  0
                                                                                    ? D3
                                                                                          .mlm
                                                                                          .membership ==
                                                                                      1
                                                                                        ? 'text-success border-success'
                                                                                        : 'text-warning border-warning'
                                                                                    : 'text-dark'
                                                                                : D3
                                                                                      .mlm
                                                                                      .rank ==
                                                                                  0
                                                                                ? 'text-dark'
                                                                                : 'text-success border-success'
                                                                        "
                                                                        >{{
                                                                            D3.username
                                                                        }}</span
                                                                    >
                                                                    <ul
                                                                        v-if="
                                                                            D3.downlines !=
                                                                                null &&
                                                                            D3.downlines !=
                                                                                ''
                                                                        "
                                                                    >
                                                                        <li
                                                                            v-for="(
                                                                                D4,
                                                                                index
                                                                            ) in D3.downlines"
                                                                            :key="
                                                                                index
                                                                            "
                                                                        >
                                                                            <span
                                                                                :class="
                                                                                    plat
                                                                                        .mlm
                                                                                        .membership_status ==
                                                                                    1
                                                                                        ? D4
                                                                                              .mlm
                                                                                              .membership !=
                                                                                          0
                                                                                            ? D4
                                                                                                  .mlm
                                                                                                  .membership ==
                                                                                              1
                                                                                                ? 'text-success border-success'
                                                                                                : 'text-warning border-warning'
                                                                                            : 'text-dark'
                                                                                        : D4
                                                                                              .mlm
                                                                                              .rank ==
                                                                                          0
                                                                                        ? 'text-dark'
                                                                                        : 'text-success border-success'
                                                                                "
                                                                                >{{
                                                                                    D4.username
                                                                                }}</span
                                                                            >
                                                                            <ul
                                                                                v-if="
                                                                                    D4.downlines !=
                                                                                        null &&
                                                                                    D4.downlines !=
                                                                                        ''
                                                                                "
                                                                            >
                                                                                <li
                                                                                    v-for="(
                                                                                        D5,
                                                                                        index
                                                                                    ) in D4.downlines"
                                                                                    :key="
                                                                                        index
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        :class="
                                                                                            plat
                                                                                                .mlm
                                                                                                .membership_status ==
                                                                                            1
                                                                                                ? D5
                                                                                                      .mlm
                                                                                                      .membership !=
                                                                                                  0
                                                                                                    ? D5
                                                                                                          .mlm
                                                                                                          .membership ==
                                                                                                      1
                                                                                                        ? 'text-success border-success'
                                                                                                        : 'text-warning border-warning'
                                                                                                    : 'text-dark'
                                                                                                : D5
                                                                                                      .mlm
                                                                                                      .rank ==
                                                                                                  0
                                                                                                ? 'text-dark'
                                                                                                : 'text-success border-success'
                                                                                        "
                                                                                        >{{
                                                                                            D5.username
                                                                                        }}</span
                                                                                    >

                                                                                    <ul
                                                                                        v-if="
                                                                                            D5.downlines !=
                                                                                                null &&
                                                                                            D5.downlines !=
                                                                                                ''
                                                                                        "
                                                                                    >
                                                                                        <li
                                                                                            v-for="(
                                                                                                D6,
                                                                                                index
                                                                                            ) in D5.downlines"
                                                                                            :key="
                                                                                                index
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                :class="
                                                                                                    plat
                                                                                                        .mlm
                                                                                                        .membership_status ==
                                                                                                    1
                                                                                                        ? D6
                                                                                                              .mlm
                                                                                                              .membership !=
                                                                                                          0
                                                                                                            ? D6
                                                                                                                  .mlm
                                                                                                                  .membership ==
                                                                                                              1
                                                                                                                ? 'text-success border-success'
                                                                                                                : 'text-warning border-warning'
                                                                                                            : 'text-dark'
                                                                                                        : D6
                                                                                                              .mlm
                                                                                                              .rank ==
                                                                                                          0
                                                                                                        ? 'text-dark'
                                                                                                        : 'text-success border-success'
                                                                                                "
                                                                                                >{{
                                                                                                    D6.username
                                                                                                }}</span
                                                                                            >

                                                                                            <ul
                                                                                                v-if="
                                                                                                    D6.downlines !=
                                                                                                        null &&
                                                                                                    D6.downlines !=
                                                                                                        ''
                                                                                                "
                                                                                            >
                                                                                                <li
                                                                                                    v-for="(
                                                                                                        D7,
                                                                                                        index
                                                                                                    ) in D6.downlines"
                                                                                                    :key="
                                                                                                        index
                                                                                                    "
                                                                                                >
                                                                                                    <span
                                                                                                        :class="
                                                                                                            plat
                                                                                                                .mlm
                                                                                                                .membership_status ==
                                                                                                            1
                                                                                                                ? D7
                                                                                                                      .mlm
                                                                                                                      .membership !=
                                                                                                                  0
                                                                                                                    ? D7
                                                                                                                          .mlm
                                                                                                                          .membership ==
                                                                                                                      1
                                                                                                                        ? 'text-success border-success'
                                                                                                                        : 'text-warning border-warning'
                                                                                                                    : 'text-dark'
                                                                                                                : D7
                                                                                                                      .mlm
                                                                                                                      .rank ==
                                                                                                                  0
                                                                                                                ? 'text-dark'
                                                                                                                : 'text-success border-success'
                                                                                                        "
                                                                                                        >{{
                                                                                                            D7.username
                                                                                                        }}</span
                                                                                                    >
                                                                                                </li>
                                                                                            </ul>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="plat.mlm.membership_status == 1">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div id="pricing-plan">
                            <!-- pricing plan cards -->
                            <div class="row pricing-card">
                                <!-- basic plan -->
                                <div class="col-12 col-lg-6">
                                    <div
                                        class="card basic-pricing border text-center shadow-none"
                                        v-if="
                                            mlm.membership == 1 ||
                                            mlm.membership == 2
                                        "
                                    >
                                        <div class="card-body">
                                            <img
                                                src="/images/illustration/Pot1.svg"
                                                class="mb-2 mt-5"
                                                alt="svg img"
                                            />
                                            <h3>
                                                VIP {{ mlm.membership_rank }}
                                            </h3>
                                            <div class="annual-plan my-2">
                                                <div
                                                    class="d-flex justify-content-center plan-price"
                                                >
                                                    <sup
                                                        class="d-block font-medium-1 fw-bold text-primary mt-2"
                                                        >{{
                                                            plat.mlm
                                                                .membership_deposit_currency
                                                        }}</sup
                                                    >
                                                    <span
                                                        class="pricing-basic-value fw-bolder text-primary font-large-3 lh-1"
                                                        >{{
                                                            mlm.membership_deposits
                                                        }}</span
                                                    >
                                                    <sub
                                                        class="pricing-duration text-body font-medium-1 fw-bold mt-3"
                                                        >{{
                                                            $t("Deposited")
                                                        }}</sub
                                                    >
                                                </div>
                                            </div>
                                            <ul
                                                class="list-group list-group-circle text-start fw-bold"
                                            >
                                                <li class="list-group-item">
                                                    {{
                                                        $t("Direct Referrals")
                                                    }}:
                                                    {{ directs }}
                                                </li>
                                                <li class="list-group-item">
                                                    {{
                                                        $t(
                                                            "Current Business Value"
                                                        )
                                                    }}: {{ bv_total }} BV
                                                </li>
                                                <li class="list-group-item">
                                                    {{
                                                        $t(
                                                            "Withdrawal Percentage"
                                                        )
                                                    }}:
                                                    {{ planA.margin }}
                                                    %
                                                </li>
                                            </ul>
                                            <button
                                                class="btn w-100 btn-outline-success mt-2"
                                            >
                                                {{ $t("Your current Rank") }}
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        class="card basic-pricing border text-center shadow-none"
                                        v-else
                                    >
                                        <div class="card-body">
                                            <img
                                                src="/images/illustration/Pot1.svg"
                                                class="mb-2 mt-5"
                                                alt="svg img"
                                            />
                                            <h3>No VIP Privilege</h3>
                                            <div class="annual-plan my-2">
                                                <div
                                                    class="d-flex justify-content-center plan-price"
                                                >
                                                    <sup
                                                        class="d-block font-medium-1 fw-bold text-primary mt-2"
                                                        >{{
                                                            plat.mlm
                                                                .membership_deposit_currency
                                                        }}</sup
                                                    >
                                                    <span
                                                        class="pricing-basic-value fw-bolder text-primary display-3 lh-1"
                                                        >{{
                                                            mlm.membership_deposits
                                                                ? mlm.membership_deposits
                                                                : 0
                                                        }}</span
                                                    >
                                                    <sub
                                                        class="pricing-duration text-body font-medium-1 fw-bold mt-3"
                                                        >{{
                                                            $t("Deposited")
                                                        }}</sub
                                                    >
                                                </div>
                                            </div>
                                            <ul
                                                class="list-group list-group-circle text-start fw-bold"
                                            >
                                                <li class="list-group-item">
                                                    {{
                                                        $t("Direct Referrals")
                                                    }}:
                                                    {{ directs }}
                                                </li>
                                                <li class="list-group-item">
                                                    {{
                                                        $t(
                                                            "Current Business Value"
                                                        )
                                                    }}: {{ bv_total }} BV
                                                </li>
                                                <li class="list-group-item">
                                                    {{
                                                        $t(
                                                            "Withdrawal Percentage"
                                                        )
                                                    }}:
                                                    {{ planA.margin }}
                                                    %
                                                </li>
                                            </ul>
                                            <button
                                                class="btn w-100 btn-outline-success mt-2"
                                            >
                                                {{ $t("Your current Rank") }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!--/ basic plan -->

                                <!-- standard plan -->
                                <div class="col-12 col-lg-6">
                                    <div
                                        class="card standard-pricing border-primary text-center shadow-none"
                                    >
                                        <div class="card-body">
                                            <div class="pricing-badge text-end">
                                                <span
                                                    class="badge rounded-pill badge-light-primary"
                                                    >{{ $t("Next Rank") }}</span
                                                >
                                            </div>
                                            <img
                                                src="/images/illustration/Pot2.svg"
                                                class="mb-1"
                                                alt="svg img"
                                            />
                                            <h3>VIP {{ planB.rank }}</h3>
                                            <div class="annual-plan my-2">
                                                <div
                                                    class="d-flex justify-content-center plan-price"
                                                >
                                                    <sup
                                                        class="d-block font-medium-1 fw-bold text-primary mt-2"
                                                        >{{
                                                            plat.mlm
                                                                .membership_deposit_currency
                                                        }}</sup
                                                    >
                                                    <span
                                                        class="pricing-basic-value fw-bolder text-primary display-3 lh-1"
                                                        >{{
                                                            planB.deposits_required
                                                        }}</span
                                                    >
                                                    <sub
                                                        class="pricing-duration text-body font-medium-1 fw-bold mt-3"
                                                        >{{ $t("Required") }}
                                                        <i
                                                            v-if="
                                                                mlm.membership_deposits -
                                                                    planB.deposits_required >
                                                                0
                                                            "
                                                            class="bi bi-check-circle text-success"
                                                        ></i
                                                    ></sub>
                                                </div>
                                            </div>
                                            <ul
                                                class="list-group list-group-circle text-start fw-bold"
                                            >
                                                <li
                                                    class="list-group-item"
                                                    :class="
                                                        directs -
                                                            planB.direct_required >
                                                        0
                                                            ? 'text-success'
                                                            : ''
                                                    "
                                                >
                                                    {{
                                                        $t(
                                                            "Required Direct Referral"
                                                        )
                                                    }}:
                                                    {{ planB.direct_required }}
                                                    <i
                                                        v-if="
                                                            directs -
                                                                planB.direct_required >
                                                            0
                                                        "
                                                        class="bi bi-check-circle"
                                                    ></i>
                                                </li>
                                                <li
                                                    class="list-group-item"
                                                    v-if="bv_total != null"
                                                    :class="
                                                        bv_total -
                                                            planB.bv_required >
                                                        0
                                                            ? 'text-success'
                                                            : ''
                                                    "
                                                >
                                                    {{
                                                        $t(
                                                            "Required Business Value"
                                                        )
                                                    }}:
                                                    {{ planB.bv_required }} BV
                                                    <i
                                                        v-if="
                                                            bv_total != null &&
                                                            bv_total -
                                                                planB.bv_required >
                                                                0
                                                        "
                                                        class="bi bi-check-circle"
                                                    ></i>
                                                </li>
                                                <li class="list-group-item">
                                                    {{
                                                        $t(
                                                            "Withdrawal Percentage"
                                                        )
                                                    }}:
                                                    {{ planB.margin }}
                                                    %
                                                </li>
                                            </ul>
                                            <button
                                                class="btn w-100 btn-primary mt-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#deposit"
                                            >
                                                {{
                                                    mlm.membership == 0 ||
                                                    mlm.membership == null
                                                        ? $t(
                                                              "Become An Affiliate"
                                                          )
                                                        : $t("Upgrade")
                                                }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!--/ standard plan -->
                            </div>
                            <!--/ pricing plan cards -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            tabindex="-1"
            id="deposit"
            aria-labelledby="VIP Rank"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t("Become an Affiliate Member") }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div
                            v-if="plat.mlm.membership_terms != null"
                            v-html="plat.mlm.membership_terms"
                        ></div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-sm btn-danger"
                            data-bs-dismiss="modal"
                        >
                            {{ $t("Close") }}
                        </button>
                        <button
                            v-if="ext.eco == 1 && canDirect == true"
                            :key="canDirect"
                            type="submit"
                            class="btn btn-sm btn-warning"
                            data-bs-target="#depositEco"
                            data-bs-toggle="modal"
                            @click="
                                fetchWallet(
                                    plat.mlm.membership_deposit_currency,
                                    plat.mlm.membership_deposit_currency_network
                                )
                            "
                        >
                            {{ $t("Direct Deposit") }}
                        </button>
                        <button
                            type="submit"
                            class="btn btn-sm btn-success"
                            data-bs-target="#depositWallet"
                            data-bs-toggle="modal"
                        >
                            {{ $t("Wallet Transfer") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="modal fade"
            tabindex="-1"
            id="depositEco"
            aria-labelledby="VIP Rank"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t("Direct Deposit Confirmation") }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <form
                        class="deposite-form"
                        @submit.prevent="deposit('eco')"
                    >
                        <div class="modal-body">
                            <div :key="walCur" class="mb-1">
                                <label for="basic-url" class="form-label">
                                    <a class="text-dark">{{
                                        $t("Wallet Balance")
                                    }}</a>
                                </label>
                                <form
                                    v-if="walCur == null"
                                    @submit.prevent="
                                        createWallet(
                                            plat.mlm
                                                .membership_deposit_currency,
                                            plat.mlm
                                                .membership_deposit_currency_network
                                        )
                                    "
                                >
                                    <button
                                        type="submit"
                                        class="btn btn-success btn-sm"
                                        :disabled="loading"
                                    >
                                        {{ $t("Create Wallet") }}
                                    </button>
                                </form>
                                <div v-else class="input-group">
                                    <input
                                        type="number"
                                        class="form-control text-dark border-0"
                                        :value="walCur"
                                        :key="walCur"
                                        readonly
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                    <span
                                        class="input-group-text text-dark border-0"
                                        >{{
                                            plat.mlm.membership_deposit_currency
                                        }}</span
                                    >
                                </div>
                            </div>
                            <div class="mb-1">
                                <label for="hash" class="form-label">{{
                                    $t("Amount")
                                }}</label>
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="amount"
                                        :min="plan0.deposits_required"
                                        v-model="amount"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div class="mb-1">
                                <label for="hash" class="form-label">{{
                                    $t(
                                        "Minimum Deposit To Activate Community Line"
                                    )
                                }}</label>
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        type="text"
                                        readonly
                                        :value="
                                            plan0.deposits_required +
                                            ' ' +
                                            plat.mlm.membership_deposit_currency
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-sm btn-danger"
                                data-bs-dismiss="modal"
                            >
                                {{ $t("Close") }}
                            </button>
                            <button
                                type="submit"
                                class="btn btn-sm btn-success"
                                :disabled="loading"
                            >
                                {{ $t("Deposit") }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div
            class="modal fade"
            tabindex="-1"
            id="depositWallet"
            aria-labelledby="VIP Rank"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t("Wallet Transfer Confirmation") }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <form
                        class="deposite-form"
                        @submit.prevent="deposit('wallet')"
                    >
                        <div class="modal-body">
                            <label for="hash" class="form-label">{{
                                $t("Deposit Wallet")
                            }}</label>
                            <div class="input-group">
                                <input
                                    class="form-control"
                                    type="text"
                                    readonly
                                    :value="plat.mlm.membership_deposit_wallet"
                                />
                            </div>
                            <small class="text-warning"
                                >{{ $t("Send") }}
                                {{ plat.mlm.membership_deposit_currency }}
                                {{
                                    $t(
                                        "to this wallet the enter the transaction hash below"
                                    )
                                }}</small
                            >
                            <hr />
                            <label for="hash" class="form-label">{{
                                $t("Deposit Hash")
                            }}</label>
                            <div class="input-group">
                                <input
                                    class="form-control"
                                    type="text"
                                    id="hash"
                                    v-model="hash"
                                    placeholder="0x45xxxxxxxxxxxxxxxca46xxxxxxxxxxxxxxxxx2xxxxxxxxxxxxxxxxxxx"
                                    required=""
                                />
                            </div>
                            <hr />
                            <div v-if="mlm.membership == 0">
                                <label for="hash" class="form-label">{{
                                    $t(
                                        "Minimum Deposit To Activate Community Line"
                                    )
                                }}</label>
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        type="text"
                                        readonly
                                        :value="
                                            plan0.deposits_required +
                                            ' ' +
                                            plat.mlm.membership_deposit_currency
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-sm btn-danger"
                                data-bs-dismiss="modal"
                            >
                                {{ $t("Close") }}
                            </button>
                            <button
                                type="submit"
                                class="btn btn-sm btn-success"
                                :disabled="loading"
                            >
                                {{ $t("Deposit") }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            tabindex="-1"
            id="withdraw"
            aria-labelledby="Withdraw"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t("Earning Withdraw") }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <form
                        class="withdraw-form"
                        @submit.prevent="membership_withdraw()"
                    >
                        <div class="modal-body">
                            <label for="wallet_address" class="form-label">{{
                                $t("Withdraw Wallet")
                            }}</label>
                            <div class="input-group">
                                <input
                                    class="form-control"
                                    type="text"
                                    id="wallet_address"
                                    v-model="wallet_address"
                                    placeholder="0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                                    required=""
                                />
                            </div>
                            <small class="text-warning"
                                >{{ $t("Write your") }}
                                {{ plat.mlm.membership_deposit_currency }}
                                {{ $t("here to recieve your earnings") }}</small
                            >
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-primary btn-sm text-white btn-danger"
                                data-bs-dismiss="modal"
                            >
                                {{ $t("Close") }}
                            </button>
                            <button
                                type="submit"
                                class="btn btn-primary btn-sm text-white btn-success"
                                :disabled="loading"
                            >
                                {{ $t("Withdraw") }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Refer from "../components/Refer.vue";
export default {
    props: ["user"],
    // component list
    components: {
        Refer,
    },

    // component data
    data() {
        return {
            ref_by: null,
            mlm: {},
            mlmB: {},
            bvWithdrawable: null,
            daily_bv: null,
            bvLogs: null,
            planA: {},
            planB: {},
            plan0: {},
            pathname:
                window.location.protocol + "//" + window.location.hostname,
            gnl: gnl,
            plat: plat,
            ext: ext,
            loading: false,
            bv_total: null,
            directs: null,
            hash: null,
            wallet_address: null,
            walCur: null,
            amount: null,
            tokens: [],
            canDirect: false,
        };
    },

    // custom methods
    methods: {
        fetchWallet(coin, chain) {
            this.$http
                .post("/user/fetch/eco/wallet", {
                    type: "main",
                    symbol: coin,
                    chain: chain,
                })
                .then((response) => {
                    this.walCur = response.data.balance;
                })
                .catch((err) => {
                    this.fetchWallet(coin, chain);
                });
        },
        createWallet(coin, chain) {
            this.loading = true;
            this.$http
                .post("/user/eco/wallet/create", {
                    chain: chain,
                    network: chain,
                    symbol: coin,
                    postfix: "",
                    type: "main",
                })
                .then((response) => {
                    this.$toast[response.data.type](response.data.message);
                    this.fetchWallet(coin, chain);
                })
                .catch((error) => {
                    this.$toast.error(error.response.data);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        deposit(type) {
            (this.loading = true),
                this.$http
                    .post("/user/mlm/deposit", {
                        hash: this.hash,
                        amount: this.amount,
                        type: type,
                        symbol: plat.mlm.membership_deposit_currency,
                        chain: plat.mlm.membership_deposit_currency_network,
                        balance: this.walCur,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message);
                        this.fetchData();
                        if (ext.eco == 1) {
                            this.fetchWallet(
                                plat.mlm.membership_deposit_currency,
                                plat.mlm.membership_deposit_currency_network
                            );
                        }
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
        membership_withdraw() {
            (this.loading = true),
                this.$http
                    .post("/user/mlm/withdraw", {
                        wallet_address: this.wallet_address,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message);
                        this.fetchData();
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
        fetchData() {
            this.$http.post("/user/fetch/network").then((response) => {
                if (response.data.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                (this.ref_by = response.data.ref_by),
                    (this.mlm = response.data.mlm),
                    (this.mlmB = response.data.mlmB),
                    (this.bvWithdrawable = response.data.bvWithdrawable),
                    (this.daily_bv = response.data.daily_bv),
                    (this.bvLogs = response.data.bvLogs),
                    (this.bv_total = response.data.bv_total),
                    (this.directs = response.data.directs),
                    (this.planA = response.data.planA),
                    (this.planB = response.data.planB),
                    (this.plan0 = response.data.plan0),
                    (this.tokens = response.data.tokens);
                if (
                    this.tokens[plat.mlm.membership_deposit_currency] !==
                    undefined
                ) {
                    this.canDirect = true;
                }
            });
        },
        Withdraw() {
            (this.loading = true),
                this.$http
                    .post("/user/mlm/withdraw")
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message);
                        this.fetchData();
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
};
</script>
