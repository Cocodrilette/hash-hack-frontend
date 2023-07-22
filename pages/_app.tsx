import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { coreWallet } from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { avalancheFuji } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { SWRConfig } from "swr";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    avalancheFuji,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [avalancheFuji]
      : []),
  ],
  [publicProvider()]
);

const projectId = "c1b0b0c0-0c0b-0b0c-0b0c-0b0c0b0c0b0c";

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [coreWallet({ projectId, chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <SWRConfig
          value={{
            fetcher: (url: string) => fetch(url).then((r) => r.json()),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
