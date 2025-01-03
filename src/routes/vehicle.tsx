import { motion } from "framer-motion";

import { Car, Lock, Search, Settings } from "lucide-react";
import { CardVehicleInformation } from "../components/cardVehicleInformation";
export function Vehicle() {
  return (
    <div className=" w-full px-4 md:px-12 mt-8">
      <motion.h1
        className="text-3xl font-medium text-gray-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vehicle
      </motion.h1>
      <motion.div
        className="bg-white flex items-center gap-12 p-3 rounded-xl mt-8 mb-6 "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl text-gray-700 hidden lg:block">Total: 30</h2>
        <div className="flex gap-12 sm:items-center flex-grow flex-col sm:flex-row">
          <motion.div
            className="flex items-center gap-6 bg-gray-100 flex-1 py-3 px-2 "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Search />
            <motion.input
              type="search"
              placeholder="Search"
              className="flex-1 bg-gray-100 outline-none border-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            />
          </motion.div>
          <motion.button
            className="bg-blue-500 text-white py-2 px-8 lg:px-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Registar
          </motion.button>
        </div>
      </motion.div>
      <div className="bg-white px-2 py-9 h-[70vh]">
        <motion.div
          className="mt-8  h-full scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-500 overflow-y-auto overflow-x-hidden pt-3 grid place-items-center md:place-items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {Array.from({ length: 197 }).map((_, index) => (
            <motion.div
              key={index}
              className="animate-fadeIn"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardVehicleInformation
                carIcon={<Car size={24} />}
                settingsIcon={<Settings size={16} />}
                title="BMW"
                description="Teixeira Manuel"
                state={index % 3 === 0}
                iconState={<Lock size={20} />}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
