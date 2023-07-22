"use client";

import { Commitment } from "./Commitment";
import { ElementsContainer } from "./ElementsContainer";
import { Title } from "./Title";

interface Props {
  commitments: any[];
  isLoading: boolean;
}

export const Commitments = ({ commitments, isLoading }: Props) => {
  return (
    <div className="basis-1/2">
      <Title>Commitments</Title>
      <ElementsContainer>
        {isLoading && <p>Fetching commitments...</p>}

        {commitments.length === 0 && !isLoading && (
          <p>No commitments made yet.</p>
        )}

        {commitments.length !== 0 &&
          !isLoading &&
          // @ts-ignore
          commitments.commitments.map((commitment, i) => (
            <Commitment
              key={`${commitment.hash}-${i.toString()}`}
              commitment={commitment}
            />
          ))}
      </ElementsContainer>
    </div>
  );
};
