<template>
    <li v-if="mlm != null">
        <span
            :class="mlm.rank == 0 ? 'text-dark' : 'text-success border-success'"
            >{{ mlm.username }}</span
        >
        <ul v-if="mlm.L != null || mlm.R != null">
            <BinaryTree :mlm="mlm.L" />
            <BinaryTree :mlm="mlm.R" />
        </ul>
    </li>
    <li v-else>
        <span class="text-dark">{{ $t("No User") }}</span>
    </li>
</template>
<script>
export default {
    name: "BinaryTree",
    props: ["mlm"],
};
</script>
