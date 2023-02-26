<template>
  <div>
    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-4">
      <div class="col-span-1">
        <div class="card card-profile">
          <div class="card-body">
            <div class="flex flex-col space-y-5 p-5 text-center">
              <div class="flex justify-center">
                <img class="rounded-full shadow-lg" height="96" width="96" v-lazy="
                  userStore.user
                    ? userStore.user.profile_photo_path
                      ? '/assets/images/profile/' +
                      userStore.user
                        .profile_photo_path
                      : '/assets/no-image.png'
                    : '/assets/no-image.png'
                " />
              </div>
              <div class="text-center text-xl font-medium text-gray-900 dark:text-white">
                {{
                  userStore.user
                  ? userStore.user.firstname
                  : ""
                }}
              </div>
              <div class="badge bg-success">
                {{ $t("Verified Trader") }}
              </div>
              <template v-if="
                plat.mlm.type == 'binary' &&
                mlmStore.planA != null
              ">
                <span v-if="mlmStore.planA.rank == 0" class="badge bg-primary profile-badge">{{ $t("No Business Rank")
                }}</span>
                <span v-else class="badge bg-primary profile-badge">{{ $t("Business Rank") }}
                  {{ mlmStore.planA.rank }}</span>
              </template>
              <template v-else-if="plat.mlm.type == 'unilevel'">
                <span v-if="
                  mlmStore.mlm != null &&
                  (mlmStore.mlm.membership != 1 ||
                    mlmStore.mlm.membership != 2)
                " class="badge bg-dark">{{ $t("No VIP Privilege") }}</span>
                <span v-else class="badge bg-primary">{{ $t("VIP Rank") }}
                  {{
                    mlmStore.mlm != null &&
                    mlmStore.mlm.membership_rank
                  }}</span>
              </template>
            </div>
            <div class="mt-1" v-if="mlmStore.bvWithdrawable != null" :key="mlmStore.bvWithdrawable">
              <div class="flex justify-between">
                <small>0 BV</small>
                <small>{{ plat.mlm.min_withdraw }} BV</small>
              </div>
              <Progress v-if="plat.mlm.min_withdraw != null" :progress="
                (mlmStore.bvWithdrawable /
                  plat.mlm.min_withdraw) *
                  100 <
                  100
                  ? (mlmStore.bvWithdrawable /
                    plat.mlm.min_withdraw) *
                  100
                  : 100
              "></Progress>
              <small class="text-warning">{{
                $t("Progress To Unlock Withdrawal")
              }}</small><br />
              <div v-if="
                mlmStore.bvWithdrawable >=
                plat.mlm.min_withdraw
              " :key="mlmStore.bvWithdrawable">
                <template v-if="plat.mlm.membership_status == 1">
                  <button class="btn btn-outline-success mt-5 w-full" @click="showModal('withdraw')">
                    {{ $t("Withdraw") }}
                  </button>
                </template>
                <template v-else>
                  <button type="button" class="btn btn-outline-success mt-5" :disabled="mlmStore.loading"
                    @click="Withdraw()">
                    {{ $t("Withdraw") }}
                  </button>
                </template>
              </div>
              <div v-else>
                <button type="button" class="btn btn-outline-secondary mt-5" disabled>
                  {{ $t("Withdraw Locked") }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Refer class="mt-5" :pathname="pathname" :reward="
          plat.mlm.unilevel_upline1_percentage
            ? plat.mlm.unilevel_upline1_percentage
            : 5
        " />
        <div class="card mt-5" v-if="plat.mlm.type == 'binary'">
          <div class="card-header">
            <h4 class="card-title">
              {{ $t("All Referrals") }}
            </h4>
          </div>
          <div class="card-body">
            <div class="flex flex-wrap">
              <span v-for="(ref, index) in mlmStore.ref_by" :key="index" class="badge bg-warning mr-1">{{ ref.username
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div class="mb-5 grid gap-5 xs:grid-cols-1 md:grid-cols-2">
          <div>
            <div class="mb-5 grid gap-5 xs:grid-cols-1 md:grid-cols-2" :key="mlmStore.bvWithdrawable">
              <div class="card text-center">
                <div class="card-body">
                  <div class="avatar bg-light-primary p-50 mb-1">
                    <div class="avatar-content">
                      <i class="bi bi-briefcase font-medium"></i>
                    </div>
                  </div>
                  <h2 class="font-medium">
                    {{ mlmStore.bvWithdrawable }} BV
                  </h2>
                  <p class="card-text">
                    {{ $t("Your Business Value") }}
                  </p>
                </div>
              </div>
              <div class="card text-center" v-if="plat.mlm.commission_type == 'direct'">
                <div class="card-body">
                  <div class="avatar bg-light-warning p-50 mb-1">
                    <div class="avatar-content">
                      <i class="bi bi-diagram-3 font-medium"></i>
                    </div>
                  </div>
                  <h2 class="font-medium">
                    {{
                      mlmStore.planA != null &&
                      mlmStore.planA.trade_commission
                    }}
                    BV
                  </h2>
                  <p class="card-text">
                    {{ $t("Trade Commission") }}
                  </p>
                </div>
              </div>
              <div class="card text-center" v-else-if="plat.mlm.commission_type == 'daily'">
                <div class="card-body">
                  <div class="avatar bg-light-warning p-50 mb-1">
                    <div class="avatar-content">
                      <i class="bi bi-diagram-3 font-medium"></i>
                    </div>
                  </div>
                  <h2 class="font-medium">
                    {{ mlmStore.daily_bv }} BV
                  </h2>
                  <p class="card-text">
                    {{ $t("Daily Business Value") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-5 grid gap-5 xs:grid-cols-1 md:grid-cols-2" :key="mlmStore.bvWithdrawable">
              <div class="card text-center">
                <div class="card-body">
                  <div class="avatar bg-light-primary p-50 mb-1">
                    <div class="avatar-content">
                      <i class="bi bi-briefcase font-medium"></i>
                    </div>
                  </div>
                  <h2 class="font-medium">
                    <div v-if="totalInvestment.length > 0">
                      <div v-for="investment in totalInvestment ">
                        {{ investment.amount }}
                        {{ investment.wallet }}
                      </div>
                    </div>
                  </h2>
                  <p v-if="totalInvestment.length > 0" class="card-text">
                    {{ $t("Total Investment") }}
                  </p>
                  <p v-else="totalInvestment.length > 0" class="card-text">
                    {{ $t("There are no investments.") }}
                  </p>
                </div>
              </div>
              <div class="card text-center" v-if="plat.mlm.commission_type == 'direct'">
                <div class="card-body">
                  <div class="avatar bg-light-warning p-50 mb-1">
                    <div class="avatar-content">
                      <i class="bi bi-diagram-3 font-medium"></i>
                    </div>
                  </div>
                  <h2 class="font-medium">
                    {{
                      mlmStore.planA != null &&
                      mlmStore.planA.trade_commission
                    }}
                    BV
                  </h2>
                  <p class="card-text">
                    {{ $t("Trade Commission") }}
                  </p>
                </div>
              </div>
              <div class="card text-center" v-else-if="plat.mlm.commission_type == 'daily'">
                <div class="card-body">
                  <div class="avatar bg-light-primary p-50 mb-1">
                    <div class="avatar-content">
                      <i class="bi bi-briefcase font-medium"></i>
                    </div>
                  </div>
                  <h2 class="font-medium">
                    <div v-if="dailyIncome.length > 0">
                      <div v-for="income in dailyIncome ">
                        {{ income.amount }}
                        {{ income.wallet }}
                      </div>
                    </div>
                  </h2>
                  <p v-if="dailyIncome.length > 0" class="card-text">
                    {{ $t("Daily Income") }}
                  </p>
                  <p v-else="totalInvestment.length > 0" class="card-text">
                    {{ $t("There are no daily Income.") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">
                  {{ $t("Rank Commissions") }}
                </h4>
              </div>
              <div v-if="mlmStore.planA != null" style="overflow-y: auto; max-height: 280px">
                <Method title="Deposit Commission" icon="cash" class="border-b dark:border-gray-600" :commission="
                  mlmStore.planA.deposit_commission
                " v-if="mlmStore.planA.deposit_commission != null" />
                <Method v-if="
                  plat.mlm.type == 'binary' &&
                  mlmStore.planA.ref_commission != null
                " title="First Deposit Commission" icon="node-plus" class="border-b dark:border-gray-600"
                  :commission="mlmStore.planA.ref_commission" />
                <Method v-if="
                  plat.mlm.type == 'binary' &&
                  mlmStore.planA.active_ref_commission !=
                  null
                " title="Active Referral First Deposit Commission" icon="award" class="border-b dark:border-gray-600"
                  :commission="
                    mlmStore.planA.active_ref_commission
                  " />
                <Method title="Trade Commission" icon="currency-exchange" class="border-b dark:border-gray-600"
                  :commission="
                    mlmStore.planA.trade_commission
                  " v-if="
  mlmStore.planA.trade_commission != null
" />
                <Method title="Bot Investment Commission" icon="robot" class="border-b dark:border-gray-600"
                  :commission="mlmStore.planA.bot_commission" v-if="mlmStore.planA.bot_commission != null" />
                <Method title="Token Offer Purchase Commission" icon="coin" class="border-b dark:border-gray-600"
                  :commission="mlmStore.planA.ico_commission" v-if="mlmStore.planA.ico_commission != null" />
                <Method title="Forex Deposit Commission" icon="bar-chart" class="border-b dark:border-gray-600"
                  :commission="
                    mlmStore.planA.forex_commission
                  " v-if="
  mlmStore.planA.forex_commission != null
" />
                <Method title="Forex Investment Commission" icon="bar-chart" class="border-b dark:border-gray-600"
                  :commission="
                    mlmStore.planA
                      .forex_investment_commission
                  " v-if="
  mlmStore.planA
    .forex_investment_commission != null
" />
                <Method title="Staking Commission" icon="layers" class="border-b dark:border-gray-600"
                  :commission="mlmStore.planA.staking" v-if="mlmStore.planA.staking != null" />
                <Method title="Community Line Commission" icon="layers" :commission="
                  mlmStore.planA.community_line_status
                " v-if="
  mlmStore.planA.community_line_status !=
  null
" />
              </div>
            </div>
          </div>
          <div class="card card-transaction">
            <div class="card-header">
              <h4 class="card-title">
                {{ $t("Latest Commissions") }}
              </h4>
            </div>
            <div style="overflow-y: auto; max-height: 460px">
              <template v-if="
                mlmStore.bvLogs != null &&
                mlmStore.bvLogs.length > 0
              ">
                <div class="border-b dark:border-gray-600" v-for="(bvLog, index) in mlmStore.bvLogs" :key="index">
                  <div class="flex items-center justify-between p-2 font-medium">
                    <div class="flex items-center">
                      <span v-if="bvLog.type == 1" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-cash"></i></span>
                      <span v-else-if="bvLog.type == 2" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-node-plus"></i></span>
                      <span v-if="bvLog.type == 3" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-award"></i></span>
                      <span v-if="bvLog.type == 4" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-currency-exchange"></i></span>
                      <span v-if="bvLog.type == 5" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-robot"></i></span>
                      <span v-if="bvLog.type == 6" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-coin"></i></span>
                      <span v-if="bvLog.type == 7" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-bar-chart"></i></span>
                      <span v-if="bvLog.type == 8" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-bar-chart"></i></span>
                      <span v-if="bvLog.type == 9" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-layers"></i></span>
                      <span v-if="bvLog.type == 10" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-person-lines-fill"></i></span>
                      <span v-if="bvLog.type == 11" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-download"></i></span>
                      <span v-if="bvLog.type == 12" class="text-success bg-dark mr-2 rounded px-2 py-1 shadow"><i
                          style="
                                                                                                                                                                                                                                                                                                                                                                                                                      margin-right: 0 !important;
                                                                                                                                                                                                                                                                                                                                                                                                                  "
                          class="bi bi-upload"></i></span>
                      <div>
                        <span v-if="bvLog.type == 1" class="text-success font-medium">{{
                          $t(
                            "Referral Deposit Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 2" class="text-success font-medium">{{
                          $t(
                            "Referral First Deposit Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 3" class="text-success font-medium">{{
                          $t(
                            "Active Referral First Deposit Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 4" class="text-success font-medium">{{
                          $t("Trade Commission")
                        }}</span>
                        <span v-if="bvLog.type == 5" class="text-success font-medium">{{
                          $t(
                            "Bot Investment Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 6" class="text-success font-medium">{{
                          $t(
                            "Token ICO Purchase Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 7" class="text-success font-medium">{{
                          $t(
                            "Forex Deposit Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 8" class="text-success font-medium">{{
                          $t(
                            "Forex Investment Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 9" class="text-success font-medium">{{
                          $t("Staking Commission")
                        }}</span>
                        <span v-if="bvLog.type == 10" class="text-success font-medium">{{
                          $t(
                            "Community Line Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 11" class="text-success font-medium">{{
                          $t(
                            "Membership Withdraw Commission"
                          )
                        }}</span>
                        <span v-if="bvLog.type == 12" class="text-success font-medium">{{
                          $t(
                            "Membership Deposit Commission"
                          )
                        }}</span>
                        <div>
                          <small>
                            <toDate :time="
                              bvLog.created_at
                            " />
                          </small>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span class="badge bg-success">{{ bvLog.amount }} BV</span>
                    </div>
                  </div>
                </div>
              </template>
              <div v-else class="text-muted mb-5 flex flex-col items-center justify-center text-center" colspan="100%">
                <img height="128" width="128" src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg" alt="" />
                <p class="">
                  {{ $t("No Transactions Found") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              {{ $t("Business Network") }}
            </div>
            <template v-if="
              plat.mlm.type == 'binary' &&
              mlmStore.mlm != null
            ">
              <ul class="tree">
                <li>
                  <span :class="
                    mlmStore.mlm.rank == 0
                      ? 'text-dark'
                      : 'text-success border-success'
                  ">{{ userStore.user.username }}</span>
                  <ul v-if="
                    mlmStore.mlm.L != null ||
                    mlmStore.mlm.R != null
                  ">
                    <BinaryTree :mlm="mlmStore.mlm.L" />
                    <BinaryTree :mlm="mlmStore.mlm.R" />
                  </ul>
                </li>
              </ul>
            </template>
            <template v-else-if="plat.mlm.type == 'unilevel'">
              <ul class="tree">
                <li>
                  <span :class="
                    plat.mlm.membership_status == 1
                      ? mlmStore.mlm != null &&
                        mlmStore.mlm.membership != 0
                        ? mlmStore.mlm.membership ==
                          1
                          ? 'text-success border-success'
                          : 'text-warning border-warning'
                        : 'text-dark'
                      : mlmStore.mlm != null &&
                        mlmStore.mlm.rank == 0
                        ? 'text-dark'
                        : 'text-success border-success'
                  ">{{ userStore.user.username }}</span>

                  <ul v-if="
                    mlmStore.mlm != null &&
                    mlmStore.mlm.downlines != null &&
                    mlmStore.mlm.downlines != ''
                  ">
                    <UnilevelTree :mlm="mlmStore.mlm.downlines" />
                  </ul>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 grid gap-5 xs:grid-cols-1 md:grid-cols-2" v-if="plat.mlm.membership_status == 1">
      <div class="card">
        <div class="card-body text-center" v-if="
          mlmStore.mlm != null &&
          (mlmStore.mlm.membership == 1 ||
            mlmStore.mlm.membership == 2)
        ">
          <div class="text-end">
            <span class="badge bg-primary">{{
              $t("Current Rank")
            }}</span>
          </div>
          <div class="mb-1 flex justify-center">
            <img src="/assets/images/illustration/Pot1.svg" class="mb-2 mt-5" alt="svg img" />
          </div>
          <h3 class="p-4 text-2xl font-bold dark:text-white">
            VIP
            {{ mlmStore.mlm.membership_rank }}
          </h3>
          <div class="annual-plan my-2">
            <div class="plan-price flex justify-center">
              <sup class="text-xl font-bold text-blue-500">{{
                plat.mlm.membership_deposit_currency
              }}</sup>
              <span class="text-2xl font-bold text-blue-900">{{
                mlmStore.mlm.membership_deposits
              }}</span>
              <sub class="pricing-duration text-body font-medium-1 mt-3 font-medium">{{ $t("Deposited") }}</sub>
            </div>
          </div>
          <ul class="max-w-md list-inside list-disc space-y-1 text-start text-gray-500 dark:text-gray-400">
            <li class="list-group-item">
              {{ $t("Direct Referrals") }}:
              {{ mlmStore.directs }}
            </li>
            <li class="list-group-item">
              {{ $t("Current Business Value") }}:
              {{ mlmStore.bv_total }}
              BV
            </li>
            <li class="list-group-item">
              {{ $t("Withdrawal Percentage") }}:
              {{ mlmStore.planA.margin }}
              %
            </li>
          </ul>
          <button class="btn btn-outline-info mt-5">
            {{ $t("Your current Rank") }}
          </button>
        </div>
        <div class="card-body text-center" v-else>
          <div class="text-end">
            <span class="badge bg-primary">{{
              $t("Current Rank")
            }}</span>
          </div>
          <div class="mb-1 flex justify-center">
            <img src="/assets/images/illustration/Pot1.svg" class="mb-2 mt-5 h-24 w-12" alt="svg img" />
          </div>
          <h3 class="p-4 text-2xl font-bold dark:text-white">
            No VIP Privilege
          </h3>
          <div class="annual-plan my-2">
            <div class="plan-price flex justify-center">
              <sup class="text-xl font-bold text-blue-500">{{
                plat.mlm.membership_deposit_currency
              }}</sup>
              <span class="text-2xl font-bold text-blue-900">{{
                mlmStore.mlm != null &&
                mlmStore.mlm.membership_deposits
                ? mlmStore.mlm.membership_deposits
                : 0
              }}</span>
              <sub class="pricing-duration text-body font-medium-1 mt-3 font-medium">{{ $t("Deposited") }}</sub>
            </div>
          </div>
          <ul class="max-w-md list-inside list-disc space-y-1 text-start text-gray-500 dark:text-gray-400">
            <li class="list-group-item">
              {{ $t("Direct Referrals") }}:
              {{ mlmStore.directs }}
            </li>
            <li class="list-group-item">
              {{ $t("Current Business Value") }}:
              {{ mlmStore.bv_total }}
              BV
            </li>
            <li class="list-group-item">
              {{ $t("Withdrawal Percentage") }}:
              {{
                mlmStore.planA != null && mlmStore.planA.margin
              }}
              %
            </li>
          </ul>
          <button class="btn btn-outline-info mt-5">
            {{ $t("Your current Rank") }}
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body border-primary text-center">
          <div class="pricing-badge text-end">
            <span class="badge bg-success">{{
              $t("Next Rank")
            }}</span>
          </div>
          <div class="mb-1 flex justify-center">
            <img src="/assets/images/illustration/Pot2.svg" class="mb-1" alt="svg img" />
          </div>
          <h3 class="p-4 text-2xl font-bold dark:text-white">
            VIP
            {{ mlmStore.planB != null && mlmStore.planB.rank }}
          </h3>
          <div class="annual-plan my-2">
            <div class="plan-price flex justify-center">
              <sup class="d-block font-medium-1 text-primary mt-2 font-medium">{{ plat.mlm.membership_deposit_currency
              }}</sup>
              <span class="pricing-basic-value text-primary display-3 lh-1 font-medium">{{
                mlmStore.planB != null &&
                mlmStore.planB.deposits_required
              }}</span>
              <sub class="pricing-duration text-body font-medium-1 mt-3 font-medium">{{ $t("Required") }}
                <i v-if="
                  mlmStore.mlm != null &&
                  mlmStore.mlm.membership_deposits -
                  mlmStore.planB.deposits_required >
                  0
                " class="bi bi-check-circle text-success"></i></sub>
            </div>
          </div>
          <ul class="max-w-md list-inside list-disc space-y-1 text-start text-gray-500 dark:text-gray-400">
            <li class="list-group-item" :class="
              mlmStore.directs != null &&
                mlmStore.directs -
                mlmStore.planB.direct_required >
                0
                ? 'text-success'
                : ''
            ">
              {{ $t("Required Direct Referral") }}:
              {{
                mlmStore.planB != null &&
                mlmStore.planB.direct_required
              }}
              <i v-if="
                mlmStore.directs != null &&
                mlmStore.directs -
                mlmStore.planB.direct_required >
                0
              " class="bi bi-check-circle"></i>
            </li>
            <li class="list-group-item" v-if="mlmStore.bv_total != null" :class="
              mlmStore.bv_total - mlmStore.planB.bv_required >
                0
                ? 'text-success'
                : ''
            ">
              {{ $t("Required Business Value") }}:
              {{ mlmStore.planB.bv_required }}
              BV
              <i v-if="
                mlmStore.bv_total != null &&
                mlmStore.bv_total -
                mlmStore.planB.bv_required >
                0
              " class="bi bi-check-circle"></i>
            </li>
            <li class="list-group-item">
              {{ $t("Withdrawal Percentage") }}:
              {{
                mlmStore.planB != null && mlmStore.planB.margin
              }}
              %
            </li>
          </ul>
          <br />
          <button class="btn btn-outline-primary mt-5" @click="showModal('deposit')">
            {{
              mlmStore.mlm != null &&
              (mlmStore.mlm.membership == 0 ||
                mlmStore.mlm.membership == null
                ? $t("Become An Affiliate")
                : $t("Upgrade"))
            }}
          </button>
        </div>
      </div>
    </div>

    <Modal size="lg" v-if="isShowModal.deposit" @close="closeModal('deposit')">
      <template #header>
        <div class="flex items-center text-lg">
          {{ $t("Become an Affiliate Member") }}
        </div>
      </template>
      <template #body>
        <div v-if="plat.mlm.membership_terms != null" v-html="plat.mlm.membership_terms"></div>
      </template>
      <template #footer>
        <div class="flex justify-end space-x-3">
          <button v-if="ext.eco == 1 && mlmStore.canDirect == true" :key="mlmStore.canDirect" type="submit"
            class="btn btn-outline-warning"
            @click="
              fetchWallet(
                plat.mlm.membership_deposit_currency,
                plat.mlm.membership_deposit_currency_network
              );
            showModal('depositEco');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ">
            {{ $t("Direct Deposit") }}
          </button>
          <button type="submit" class="btn btn-outline-success" @click="showModal('depositWallet')">
            {{ $t("Wallet Transfer") }}
          </button>
        </div>
      </template>
    </Modal>

    <form class="deposite-form" @submit.prevent="deposit('eco')">
      <Modal size="lg" v-if="isShowModal.depositEco" @close="closeModal('depositEco')">
        <template #header>
          <div class="flex items-center text-lg">
            {{ $t("Direct Deposit Confirmation") }}
          </div>
        </template>
        <template #body>
          <div :key="mlmStore.walCur" class="mb-1">
            <label for="basic-url" class="form-label">
              <a class="text-dark">{{ $t("Wallet Balance") }}</a>
            </label>
            <form v-if="mlmStore.walCur == null" @submit.prevent="
              createWallet(
                plat.mlm.membership_deposit_currency,
                plat.mlm.membership_deposit_currency_network
              )
            ">
              <button type="submit" class="btn btn-outline-success" :disabled="mlmStore.loading">
                {{ $t("Create Wallet") }}
              </button>
            </form>
            <div v-else class="input-group">
              <input type="number" :value="mlmStore.walCur" :key="mlmStore.walCur" readonly
                aria-label="Amount (to the nearest dollar)" />
              <span>{{
                plat.mlm.membership_deposit_currency
              }}</span>
            </div>
          </div>
          <div>
            <label for="hash" class="form-label">{{
              $t("Amount")
            }}</label>
            <input v-if="mlmStore.plan0 != null" class="form-control" type="text" id="amount"
              :min="mlmStore.plan0.deposits_required" v-model="amount" required />
          </div>
          <div>
            <label for="hash" class="form-label">{{
              $t("Minimum Deposit To Activate Community Line")
            }}</label>
            <input class="form-control" type="text" readonly :value="
              mlmStore.plan0 != null &&
              mlmStore.plan0.deposits_required +
              ' ' +
              plat.mlm.membership_deposit_currency
            " />
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end">
            <button type="submit" class="btn btn-outline-success" :disabled="mlmStore.loading">
              {{ $t("Deposit") }}
            </button>
          </div>
        </template>
      </Modal>
    </form>

    <form class="deposite-form" @submit.prevent="deposit('wallet')">
      <Modal size="lg" v-if="isShowModal.depositWallet" @close="closeModal('depositWallet')">
        <template #header>
          <div class="flex items-center text-lg">
            {{ $t("Wallet Transfer Confirmation") }}
          </div>
        </template>
        <template #body>
          <div>
            <label for="hash" class="form-label">{{
              $t("Deposit Wallet")
            }}</label>
            <div class="input-group">
              <input class="form-control" type="text" readonly :value="plat.mlm.membership_deposit_wallet" />
            </div>
            <small class="text-warning">{{ $t("Send") }}
              {{ plat.mlm.membership_deposit_currency }}
              {{
                $t(
                  "to this wallet the enter the transaction hash below"
                )
              }}</small>
          </div>
          <div>
            <label for="hash" class="form-label">{{
              $t("Deposit Hash")
            }}</label>
            <input class="form-control" type="text" id="hash" v-model="mlmStore.hash"
              placeholder="0x45xxxxxxxxxxxxxxxca46xxxxxxxxxxxxxxxxx2xxxxxxxxxxxxxxxxxxx" required="" />
          </div>
          <div v-if="
            mlmStore.mlm != null && mlmStore.mlm.membership == 0
          ">
            <label for="hash" class="form-label">{{
              $t("Minimum Deposit To Activate Community Line")
            }}</label>
            <input class="form-control" type="text" readonly :value="
              mlmStore.plan0 != null &&
              mlmStore.plan0.deposits_required +
              ' ' +
              plat.mlm.membership_deposit_currency
            " />
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end">
            <button type="submit" class="btn btn-outline-success" :disabled="mlmStore.loading">
              {{ $t("Deposit") }}
            </button>
          </div>
        </template>
      </Modal>
    </form>

    <form class="withdraw-form" @submit.prevent="membership_withdraw()">
      <Modal size="lg" v-if="isShowModal.withdraw" @close="closeModal('withdraw')">
        <template #header>
          <div class="flex items-center text-lg">
            {{ $t("Earning Withdraw") }}
          </div>
        </template>
        <template #body>
          <label for="wallet_address" class="form-label">{{
            $t("Withdraw Wallet")
          }}</label>
          <input class="form-control" type="text" id="wallet_address" v-model="mlmStore.wallet_address"
            placeholder="0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" required="" />
          <small class="text-warning">{{ $t("Write your") }}
            {{ plat.mlm.membership_deposit_currency }}
            {{ $t("here to recieve your earnings") }}</small>
        </template>
        <template #footer>
          <div class="flex justify-end">
            <button type="submit" class="btn btn-outline-success" :disabled="mlmStore.loading">
              {{ $t("Withdraw") }}
            </button>
          </div>
        </template>
      </Modal>
    </form>
  </div>
</template>

<script>
import { Modal } from "flowbite-vue";
import Method from "./Method.vue";
import BinaryTree from "./BinaryTree.vue";
import UnilevelTree from "./UnilevelTree.vue";
import Refer from "../../partials/Refer.vue";
import { useMlmStore } from "../../store/mlm";
import { useUserStore } from "../../store/user";
import { useWalletsStore } from "../../store/wallets";
import { useInvestmentStore } from "../../store/investment";
import { Progress } from "flowbite-vue";
import toDate from "../../partials/toDate.vue";
export default {
  setup() {
    const userStore = useUserStore();
    const mlmStore = useMlmStore();
    const walletsStore = useWalletsStore();
    const investmentStore = useInvestmentStore();
    return { userStore, mlmStore, walletsStore, investmentStore };
  },
  // component list
  components: {
    Refer,
    Method,
    BinaryTree,
    UnilevelTree,
    Progress,
    Modal,
    toDate,
  },

  // component data
  data() {
    return {
      pathname:
        window.location.protocol + "//" + window.location.hostname,
      gnl: gnl,
      plat: plat,
      ext: ext,
      amount: null,
      imageLoading: true,
      isShowModal: {
        deposit: false,
        depositEco: false,
        depositWallet: false,
        withdraw: false,
      },
      totalInvestment: [],
      dailyIncome: []
    };
  },

  // custom methods
  methods: {
    closeModal(type) {
      if (type == "deposit") {
        this.isShowModal.deposit = false;
      } else if (type == "depositEco") {
        this.isShowModal.depositEco = false;
      } else if (type == "depositWallet") {
        this.isShowModal.depositWallet = false;
      } else if (type == "withdraw") {
        this.isShowModal.withdraw = false;
      }
    },
    showModal(type) {
      if (type == "deposit") {
        this.isShowModal.deposit = true;
      } else if (type == "depositEco") {
        this.isShowModal.depositEco = true;
      } else if (type == "depositWallet") {
        this.isShowModal.depositWallet = true;
      } else if (type == "withdraw") {
        this.isShowModal.withdraw = true;
      }
    },
    async calculateTotalInvestment(downlines, depth) {
      // console.log(depth);
      let percentage;
      if (depth == 1) percentage = this.walletsStore.platforms.mlm.unilevel_upline1_percentage;
      if (depth == 2) percentage = this.walletsStore.platforms.mlm.unilevel_upline2_percentage;
      if (depth == 3) percentage = this.walletsStore.platforms.mlm.unilevel_upline3_percentage;
      if (depth == 4) percentage = this.walletsStore.platforms.mlm.unilevel_upline4_percentage;
      if (depth == 5) percentage = this.walletsStore.platforms.mlm.unilevel_upline5_percentage;
      if (depth == 6) percentage = this.walletsStore.platforms.mlm.unilevel_upline6_percentage;
      if (depth == 7) percentage = this.walletsStore.platforms.mlm.unilevel_upline7_percentage;
      if (depth == 8) percentage = this.walletsStore.platforms.mlm.unilevel_upline8_percentage;
      if (depth == 9) percentage = this.walletsStore.platforms.mlm.unilevel_upline9_percentage;
      if (depth == 10) percentage = this.walletsStore.platforms.mlm.unilevel_upline10_percentage;
      percentage /= 100;
      if (depth > 10) return;
      for (let i = 0; i < downlines.length; i++) {
        await this.investmentStore.getInvestment(downlines[i].id);
        if (this.investmentStore.investment_logs_tmp.length > 0) {
          for (let j = 0; j < this.investmentStore.investment_logs_tmp.length; j++) {
            let item = this.investmentStore.investment_logs_tmp[j];
            let walletSymbol = this.walletsStore.wallet[item.wallet_id - 1].symbol;
            if (this.totalInvestment.filter(investment => investment.wallet == walletSymbol).length == 0)
              this.totalInvestment.push({
                wallet: walletSymbol,
                amount: item.amount
              });
            else
              this.totalInvestment.filter(investment => investment.wallet == walletSymbol)[0].amount += item.amount
            if (!item.profit) {
              if (this.dailyIncome.filter(investment => investment.wallet == walletSymbol).length == 0)
                this.dailyIncome.push({
                  wallet: walletSymbol,
                  amount: item.amount * percentage
                });
              else
                this.dailyIncome.filter(investment => investment.wallet == walletSymbol)[0].amount += item.amount * percentage;
            }
          }
        }
        await this.calculateTotalInvestment(downlines[i].downlines, depth + 1);
      }
    },
    async fetchData() {
      await this.walletsStore.fetch();
      await this.walletsStore.fetch_wallet();
      if (this.investmentStore.investment.length == 0)
        await this.investmentStore.fetch();
      if (this.mlmStore.mlm == null) {
        await this.mlmStore.fetch();
        this.calculateTotalInvestment(this.mlmStore.mlm.downlines, 1);
      }
    },
    async fetchWallet(coin, chain) {
      await this.mlmStore.fetchWallet(coin, chain);
    },
    async createWallet(coin, chain) {
      await this.mlmStore.createWallet(coin, chain);
    },
    async deposit(type) {
      await this.mlmStore.deposit(type, this.amount);
    },
    async membership_withdraw() {
      await this.mlmStore.membership_withdraw();
    },
    async Withdraw() {
      await this.mlmStore.Withdraw();
    },
  },

  // on component created
  created() {
    this.fetchData();
  },

  // on component mounted
  mounted() {
    this.mlmStore.updateReport();
  },

  // on component destroyed
  destroyed() { },
};
</script>
