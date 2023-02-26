<template>
    <div class="flex items-center justify-between p-2 font-medium">
        <div class="flex items-center">
            <span class="bg-dark mr-2 rounded px-2 py-1 shadow"
                ><i
                    style="margin-right: 0 !important"
                    :class="' bi bi-' + icon"
                ></i
            ></span>
            <span>{{ $t(title) }}</span>
        </div>
        <div>
            <span class="badge bg-dark">{{ commission }} %</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Method",
    props: ["icon", "title", "commission"],
};
</script>
