import { ComponentProps } from "react";

export function TableRow(props: ComponentProps<"tr">) {
  return <tr className="hover:bg-zinc-700/5 cursor-pointer" {...props} />;
}
