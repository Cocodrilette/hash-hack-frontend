"use client";

export const ListeningAlert = () => {
  return (
    <div className="flex gap-2 bg-gray-100 border-2 border-[#1753C0] rounded-md py-1 px-4 max-w-[120px] mb-5">
      <p>Listening</p>{" "}
      <span className="animate-pulse h-2 w-2 bg-green-500 m-auto rounded-full" />
    </div>
  );
};
