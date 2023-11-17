import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3Auth } from "@web3auth/modal";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";
import Menu from "../components/Menu";
import ProfileContent from "../components/ProfileContent";

// Plugins
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";
// Adapters
import {
    getWalletConnectV2Settings,
    WalletConnectV2Adapter,
} from "@web3auth/wallet-connect-v2-adapter";

const clientId = "BEglQSgt4cUWcj6SKRdu5QkOXTsePmMcusG5EAoyjyOYKlVRjIF1iCNnMOTfpzCiunHRrMui8TIwQPXdkQ8Yxuk"; // get from https://dashboard.web3auth.io

const Profile = () => {

    const router = useRouter();

    const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
    const [account, setAccount] = useState("");

    const logout = async () => {
        if (!web3auth) {
            return;
        }
        await web3auth.logout();
        localStorage.clear();
        router.push('/');
    };

    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3Auth({
                    clientId,
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: "0x8AE",
                        displayName: "Kava",
                        tickerName: "Kava",
                        ticker: "KAVA",
                        decimals: 18,
                        rpcTarget: "https://evm.kava.io", // This is the public RPC we have added, please pass on your own endpoint while creating an app
                        blockExplorer: "https://kavascan.com",
                    },
                    // uiConfig refers to the whitelabeling options, which is available only on Growth Plan and above
                    // Please remove this parameter if you're on the Base Plan
                    uiConfig: {
                        appName: "W3A Heroes",
                        mode: "light",
                        // loginMethodsOrder: ["apple", "google", "twitter"],
                        logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
                        logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
                        defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
                        loginGridCol: 3,
                        primaryButton: "externalLogin", // "externalLogin" | "socialLogin" | "emailLogin"
                    },
                    web3AuthNetwork: "cyan",
                });

                // plugins and adapters are optional and can be added as per your requirement
                // read more about plugins here: https://web3auth.io/docs/sdk/web/plugins/

                // adding torus wallet connector plugin

                const torusPlugin = new TorusWalletConnectorPlugin({
                    torusWalletOpts: {},
                    walletInitOptions: {
                        whiteLabel: {
                            theme: { isDark: true, colors: { primary: "#00a8ff" } },
                            logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
                            logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
                        },
                        useWalletConnect: true,
                        enableLogging: true,
                    },
                });
                await web3auth.addPlugin(torusPlugin);

                // read more about adapters here: https://web3auth.io/docs/sdk/web/adapters/

                // adding wallet connect v2 adapter
                const defaultWcSettings = await getWalletConnectV2Settings(
                    "eip155",
                    [2222],
                    "04309ed1007e77d1f119b85205bb779d"
                );
                const walletConnectV2Adapter = new WalletConnectV2Adapter({
                    adapterSettings: { ...defaultWcSettings.adapterSettings },
                    loginSettings: { ...defaultWcSettings.loginSettings },
                });

                web3auth.configureAdapter(walletConnectV2Adapter);

                // adding metamask adapter

                const metamaskAdapter = new MetamaskAdapter({
                    clientId,
                    sessionTime: 3600, // 1 hour in seconds
                    web3AuthNetwork: "mainnet",
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: "0x8AE",
                        displayName: "Kava",
                        tickerName: "Kava",
                        ticker: "KAVA",
                        decimals: 18,
                        rpcTarget: "https://evm.kava.io", // This is the public RPC we have added, please pass on your own endpoint while creating an app
                        blockExplorer: "https://kavascan.com",
                    },
                });

                // it will add/update  the metamask adapter in to web3auth class
                web3auth.configureAdapter(metamaskAdapter);

                const torusWalletAdapter = new TorusWalletAdapter({
                    clientId,
                    sessionTime: 3600, // 1 hour in seconds
                    web3AuthNetwork: "mainnet",
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: "0x8AE",
                        displayName: "Kava",
                        tickerName: "Kava",
                        ticker: "KAVA",
                        decimals: 18,
                        rpcTarget: "https://evm.kava.io", // This is the public RPC we have added, please pass on your own endpoint while creating an app
                        blockExplorer: "https://kavascan.com",
                    },
                });

                // it will add/update  the torus-evm adapter in to web3auth class
                web3auth.configureAdapter(torusWalletAdapter);

                setWeb3auth(web3auth);
                try {
                    await web3auth.initModal();
                    await web3auth.connect();
                } catch (err) {
                    router.push('/');        
                }
            } catch (error) {
                console.error(error);
            }
        };

        const c_account = localStorage.getItem("account");
        if(c_account) {
            setAccount(c_account);
            init();
        } else {
            router.push('/');
        }
    }, [router]);
    return (
        <>
            <div className="profile-container">
                <Head>
                    <title>Profile - Sour Icy Donkey</title>
                    <meta property="og:title" content="Profile - Sour Icy Donkey" />
                </Head>
                <Menu logout={logout} account={account}></Menu>
                <ProfileContent account={account}></ProfileContent>
            </div>
            <style jsx>
                {`
          .profile-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
            </style>
        </>
    )
}

export default Profile;
