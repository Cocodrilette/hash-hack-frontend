"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-3 px-5 border-b-2">
      <Link className="font-extrabold text-3xl " href="/">
        <h1>Amapola</h1>
      </Link>{" "}
      <ConnectButton />
    </div>
  );
};
