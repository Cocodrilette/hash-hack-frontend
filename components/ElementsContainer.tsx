"use client";

interface Props {
  children: React.ReactNode;
}

export const ElementsContainer = ({ children }: Props) => {
  return <div className="flex flex-col gap-2 rounded-md">{children}</div>;
};
