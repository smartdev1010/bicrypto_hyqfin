function splitorCoin(symbol, s) {
    if (!symbol) {
        return "-";
    }
    let s1 = symbol.replaceAll(" ", "").slice(2);
    s1 = s1
        .replace("BTC", "")
        .replace("USDT", "")
        .replace("ETH", "")
        .replace("BUSD", "")
        .replace("USDC", "")
        .replace("USDP", "")
        .replace("BNB", "");
    s1 = s1
        .replace("TRY", "")
        .replace("EUR", "")
        .replace("AUD", "")
        .replace("UAH", "")
        .replace("RUB", "")
        .replace("GBP", "")
        .replace("GYEN", "")
        .replace("USD", "");
    s1 = s1
        .replace("BIDR", "")
        .replace("BRL", "")
        .replace("BVND", "")
        .replace("VAI", "")
        .replace("NGN", "")
        .replace("BKRW", "")
        .replace("DAI", "");
    s1 = s1
        .replace("ZAR", "")
        .replace("IDRT", "")
        .replace("TRX", "")
        .replace("PAX", "")
        .replace("XRP", "");
    s1 = symbol.slice(0, 2) + s1;
    const s2 = symbol.replaceAll(s1, "");
    return [s1, s2][s];
}
export default splitorCoin;
