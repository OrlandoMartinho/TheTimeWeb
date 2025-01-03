import { FileText, Edit, Trash2, X } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
interface CardProps {
  carIcon: React.ReactNode;
  settingsIcon: React.ReactNode;
  title: string;
  description: string;
  state: boolean;
  iconState: React.ReactNode;
}
export function CardVehicleInformation({
  carIcon,
  settingsIcon,
  title,
  description,
  state,
  iconState,
}: CardProps) {
  const [viewOptions, setViewOptions] = useState<boolean>(false);
  return (
    <div className="m-6 shadow-[0_3px_8px_rgba(0,0,0,0.24)] bg-white rounded-xl w-48 h-44 p-2 relative">
      <div className="flex items-start justify-between my-2">
        <div className="bg-blue-500 text-white rounded-full p-1">{carIcon}</div>
        <button onClick={() => setViewOptions(!viewOptions)}>
          {settingsIcon}
        </button>
      </div>
      <div className="my-1">
        <h1>{title}</h1>
        <p className="text-gray-600">{description}</p>
        <p className={`${state ? "text-green-500" : "text-red-500"} my-1`}>
          {state ? "Active" : "Inactive"}
        </p>
      </div>
      <div
        className={`flex flex-row items-end justify-end ${
          state ? "text-green-500" : "text-red-500"
        }`}
      >
        {iconState}
      </div>
      {viewOptions && (
        <div className="bg-white w-24 absolute shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-xl top-8 right-1 z-50">
          {/* Header com botão de fechar */}
          <div className="flex justify-end p-1">
            <button
              onClick={() => setViewOptions(false)}
              className="text-red-500 hover:text-red-600 transition-colors"
              aria-label="Fechar menu de perfil"
            >
              <X size={16} />
            </button>
          </div>

          {/* Lista de opções */}
          <nav className="p-2">
            <ul className="space-y-2">
              <li>
                <button className="flex items-center gap-3 py-1 hover:bg-gray-50 rounded-md transition-colors">
                  <Edit size={12} className="text-green-500" />
                  <span className="text-sm">editar</span>
                </button>
              </li>

              <li>
                <button className="flex items-center gap-3 py-1 hover:bg-gray-50 rounded-md transition-colors text-sm">
                  <Trash2 size={12} className="text-red-500" />
                  <span className="text-sm">deletar</span>
                </button>
              </li>
              <li>
                <AlertDialog>
                  <button className="flex items-center gap-3 py-1 hover:bg-gray-50 rounded-md transition-colors text-sm">
                    <FileText size={12} />
                    <AlertDialogTrigger className="text-sm">
                      visualizar
                    </AlertDialogTrigger>
                  </button>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="text-center">
                      <AlertDialogAction>Close</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
