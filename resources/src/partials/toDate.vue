<template>
    <span class="mr-1">{{ date }}</span>
</template>

<script>
// component
export default {
    props: ["time", "full"],
    computed: {
        date() {
            let { month, day, year, hour, minute, second, ampm } =
                this.dateData();
            let out = [month + "/" + day + "/" + year];
            if (this.full) out.push(hour + ":" + minute + ":" + second, ampm);
            return out.join(" ");
        },
    },
    methods: {
        dateData() {
            let _p = (n) => (n < 10 ? "0" + n : "" + n);
            let date = new Date(this.time);
            let month = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ][date.getMonth()];
            let year = date.getFullYear();
            let day = _p(date.getDate());
            let minute = _p(date.getMinutes());
            let second = _p(date.getSeconds());
            let fullh = date.getHours();
            let ampm = fullh > 12 ? "PM" : "AM";
            let hour = fullh > 12 ? fullh - 12 : fullh;
            hour = _p(hour === 0 ? 12 : hour);
            return { month, day, year, hour, minute, second, ampm };
        },
    },
};
</script>
