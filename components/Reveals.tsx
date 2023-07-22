"use client";

import { ElementsContainer } from "./ElementsContainer";
import { Reveal } from "./Reveal";
import { Title } from "./Title";

interface Props {
  reveals: any[];
  isLoading: boolean;
}

export const Reveals = ({ reveals, isLoading }: Props) => {
  return (
    <div className="basis-1/2">
      <Title>Reveals</Title>
      <ElementsContainer>
        {isLoading && <p>Fetching reveals...</p>}

        {reveals.length === 0 && !isLoading && <p>No reveals made yet.</p>}

        {reveals.length !== 0 &&
          !isLoading &&
          // @ts-ignore
          reveals.reveals.map((reveal, i) => {
            if (!reveal) return null;

            return <Reveal key={i.toString() + "APP"} reveal={reveal} />;
          })}
      </ElementsContainer>
    </div>
  );
};
