import logo from "../assets/img/logo.png";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Car,
  BarChart2,
  Clock,
  FileText,
  Settings,
  LogOut,
  X,
  Menu,
} from "lucide-react";
const menuItems = [
  { id: "home", icon: <Home />, label: "Home", route: "" },
  { id: "vehicle", icon: <Car />, label: "Vehicle", route: "vehicle" },
  {
    id: "monitoring",
    icon: <BarChart2 />,
    label: "Monitoring",
    route: "monitoring",
  },
  {
    id: "history",
    icon: <Clock />,
    label: "Local history",
    route: "local-history",
  },
  {
    id: "block",
    icon: <FileText />,
    label: "Block management",
    route: "block-management",
  },
  {
    id: "settings",
    icon: <Settings />,
    label: "Settings",
    route: "settings",
  },
];
export function SideBar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    // recuperar o estado do localStorage ou usa a rota atual

    const savedItem = localStorage.getItem("activeMenuItem");
    const currentPath = location.pathname.slice(1) || "";
    return savedItem || currentPath;
  });

  // Atualiza o activeItem baseado na rota atual
  useEffect(() => {
    const currentPath = location.pathname.slice(1) || "";
    const menuItem = menuItems.find((item) => item.route === currentPath);
    if (menuItem) {
      setActiveItem(menuItem.id);
      localStorage.setItem("activeMenuItem", menuItem.id);
    }
  }, [location.pathname]);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    setToggleMenu(false);
    localStorage.setItem("activeMenuItem", itemId);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 p-2 rounded-lg bg-white shadow-md lg:hidden z-50"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {toggleMenu ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed lg:static h-screen bg-white transition-all duration-300 shadow-lg lg:shadow-none
        ${toggleMenu ? "left-0" : "-left-full"} 
        lg:left-0 w-64 lg:w-96 px-6 py-14 gap-12 flex flex-col z-40`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 px-4">
          <img src={logo} alt="logo da vehicle control" className="w-8 h-8" />
          <p className="font-bold text-xl">ExpControlApp.</p>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-12">
          <ul className="flex flex-col gap-7">
            {menuItems.map((item) => (
              <Link
                to={`/${item.route}`}
                key={item.id}
                className={`rounded-xl p-4 duration-200 cursor-pointer
                ${
                  activeItem === item.id ? "bg-blue-500" : "hover:bg-gray-100"
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <div
                  className={`flex items-center gap-6 font-medium 
                  ${activeItem === item.id ? "text-white" : "text-gray-700"}`}
                >
                  {item.icon}
                  <span className="lg:block">{item.label}</span>
                </div>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Logout Section */}
        <div className="mt-auto p-4">
          <Link
            to="/login"
            className="flex items-center gap-6 font-medium text-gray-700 hover:text-gray-900"
          >
            <LogOut />
            <span className="lg:block">Logout</span>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile */}
      {toggleMenu && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden z-30"
          onClick={() => setToggleMenu(false)}
        />
      )}
    </>
  );
}
