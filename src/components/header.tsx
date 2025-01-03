import { BellRing, LogOut, Settings, User, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NotificationCard } from "./notificationCard";
export function Header() {
  const [modalProfile, setModalProfile] = useState<boolean>(false);
  const [modalNotificatione, setModalNotification] = useState<boolean>(false);

  return (
    <header className="flex flex-row justify-center md:justify-end items-start pt-16 w-full h-[10vh] px-12 relative">
      <motion.div
        className="flex items-center justify-center gap-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => setModalNotification(!modalNotificatione)}
          className="cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BellRing />
        </motion.button>
        {modalNotificatione && (
          <div className="bg-white flex flex-col w-96 h-[38rem] absolute shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-xl top-32 right-48 z-50 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-500 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full">
            <div className="sticky top-0 bg-white w-full p-4  flex justify-between">
              <div>
                <button
                  onClick={() => setModalNotification(false)}
                  className="ml-auto"
                >
                  <X size={16} className="text-red-500" />
                </button>
              </div>
              <div>
                <button>
                  <Settings size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-4">
              {Array.from({ length: 18 }).map((_, index) => (
                <NotificationCard
                  key={index}
                  state={true}
                  title="Notificações ficam aqui"
                  date="24/10/2024"
                  content="ksssssssssssdddddddddddsssxxxxxxxxxxxxxxxxxeeeeeeeeeeeeeeeeexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxssss"
                />
              ))}
            </div>
          </div>
        )}
        <motion.button
          onClick={() => setModalProfile(!modalProfile)}
          className="bg-blue-500 text-white rounded-full p-2 cursor-pointer"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <User className="w-7 h-7" />
          </motion.div>
        </motion.button>
        {modalProfile && (
          <div className="bg-white w-36 absolute shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-xl top-32 right-48 z-50">
            {/* Header com botão de fechar */}
            <div className="flex justify-end p-2">
              <button
                onClick={() => setModalProfile(false)}
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
                  <Link
                    to=""
                    className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <User size={18} className="text-gray-500" />
                    <span className="text-sm">Profile</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/login"
                    className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-md transition-colors text-red-500 hover:text-red-600"
                  >
                    <LogOut size={18} />
                    <span className="text-sm">Logout</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <motion.p
          className="cursor-pointer"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            color: "#3b82f6",
          }}
        >
          srsaimbro@gmail.com
        </motion.p>
      </motion.div>
    </header>
  );
}
