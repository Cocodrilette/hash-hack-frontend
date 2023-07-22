"use client";

interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props) => {
  return <h2 className="font-bold text-3xl mb-5">{children}</h2>;
};
