import {
    getAccount,
    configureChains,
    createClient,
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

// 1. Define constants
const projectId = walletconnectid;
const chains = [arbitrum, avalanche, bsc, fantom, mainnet, optimism, polygon];

// 2. Configure wagmi client
const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId }),
]);
const wagmiClient = createClient({
    autoConnect: true,
    connectors: [...modalConnectors({ appName: "web3Modal", chains })],
    provider,
    storage: createStorage({ storage: window.localStorage }),
});

// 3. Create ethereum and modal clients
const ethereumClient = new EthereumClient(wagmiClient, chains);
export const web3Modal = new Web3Modal(
    {
        projectId,
    },
    ethereumClient
);

let btn = document.querySelector("button");
const connectButton = document.getElementById("connect-button");
let spinnerWeb3 = document.getElementById("spinnerWeb3");
connectButton.addEventListener("click", async () => {
    spinnerWeb3.classList.remove("hidden");
    btn.disabled = true;
    const account = getAccount();
    if (account.isConnected == true) {
        const message = await axios
            .get("/_web3/signature")
            .then((res) => res.data);
        const signer = await fetchSigner();
        const signature = await signer.signMessage(message);
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": csrf,
            },
            url: "/_web3/login",
            method: "POST",
            data: {
                address: account.address,
                signature: signature,
            },
            success: function (response) {
                if (response.success == true) {
                    notify(response.type, response.message);
                    window.location.href = "/app";
                } else {
                    notify(response.type, response.message);
                }
                spinnerWeb3.classList.add("hidden");
                btn.disabled = false;
            },
            error: function (error) {
                console.log(error);
                spinnerWeb3.classList.add("hidden");
                btn.disabled = false;
            },
        });
    } else {
        notify("error", "Connect your wallet firstly");
        spinnerWeb3.classList.add("hidden");
        btn.disabled = false;
    }
});
