import { ethers } from 'ethers';
import { useEffect, useState } from "react";
import Head from 'next/head'
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3Auth } from "@web3auth/modal";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";

// Plugins
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";
// Adapters
import {
  getWalletConnectV2Settings,
  WalletConnectV2Adapter,
} from "@web3auth/wallet-connect-v2-adapter";
import Welcome from '../components/Welcome'
import ProgressBar from '../components/ProgressBar'
import CreateUP from '../components/CreateUp'
import MMSettings from "../components/MMSettings";
import DeployContracts from "../components/DeployContracts";
import TransferFunds from "../components/TransferFunds";
import BotInstance from '../components/BotInstance';
import Menu from '../components/Menu';


import { getWalletChallenge, userAuthenticate, getUserProfile, getInstanceId, getSafeInstance } from "../config/apis";

const clientId = "BEglQSgt4cUWcj6SKRdu5QkOXTsePmMcusG5EAoyjyOYKlVRjIF1iCNnMOTfpzCiunHRrMui8TIwQPXdkQ8Yxuk"; // get from https://dashboard.web3auth.io

function App() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  // const [torusPlugin, setTorusPlugin] = useState<TorusWalletConnectorPlugin | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState("");
  const [profileStatus, setProfileStatus] = useState(0);

  const login = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }

    try {
      const web3authProvider = await web3auth.connect();
      if (web3authProvider !== null) {
        const active_provider = new ethers.BrowserProvider(web3authProvider);
        const signer = await active_provider.getSigner();
        const active_account = await signer.getAddress();
        setAccount(active_account);
        localStorage.setItem("account", active_account);
        const res = await getWalletChallenge(active_account);
        if (res.result !== null) {
          const signature = await signMessage(res.result.challenge);
          if (signature) {
            const authenticate = await userAuthenticate(active_account, signature);
            if (authenticate.result) {
              localStorage.setItem('signature', signature);
              localStorage.setItem('expire_time', res.result.expire_date);
              const profileRes = await getUserProfile(active_account, signature);
              if (profileRes.result.profile) {
                localStorage.setItem("user_id", profileRes.result.profile._id);
                localStorage.setItem("email", profileRes.result.profile.email);
                localStorage.setItem("name", profileRes.result.profile.name);
                localStorage.setItem("telegram", profileRes.result.profile.telegram);
                const instance_id = await getInstanceId(active_account);
                if (instance_id) {
                  const instance = await getSafeInstance(active_account, instance_id, signature);
                  localStorage.setItem("instance_id", instance_id);
                  localStorage.setItem("dex", instance?.result?.dex);
                  localStorage.setItem("pair", instance?.result?.pair);
                  localStorage.setItem("gnosis_addr", instance?.result?.safe_address);
                  localStorage.setItem("strategy", instance?.result?.strategy);
                  localStorage.setItem("setting1", instance?.result?.setting_1);
                  localStorage.setItem("setting2", instance?.result?.setting_2);
                  localStorage.setItem("setting3", instance?.result?.setting_3);
                  localStorage.setItem("setting4", instance?.result?.setting_4);
                  localStorage.setItem("setting5", instance?.result?.setting_5);
                  if (instance?.result?.trade_module === "") {
                    setProfileStatus(2);
                  } else {
                    localStorage.setItem("gnosis_module", instance?.result?.trade_module);
                    localStorage.setItem("allowed", "1");
                    setProfileStatus(4);
                  }
                } else {
                  localStorage.removeItem("instance_id");
                  localStorage.removeItem("gnosis_addr");
                  localStorage.removeItem("gnosis_module");
                  localStorage.removeItem("allowed");
                  setProfileStatus(1);
                }
              } else {
                localStorage.removeItem("user_id");
                localStorage.removeItem("name");
                localStorage.removeItem("email");
                localStorage.removeItem("telegram");
                localStorage.removeItem("instance_id");
                localStorage.removeItem("gnosis_addr");
                localStorage.removeItem("gnosis_module");
                localStorage.removeItem("allowed");
                setProfileStatus(0);
              }
              setLoggedIn(true);
            } else {
              logout();
            }
          }
        } else {
          localStorage.removeItem('signature');
          localStorage.removeItem('expire_time');
          setLoggedIn(false);
        }
      }
    } catch (error) {
      setLoggedIn(false);
      console.error(error);
    }
  };

  const logout = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setLoggedIn(false);
    setProfileStatus(0);
    localStorage.clear();
  };

  const signMessage = async (message: string) => {
    if (!web3auth) {
      uiConsole("provider not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    if (web3authProvider) {
      const cProvider = new ethers.BrowserProvider(web3authProvider);
      const signer = await cProvider.getSigner();
      // const active_account = await signer.getAddress();
      const signedMessage = await signer.signMessage(message);
      return signedMessage;
    } else {
      return;
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function uiConsole(...args: any[]): void {
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
  }

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
        // setTorusPlugin(torusPlugin);
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
        await web3auth.initModal();
        const c_expire_time = localStorage.getItem("expire_time");
        const c_time = new Date();
        const c_timestamp = c_time.getTime();
        if (Number(c_timestamp) < Number(c_expire_time) * 1000) {
          const web3authProvider = await web3auth.connect();
          if (web3authProvider) {
            const provider = new ethers.BrowserProvider(web3authProvider);
            const signer = await provider.getSigner();
            const c_account = await signer.getAddress();
            const o_account = localStorage.getItem("account");
            if (o_account && c_account.toLowerCase() === o_account?.toLowerCase()) {
              setLoggedIn(true);
              setAccount(o_account);
              const user_id = localStorage.getItem("user_id");
              if (user_id) {
                const dex = localStorage.getItem("dex");
                if (dex) {
                  const instance_id = localStorage.getItem("instance_id");
                  const gnosis_module = localStorage.getItem("gnosis_module");
                  const allowed = localStorage.getItem("allowed");
                  if (instance_id && gnosis_module && allowed) {
                    setProfileStatus(4);
                  } else {
                    setProfileStatus(2);
                  }
                } else {
                  setProfileStatus(1);
                }
              } else {
                setProfileStatus(0);
              }
            } else {
              localStorage.clear();
              setLoggedIn(false);
              setProfileStatus(0);
            }
          }
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  return (
    <>
      <div className="login-container">
        <Head>
          <title>Sour Icy Donkey</title>
          <meta property="og:title" content="Sour Icy Donkey" />
        </Head>
        {!loggedIn &&
          <div className="login-container1">
            <div className="login-container2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1695632053082-8ee57597f6ad?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8YWxsfDY4fHx8fHx8Mnx8MTY5NjE2MjM5M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=800"
                className="login-image"
              />
            </div>
            <div className="login-container3">
              <button onClick={login} className="card" style={{ width: 200 }}>
                Web3 Login
              </button>
              <div className="web3-login-container1">
                <input type="radio" name="radio" className="web3-login-radiobutton" />
                <span className="web3-login-text3">By Siging in you are agreeing to our Terms and Conditons.</span>
              </div>
            </div>
          </div>
        }
        {loggedIn &&
          <div className="onboarding14-container">
            {profileStatus !== 4 &&
              <Welcome rootClassName="welcome-root-class-name"></Welcome>
            }
            {profileStatus !== 4 &&
              <ProgressBar rootClassName="progress-bar-root-class-name" flag={profileStatus}></ProgressBar>
            }
            {profileStatus === 4 &&
              <Menu account={account} logout={logout}></Menu>
            }
            {profileStatus === 0 &&
              <CreateUP rootClassName="create-up-root-class-name" account={account} setProfileStatus={setProfileStatus}></CreateUP>
            }
            {profileStatus === 1 &&
              <MMSettings rootClassName="mmsettings-root-class-name" account={account} setProfileStatus={setProfileStatus}></MMSettings>
            }
            {profileStatus === 2 &&
              <DeployContracts rootClassName="deploy-contracts-root-class-name" account={account} setProfileStatus={setProfileStatus} web3auth={web3auth} ></DeployContracts>
            }
            {profileStatus === 3 &&
              <TransferFunds account={account} setProfileStatus={setProfileStatus} web3auth={web3auth} ></TransferFunds>
            }
            {profileStatus === 4 &&
              <BotInstance account={account} web3auth={web3auth} ></BotInstance>
            }
          </div>
        }
      </div>
    </>
  );
}

export default App;
