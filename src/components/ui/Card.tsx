import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl bg-bege shadow-sm ring-1 ring-verde-escuro/10 ${className}`}
    >
      {children}
    </div>
  );
}
