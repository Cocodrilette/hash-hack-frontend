"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useAccount, useContractRead } from "wagmi";

import { contractConstants } from "../constants/contract";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { config } from "../constants/config";

const Home: NextPage = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const { address } = useAccount();
  const isAuthorizedQuery = useContractRead({
    address: contractConstants.address as `0x${string}`,
    abi: contractConstants.abi,
    functionName: "authorizedInspectors",
    args: [address],
    enabled: false,
  });

  useEffect(() => {
    if (address) {
      isAuthorizedQuery.refetch();

      if (isAuthorizedQuery.data) {
        setIsAuthorized(isAuthorizedQuery.data as boolean);
      }
    }
  }, [address, isAuthorizedQuery.data]);

  useEffect(() => {
    if (isAuthorized) {
      router.push("/dashboard");
    }
  }, [isAuthorized]);

  return (
    <div className="justify-center bg-zinc-950 min-h-screen">
      <Head>
        <title>Amapola | Home</title>
        <meta content="Amapola" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Header />

      <main className="flex flex-col justify-center items-center min-h-screen p-5">
        <div className="flex flex-col justify-top items-center mb-10 max-w-xl mt-[-100px]">
          <h1 className="text-7xl font-bold mb-5 text-white">Amapola</h1>
          <p className="text-center text-slate-300">
            If you are an authorized inspector, please connect your wallet to
            view your commitments and reveals.
          </p>
        </div>

        <ConnectButton />

        {!isAuthorized && address && (
          <div className="flex flex-col justify-center items-center mt-10 max-w-xl p-5 bg-amber-100 rounded-md">
            <p className="text-center">
              Sorry. You are not authorized to access to our protocol
              visualization.{" "}
              <span className="font-bold">
                But don't worry, you can contact us to get access to our
                service.
              </span>
            </p>
          </div>
        )}
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
