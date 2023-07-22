"use client";

import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

export const Resumen = ({
  totalCommitments,
  loadingCommitments,
  totalReveals,
  loadingReveals,
}: {
  totalCommitments: any;
  loadingCommitments: boolean;
  totalReveals: any;
  loadingReveals: boolean;
}) => {
  const [numberOfCommitments, setNumberOfCommitments] = useState(0);
  const [numberOfReveals, setNumberOfReveals] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loadingCommitments) {
      setLoading(false);
      if (totalCommitments.commitments) {
        const _totalCommitments = totalCommitments.commitments.filter(
          (commitment: any) => commitment !== null
        );

        setNumberOfCommitments(_totalCommitments.length);
      }
    } else {
      setLoading(true);
    }
  }, [loadingCommitments, totalCommitments]);

  useEffect(() => {
    if (!loadingReveals) {
      setLoading(false);
      if (totalReveals.reveals) {
        const _totalReveals = totalReveals.reveals.filter(
          (reveal: any) => reveal !== null
        );
        setNumberOfReveals(_totalReveals.length);
      }
    } else {
      setLoading(true);
    }
  }, [loadingReveals, totalReveals]);

  const Card = ({
    title,
    number,
    isLoading,
  }: {
    title: string;
    number: number;
    isLoading: boolean;
  }) => {
    return (
      <div className="flex flex-col bg-gray-100 p-5 rounded-xl justify-between items-center border-2">
        {isLoading ? (
          <CgSpinner className="animate-spin h-5 w-5" />
        ) : (
          <>
            <p className="text-center text-sm text-gray-400 font-bold mx-auto mb-2">
              - {title} -
            </p>{" "}
            <p className="text-7xl m-auto text-gray-700 font-mono">{number}</p>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex gap-5 mb-5">
      <Card
        title="COMMITMENTS"
        // @ts-ignore
        number={numberOfCommitments}
        isLoading={loading}
      />
      <Card
        title="REVEALS"
        // @ts-ignore
        number={numberOfReveals}
        isLoading={loading}
      />
    </div>
  );
};
