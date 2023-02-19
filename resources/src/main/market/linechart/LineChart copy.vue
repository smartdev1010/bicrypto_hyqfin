<template>
    <PolyLine :items="list" />
    <Circle :items="list" />
</template>

<script>
import { computed, ref } from "vue";
import PolyLine from "./PolyLine.vue";
import Circle from "./Circle.vue";
export default {
    components: {
        PolyLine,
        Circle,
    },
    props: ["width", "height", "values"],
    setup(props) {
        function points(width, height, values) {
            width = parseFloat(width) || 0;
            height = parseFloat(height) || 0;
            values = Array.isArray(values) ? values : [];
            values = values.map((n) => parseFloat(n) || 0);

            let min = values.reduce(
                (min, val) => (val < min ? val : min),
                values[0]
            );
            let max = values.reduce(
                (max, val) => (val > max ? val : max),
                values[0]
            );
            let len = values.length;
            let half = height / 2;
            let range = max > min ? max - min : height;
            let gap = len > 1 ? width / (len - 1) : 1;
            let out = [];

            for (let i = 0; i < len; ++i) {
                let d = values[i];
                let val = 2 * ((d - min) / range - 0.5);
                let x = i * gap;
                let y = -val * half * 0.8 + half;
                out.push({ x, y });
            }
            return out;
        }
        const items = [];
        const list = computed({
            get: () => points(props.width, props.height, props.values),
            set: (value) => {
                list.value = value;
            },
        });
        console.log(list);
        console.log(items);
        return {
            list,
        };
    },
};
</script>
