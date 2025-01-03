import { motion } from "framer-motion";
import { useState } from "react";
export function Settings() {
  const [settingsType, setSettingsType] = useState<string>("primary");
  return (
    <div className="w-full px-4 md:px-12 mt-8 h-[90vh]">
      <motion.h1
        className="text-3xl font-medium text-gray-700 mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Settings
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="flex items-center gap-8 my-6">
          <motion.h1
            onClick={() => setSettingsType("primary")}
            className={`text-3xl font-medium text-gray-700 cursor-pointer
              ${settingsType == "primary" ? "border-b-4 border-blue-500" : ""}`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            General
          </motion.h1>

          <motion.h1
            onClick={() => setSettingsType("secondary")}
            className={`text-3xl font-medium text-gray-700 cursor-pointer
              ${
                settingsType == "secondary" ? "border-b-4 border-blue-500" : ""
              }`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Credences
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-2xl font-medium text-gray-700"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Basic Information:
        </motion.p>

        <form className="grid space-y-7 w-72 lg:w-96 mt-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="text"
              placeholder="Orlando Saimbo"
              className="w-full border-2 border-gray-400 outline-none p-2 rounded-md bg-slate-100 placeholder-gray-700 transition-colors focus:border-blue-500"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="number"
              placeholder="9999999"
              className="w-full border-2 border-gray-400 outline-none p-2 rounded-md bg-slate-100 transition-colors focus:border-blue-500"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="email"
              placeholder="srsaimbo@gmail.com"
              className="w-full border-2 border-gray-400 outline-none p-2 rounded-md bg-slate-100 transition-colors focus:border-blue-500"
            />
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="password"
              placeholder="password"
              className="w-full border-2 border-gray-400 outline-none p-2 rounded-md bg-slate-100 transition-colors focus:border-blue-500"
            />
          </motion.div>

          <motion.button
            className="bg-blue-500 text-white py-2 rounded-md font-medium"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#3b82f6",
              boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Save
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
