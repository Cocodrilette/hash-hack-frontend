"use client";

import useSWR from "swr";
import Head from "next/head";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useContractEvent } from "wagmi";

import { ListeningAlert } from "../../components/ListeningAlert";
import { contractConstants } from "../../constants/contract";
import { Commitments } from "../../components/Commitments";
import { Resumen } from "../../components/Resumen";
import { Reveals } from "../../components/Reveals";
import { Header } from "../../components/Header";
import { config } from "../../constants/config";
import { Clock } from "../../components/Clock";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const commitmentsQuery = useSWR(config.apiUrl + "/commitments");
  const revealsQuery = useSWR(config.apiUrl + "/reveals");
  const [commitments, setCommitments] = useState<any[]>([]);
  const [reveals, setReveal] = useState<any[]>([]);
  const { address } = useAccount();

  useEffect(() => {
    if (!address) {
      router.push("/");
    }
  }, [address]);

  useEffect(() => {
    if (commitmentsQuery.data) {
      setCommitments(commitmentsQuery.data);
    }
  }, [commitmentsQuery.data]);

  useEffect(() => {
    if (revealsQuery.data) {
      setReveal(revealsQuery.data);
    }
  }, [revealsQuery.data]);

  /**
   * * MakeCommit event listener
   */
  useContractEvent({
    address: contractConstants.address as `0x{string}`,
    abi: contractConstants.abi,
    eventName: "MakeCommit",
    listener(_: any) {
      commitmentsQuery.mutate();
    },
  });

  /**
   * * MakeReveal event listener
   */
  useContractEvent({
    address: contractConstants.address as `0x{string}`,
    abi: contractConstants.abi,
    eventName: "MakeReveal",
    listener(_: any) {
      revealsQuery.mutate();
    },
  });

  return (
    <div className="justify-center bg-zinc-100 min-h-screen">
      <Head>
        <title>Amapola | Dashboard</title>
        <meta content="Amapola" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />

      <main className="p-5">
        <div>
          <ListeningAlert />
          {/* <Clock /> */}
        </div>
        <Resumen
          // @ts-ignore
          totalCommitments={commitments}
          loadingCommitments={commitmentsQuery.isLoading}
          // @ts-ignore
          totalReveals={reveals}
          loadingReveals={revealsQuery.isLoading}
        />
        <div className="flex flex-row gap-5">
          <Commitments
            commitments={commitments}
            isLoading={commitmentsQuery.isLoading}
          />
          <Reveals reveals={reveals} isLoading={revealsQuery.isLoading} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
