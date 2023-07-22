"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-3 px-5 border-b-2">
      <h1 className="text-2xl font-extrabold ">
        <Link href="/">Amapola</Link>
      </h1>{" "}
      <ConnectButton />
    </div>
  );
};
