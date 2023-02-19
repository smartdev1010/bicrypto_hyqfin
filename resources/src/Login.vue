<template>
    <w3m-core-button></w3m-core-button>
</template>

<script>
import {
    configureChains,
    createClient,
    watchAccount,
    createStorage,
    fetchSigner,
} from "@wagmi/core";
import {
    arbitrum,
    avalanche,
    bsc,
    fantom,
    mainnet,
    optimism,
    polygon,
} from "@wagmi/chains";
import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
const projectId = walletconnectid;
const chains = [arbitrum, avalanche, bsc, fantom, mainnet, optimism, polygon];

// 2. Configure wagmi client
const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId }),
]);
const wagmiClient = createClient({
    autoConnect: false,
    connectors: [...modalConnectors({ appName: "web3Modal", chains })],
    provider,
    storage: createStorage({ storage: window.localStorage }),
});

// 3. Create ethereum and modal clients
const ethereumClient = new EthereumClient(wagmiClient, chains);
new Web3Modal(
    {
        projectId,
    },
    ethereumClient
);

watchAccount((account) => {
    (async function () {
        if (account.address != null) {
            const message = await axios
                .get("/_web3/signature")
                .then((res) => res);
            const signer = await fetchSigner();
            const signature = await signer.signMessage(message);
            axios
                .post("/_web3/link", {
                    address: account.address,
                    signature: signature,
                })
                .then((response) => {
                    console.log(response.message);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {});
        }
    })();
});
export default {};
</script>
