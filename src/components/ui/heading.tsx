import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <header>
      <h1 className="text-2xl font-bold mb-5">{children}</h1>
    </header>
  );
}
