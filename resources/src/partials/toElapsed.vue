<template>
    <span class="mr-1">{{ date }}</span>
</template>

<script>
// component
export default {
    props: ["time", "suffix", "short"],
    computed: {
        date() {
            return this.elapsed(
                (Date.now() - this.time) / 1000,
                this.suffix,
                this.short
            );
        },
    },
    methods: {
        elapsed(secs, suffix, short) {
            secs = parseInt(secs) || 0;
            if (short && secs < 60) return "Just now";
            let list = [];
            let data = {
                M: Math.floor(secs / 2419200),
                w: Math.floor((secs / 604800) % 4),
                d: Math.floor((secs / 86400) % 7),
                h: Math.floor((secs / 3600) % 24),
                m: Math.floor((secs / 60) % 60),
            };
            if (!short) data.s = Math.floor(secs % 60);
            Object.keys(data).forEach((k) => {
                if (data[k]) list.push(data[k] + k);
            });
            if (suffix) list.push(suffix);
            return list.join(" ");
        },
    },
};
</script>
