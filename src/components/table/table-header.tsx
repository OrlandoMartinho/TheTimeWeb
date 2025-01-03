import { ComponentProps } from "react";

export function TableHeader(props: ComponentProps<"th">) {
  return <th className="py-3 px-4 text-sm text-white text-left" {...props} />;
}
