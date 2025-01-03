import { ReactNode } from "react";

import CountUp from "react-countup";

interface homeCardProps {
  icon: ReactNode;
  title: string;
  total: number;
  className: string;
}
export function HomeCard({ icon, title, total, className }: homeCardProps) {
  return (
    <div>
      <div className="flex gap-4 items-center mt-2">
        <div
          className={`rounded-full p-2 border-2 border-blue-500 ${className}`}
        >
          {icon}
        </div>
        <h1>{title}</h1>
      </div>
      <p className="xl:text-center text-end font-semibold text-xl pl-12">
        <CountUp start={0} duration={5} end={total} />
      </p>
    </div>
  );
}
