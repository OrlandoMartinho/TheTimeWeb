import { AlertDialogDescription, AlertDialogTitle } from "./ui/alert-dialog";
interface dialogContentProps {
  title: string;
  description: string;
}
export function DialogContent({ title, description }: dialogContentProps) {
  return (
    <>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>{description}</AlertDialogDescription>
    </>
  );
}
