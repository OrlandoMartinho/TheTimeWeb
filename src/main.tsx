import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { Vehicle } from "./routes/vehicle";
import { Home } from "./routes/home";
import { Login } from "./routes/login";
import { Monitoring } from "./routes/monitoring";
import { LocalHistory } from "./routes/localHistory";
import { BlockManagement } from "./routes/blockManagement";
import { Settings } from "./routes/settings";
import { ForgotPassWord } from "./routes/forgotPassword";
import { ConfirmCode } from "./routes/confirmCode";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassWord />,
  },
  {
    path: "confirm-code",
    element: <ConfirmCode />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", // Rota pai "home" (não precisa de /home, será automaticamente combinado com /home)
        element: <Home />,
      },
      {
        path: "vehicle", // Rota filha relativa a /home, o caminho final será /home/vehicle
        element: <Vehicle />,
      },
      {
        path: "monitoring", // Rota filha relativa a /home, o caminho final será /home/monitoring
        element: <Monitoring />,
      },
      {
        path: "local-history", // Rota filha relativa a /home, o caminho final será /home/local-history
        element: <LocalHistory />,
      },
      {
        path: "block-management", // Rota filha relativa a /home, o caminho final será /home/block-management
        element: <BlockManagement />,
      },
      {
        path: "settings", // Rota filha relativa a /home, o caminho final será /home/settings
        element: <Settings />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
