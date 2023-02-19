import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chartData: null,
        ws: true,
        ws_chart: true,
        symbol: null,
        marketOrder: false,
        bestAsk: null,
        bestBid: null,
    },
    getters: {
        chartData(state) {
            return state.chartData;
        },
    },
    mutations: {
        UPDATE_CHART_DATA(state, val) {
            state.chartData = val;
        },
        OPEN_WS(state) {
            state.ws = true;
        },
        CLOSE_WS(state) {
            state.ws = false;
        },
        OPEN_WS_CHART(state) {
            state.ws_chart = true;
        },
        CLOSE_WS_CHART(state) {
            state.ws_chart = false;
        },
        OPEN_MARKET_ORDER(state) {
            state.marketOrder = true;
        },
        CLOSE_MARKET_ORDER(state) {
            state.marketOrder = false;
        },
    },
    actions: {
        updateChartData(context, data) {
            context.commit("UPDATE_CHART_DATA", data);
        },
    },
});
