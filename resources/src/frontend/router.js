import { createRouter, createWebHistory } from "vue-router";

const Trading = () => import("./Trading.vue");
const routes = [
    {
        path: "/trade/:symbol/:currency",
        component: Trading,
        meta: { title: "Trading", type: "trading" },
    },
];
if (ext.eco == 1) {
    const EcoTrading = () => import("../extensions/eco/EcoTrading.vue");
    routes.push({
        path: "/trade/:symbol-:currency",
        component: EcoTrading,
        meta: { title: "Trading", type: "eco" },
    });
}
export default new createRouter({
    history: createWebHistory("app"),
    routes,
});
