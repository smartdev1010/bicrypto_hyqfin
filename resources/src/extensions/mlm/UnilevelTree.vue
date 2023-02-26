<template>
    <li v-for="(D, index) in mlm" :key="index">
        <span
            :class="
                plat.mlm.membership_status == 1
                    ? D.mlm.membership != 0
                        ? D.mlm.membership == 1
                            ? 'text-success border-success'
                            : 'text-warning border-warning'
                        : 'text-dark'
                    : D.mlm.rank == 0
                    ? 'text-dark'
                    : 'text-success border-success'
            "
            >{{ D.username }}</span
        >
        <ul v-if="D.downlines != null && D.downlines != ''">
            <UnilevelTree :mlm="D.downlines" />
        </ul>
    </li>
</template>
<script>
export default {
    name: "UnilevelTree",
    props: ["mlm"],
    data() {
        return {
            plat: plat,
        };
    },
};
</script>
