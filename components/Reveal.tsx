"use client";

import { Direction, RevealType } from "../types";
import { CodeBlock, atomOneDark } from "react-code-blocks";

interface Props {
  reveal: RevealType;
}

export const Reveal = ({ reveal }: Props) => {
  console.log(reveal);

  return (
    <CodeBlock
      text={`
{
    "tickerSymbol": "${reveal.tickerSymbol}",
    "accountType": "${reveal.accountType}",
    "direction": "${reveal.direction === Direction.LONG ? "LONG" : "SHORT"}",
    "price": ${reveal.price},
    "expiration": "${new Date(reveal.timeInForce).toLocaleDateString()}",
    "orderType": "${reveal.orderType}"
}
  `}
      showLineNumbers={false}
      startingLineNumber={0}
      theme={{ ...atomOneDark, mode: "dark" }}
      wrapLongLines={true}
      language="json"
    />
  );
};
