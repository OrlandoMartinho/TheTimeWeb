import { Outlet } from "react-router-dom";
import { SideBar } from "./components/sideBar";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex- w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
