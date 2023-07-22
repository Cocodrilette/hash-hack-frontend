"use client";

import { CommitmentType } from "../types";
import { CodeBlock, atomOneDark } from "react-code-blocks";

interface Props {
  commitment: CommitmentType;
}

function formatString(str: string) {
  if (str.length <= 20) {
    return str;
  }

  const start = str.substring(0, 25);
  const end = str.substring(str.length - 25);

  return start + "..." + end;
}

export const Commitment = ({ commitment }: Props) => {
  return (
    <CodeBlock
      text={`
{
    "hash": "${formatString(commitment.hash)}",
    "revealed": ${commitment.revealed},
    "blockNumber": ${commitment.blockNumber}
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

// <div className="bg-gray-200 rounded-md">
//   <p>
//     <span className="font-bold">Hash:</span> {formatString(commitment.hash)}
//   </p>
//   <p>
//     <span className="font-bold">Block Number:</span>{" "}
//     {commitment.blockNumber}
//   </p>
// </div>
