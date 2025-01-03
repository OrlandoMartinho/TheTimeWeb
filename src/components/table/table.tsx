import { ComponentProps } from "react";

export function Table(props: ComponentProps<"table">) {
  return (
    <div className="w-full mt-6 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-500 overflow-x-auto lg:overflow-x-hidden overflow-y-auto h-5/6 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full">
      <table className="w-full" {...props} />
    </div>
  );
}
