import { ComponentProps } from "react";

export function TableCell(props: ComponentProps<"td">) {
  return <td {...props} className="py-3 px-4 text-sm text-gray-700" />;
}
