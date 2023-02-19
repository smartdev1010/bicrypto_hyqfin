<template>
    <div>
        <template v-if="userStore.kyc == null">
            <div class="card">
                <div
                    class="card-body border-light flex items-center justify-center rounded text-center"
                >
                    <div class="status-empty">
                        <div
                            class="status-icon flex items-center justify-center"
                        >
                            <i class="bi bi-files"></i>
                        </div>
                        <span class="status-text-d text-dark">{{
                            $t(
                                "You have not submitted your necessary documents to verify your identity. In order to trade in our platform, please verify your identity."
                            )
                        }}</span>
                        <p class="">
                            {{
                                $t(
                                    "It would great if you please submit the form. If you have any question, please feel free to contact our support team."
                                )
                            }}
                        </p>
                        <a
                            href="user/kyc/application?state=new"
                            class="btn btn-primary"
                            >{{ $t("Click here to complete your KYC") }}</a
                        >
                    </div>
                </div>
            </div>
        </template>
        <!-- <template v-else-if="userStore.kyc !== null && $_GET['thank_you']">
            <div class="card">
                <div
                    class="card-body text-center flex justify-center items-center border-warning rounded"
                >
                    <div class="status-thank">
                        <div
                            class="status-icon flex justify-center items-center"
                        >
                            <i class="bi bi-check"></i>
                        </div>
                        <span class="status-text-d large text-dark"
                            >You have completed the process of KYC</span
                        >
                        <p class="">
                            We are still waiting for your identity verification.
                            Once our team verified your identity, you will be
                            notified by email. You can also check your KYC
                            compliance status from your profile page.
                        </p>
                    </div>
                </div>
            </div>
        </template> -->
        <template
            v-else-if="
                userStore.kyc !== null && userStore.kyc.status == 'pending'
            "
        >
            <div class="card">
                <div
                    class="card-body border-info flex items-center justify-center rounded text-center"
                >
                    <div class="status-process">
                        <div
                            class="status-icon flex items-center justify-center"
                        >
                            <i class="bi bi-infinity"></i>
                        </div>
                        <span class="text-dark">{{
                            $t("Your application verification under process.")
                        }}</span>
                        <p class="">
                            {{
                                $t(
                                    "We are still working on your identity verification. Once our team verified your identity, you will be notified by email."
                                )
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </template>
        <template
            v-else-if="
                userStore.kyc.status == 'missing' ||
                userStore.kyc.status == 'rejected'
            "
        >
            <div class="card">
                <div
                    class="card-body border-warning flex items-center justify-center rounded text-center"
                >
                    <div
                        :class="
                            userStore.kyc.status == 'missing'
                                ? 'status-warnning'
                                : 'status-canceled'
                        "
                    >
                        <div
                            class="status-icon flex items-center justify-center"
                        >
                            <i class="bi bi-exclamation-lg"></i>
                        </div>
                        <span class="status-text-d text-dark">
                            {{
                                userStore.kyc.status == "missing"
                                    ? "We found some information to be missing."
                                    : "Sorry! Your application was rejected."
                            }}
                        </span>
                        <p class="">
                            {{
                                $t(
                                    "In our verification process, we found information that is incorrect or missing. Please resubmit the form. In case of any issues with the submission please contact our support team."
                                )
                            }}
                        </p>
                        <a
                            :href="
                                'user/kyc/application?state=' +
                                    userStore.kyc.status ==
                                'missing'
                                    ? 'missing'
                                    : 'resubmit'
                            "
                            class="btn btn-primary mt-0"
                            >{{ $t("Submit Again") }}</a
                        >
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="userStore.kyc.status == 'approved'"></template>
    </div>
</template>

<script>
import { useUserStore } from "../store/user";
export default {
    components: {},
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    // component list

    // component data
    data() {
        return {};
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
    },
};
</script>
