import { createRouter, createWebHistory } from "vue-router";

const Dashboard = () => import("../main/Dashboard.vue");
const Trading = () => import("../main/Trading.vue");
const Swap = () => import("../extensions/Swap.vue");
const Investments = () => import("../main/Investments.vue");
const Wallets = () => import("../main/Wallets.vue");
const WalletDetail = () => import("../main/wallets/WalletDetail.vue");
const MainWalletDetail = () => import("../main/wallets/MainWalletDetail.vue");
const DepositHistory = () => import("../main/logs/Deposit.vue");
const WithdrawHistory = () => import("../main/logs/Withdraw.vue");
const TransactionsHistory = () => import("../main/logs/Transactions.vue");
const SupportPage = () => import("../main/support/Support.vue");
const ChatPage = () => import("../main/support/ChatPage.vue");
const Api = () => import("../main/Api.vue");
const routes = [
    { path: "/", component: Dashboard, meta: { title: "Dashboard" } },
    { path: "/public/app", redirect: "/" },
    { path: "/user", redirect: "/" },
    { path: "/dashboard", component: Dashboard, meta: { title: "Dashboard" } },
    {
        path: "/trade/:symbol/:currency",
        component: Trading,
        meta: { title: "Trading", type: "trading" },
    },
    { path: "/swap", component: Swap, meta: { title: "Swap Dashboard" } },
    {
        path: "/investment",
        component: Investments,
        meta: { title: "Investments" },
    },
    {
        path: "/wallets",
        component: Wallets,
        meta: { title: "My Wallets", type: "wallets" },
        children: [
            {
                path: ":type(trading|funding)/:symbol/:address",
                component: WalletDetail,
                meta: { title: "Wallet Details", type: "wallets" },
            },
            {
                path: ":type(main)/:symbol/:address",
                component: MainWalletDetail,
                meta: {
                    title: "Wallet Details",
                    type: "wallets",
                    subtype: "main",
                },
            },
        ],
    },
    {
        path: "/deposit/history",
        component: DepositHistory,
        meta: { title: "Deposit History" },
    },
    {
        path: "/withdraw/history",
        component: WithdrawHistory,
        meta: { title: "Withdraw History" },
    },
    {
        path: "/transaction/history",
        component: TransactionsHistory,
        meta: { title: "Transactions History" },
    },
    {
        path: "/api-management",
        component: Api,
        meta: { title: "API Management" },
    },
    {
        path: "/support",
        component: SupportPage,
        meta: { title: "Support" },
    },
    {
        path: "/support/ticket/:id",
        component: ChatPage,
        meta: { title: "Support Ticket" },
    },
];
if (plat.trading.binary_status == 1) {
    const Binary = () => import("../main/binary/Binary.vue");
    const BinaryTrading = () => import("../main/binary/BinaryTrading.vue");
    const PracticeContracts = () => import("../main/binary/logs/Practice.vue");
    const TradeContracts = () => import("../main/binary/logs/Trade.vue");
    const ContractPreview = () => import("../main/binary/logs/Preview.vue");
    routes.push({
        path: "/binary",
        component: Binary,
        meta: { title: "Binary Dashboard" },
    });
    routes.push({
        path: "/binary/:type/:symbol/:currency",
        component: BinaryTrading,
        meta: { title: "Binary Trading" },
    });
    routes.push({
        path: "/binary/practice/contracts",
        component: PracticeContracts,
        meta: { title: "Binary Practice Logs" },
    });
    routes.push({
        path: "/binary/trade/contracts",
        component: TradeContracts,
        meta: { title: "Binary Trading Logs" },
    });
    routes.push({
        path: "/binary/contract/view/:type/:id",
        component: ContractPreview,
        meta: { title: "Binary Contract Preview" },
    });
}
if (ext.botTrader == 1) {
    const Bots = () => import("../extensions/bot/Bots.vue");
    const BotTradePage = () => import("../extensions/bot/BotTradePage.vue");
    const Membership = () => import("../extensions/membership.vue");
    routes.push({
        path: "/bot",
        component: Bots,
        meta: { title: "Bots Dashboard" },
    });
    routes.push({
        path: "/bot/:symbol/:currency",
        component: BotTradePage,
        meta: { title: "Bot Trader" },
    });
    routes.push({
        path: "/membership",
        component: Membership,
        meta: { title: "Membership Dashboard" },
    });
}
if (ext.ico == 1) {
    const ICO = () => import("../extensions/ico/ICO.vue");
    const ICODetails = () => import("../extensions/ico/ICODetails.vue");
    routes.push({
        path: "/ico",
        component: ICO,
        meta: { title: "Token Offers" },
    });
    routes.push({
        path: "/ico/:symbol",
        component: ICODetails,
        meta: { title: "Offer Details" },
    });
}
if (ext.mlm == 1) {
    const Referral = () => import("../extensions/mlm/Referral.vue");
    routes.push({
        path: "/referral",
        component: Referral,
        meta: { title: "My Referrals" },
    });
    const Report = () => import("../extensions/mlm/Report.vue");
    routes.push({
        path: "/referral/levelReport",
        component: Report,
        meta: { title: "Level Report" },
    });
}
if (ext.forex == 1) {
    const Forex = () => import("../extensions/Forex/Forex.vue");
    const ForexTrading = () => import("../extensions/Forex/Trading.vue");
    routes.push({
        path: "/forex",
        component: Forex,
        meta: { title: "Forex Dashboard" },
    });
    routes.push({
        path: "/forex/trade",
        component: ForexTrading,
        meta: { title: "Forex Trading" },
    });
}
if (ext.staking == 1) {
    const Staking = () => import("../extensions/staking/Staking.vue");
    const StakingLogs = () => import("../extensions/staking/StakingLogs.vue");
    routes.push({
        path: "/staking",
        component: Staking,
        meta: { title: "Staking Dashboard" },
    });
    routes.push({
        path: "/staking/logs",
        component: StakingLogs,
        meta: { title: "Staking Logs" },
    });
}
if (ext.builder == 1) {
    const PageBuilder = () => import("../extensions/builder/PageBuilder.vue");
    routes.push({
        path: "/page/:slug",
        component: PageBuilder,
    });
}
if (ext.eco == 1) {
    const EcoTrading = () => import("../extensions/eco/EcoTrading.vue");
    routes.push({
        path: "/trade/:symbol-:currency",
        component: EcoTrading,
        meta: { title: "Trading", type: "eco" },
    });
}
if (ext.p2p == 1) {
    const P2P = () => import("../extensions/p2p/p2p.vue");
    routes.push({
        path: "/p2p",
        component: P2P,
        meta: { title: "Peer To Peer Dashboard" },
    });
    const P2PChat = () => import("../extensions/p2p/p2pchat.vue");
    routes.push({
        path: "/p2p/order/:trx",
        component: P2PChat,
        meta: { title: "P2P Order" },
    });
    const P2POrders = () => import("../extensions/p2p/p2porders.vue");
    routes.push({
        path: "/p2p/orders",
        component: P2POrders,
        meta: { title: "P2P Orders" },
    });
    const P2PMerchent = () => import("../extensions/p2p/p2pmerchent.vue");
    routes.push({
        path: "/p2p/merchent",
        component: P2PMerchent,
        meta: { title: "P2P Merchent" },
    });
}
if (ext.knowledge == 1) {
    const KnowledgeBase = () => import("../extensions/knowledge/Index.vue");
    routes.push({
        path: "/knowledge",
        component: KnowledgeBase,
        meta: { title: "Knowledge Base" },
    });
    const Categories = () => import("../extensions/knowledge/Categories.vue");
    routes.push({
        path: "/knowledge/categories/:slug/:id",
        component: Categories,
        meta: { title: "Categories" },
    });
    const Tags = () => import("../extensions/knowledge/Tags.vue");
    routes.push({
        path: "/knowledge/tags/:slug/:id",
        component: Tags,
        meta: { title: "Tags" },
    });
    const Article = () => import("../extensions/knowledge/Article.vue");
    routes.push({
        path: "/knowledge/articles/:slug/:id",
        component: Article,
        meta: { title: "Article" },
    });
    const Faq = () => import("../extensions/knowledge/Faq.vue");
    routes.push({
        path: "/knowledge/faq",
        component: Faq,
        meta: { title: "Faq" },
    });
    const FaqSearch = () => import("../extensions/knowledge/FaqSearch.vue");
    routes.push({
        path: "/knowledge/faq/:search",
        component: FaqSearch,
        meta: { title: "Search Faq" },
    });
}
if (ext.ecommerce == 1) {
    const Marketplace = () => import("../extensions/ecommerce/Layout.vue");
    const MarketplaceIndex = () => import("../extensions/ecommerce/Index.vue");
    const Wishlist = () => import("../extensions/ecommerce/Wishlist.vue");
    routes.push({
        path: "/marketplace",
        component: Marketplace,
        meta: { title: "Marketplace" },
        children: [
            {
                path: "index",
                component: MarketplaceIndex,
                meta: { title: "Marketplace" },
            },
            {
                path: "wishlist",
                component: Wishlist,
                meta: { title: "Wishlist" },
            },
        ],
    });
}

export default new createRouter({
    history: createWebHistory("app"),
    routes,
});
