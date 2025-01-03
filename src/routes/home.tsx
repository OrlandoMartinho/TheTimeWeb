import { motion } from "framer-motion";
import { Separator } from "../components/separator";
import { HomeCard } from "../components/homeCard";
import { Car, Clock, FileSpreadsheet, SquareX } from "lucide-react";
import { HomeNewsInformations } from "../components/homeNewsInformations";
import { ChartPrimary } from "../components/chartPrimary";
import { ChartSecondary } from "../components/chartSecondary";

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 mt-8 md:px-12 pb-28  h-screen gap-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-500 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-medium text-gray-700 mb-6"
      >
        Home
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="my-6 flex bg-white justify-between flex-col xl:flex-row px-6 py-12"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring" }}
        >
          <HomeCard
            icon={<Car />}
            title="Registered Vehicles"
            total={100}
            className="bg-blue-500 text-white"
          />
        </motion.div>
        <Separator />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", delay: 0.1 }}
        >
          <HomeCard
            icon={<SquareX />}
            title="Locked Cars"
            total={100}
            className="text-red-600"
          />
        </motion.div>
        <Separator />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <HomeCard
            icon={<Clock />}
            title="Total history"
            total={100}
            className="text-green-600"
          />
        </motion.div>
        <Separator />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <HomeCard
            icon={<FileSpreadsheet />}
            title="Reports"
            total={100}
            className="text-gray-600"
          />
        </motion.div>
      </motion.div>
      <div className="flex gap-12 flex-col lg:flex-row">
        <ChartPrimary />
        <ChartSecondary />
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white w-full h-96 mt-12 flex p-6 gap-4 flex-col lg:flex-row"
      >
        <div className="lg:w-2/4 space-y-4 px-4  h-full gap-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-500 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full">
          <h1 className="font-semibold">News Notifications</h1>
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <HomeNewsInformations
                description="This in an example notification"
                state="Now"
              />
            </motion.div>
          ))}
        </div>
        <Separator />
        <div className="lg:w-2/4 space-y-4 px-4  h-full gap-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-500 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar-thumb]:rounded-full [&:-.scrollbar-track]:rounded-full">
          <h1 className="font-semibold">News Reports</h1>
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <HomeNewsInformations
                description="This in an example notification"
                state="Now"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
