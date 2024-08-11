import Image from "next/image";
import { Inter } from "next/font/google";
import Circle from "@/components/Circle";
import { motion } from "framer-motion";
import Stack from "@/components/Stack";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-full">
      {/* text */}
      <div className="w-full h-full">
        <div className="text-center h-full flex flex-col justify-center container mx-auto">
          {/* Circle */}
          <div className="mb-3 flex justify-center">
            <Circle />
          </div>

          <motion.div>
            <Stack />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.4, ease: "easeInOut" }}
          >
            <span className="text-white">Hello, I'm</span>
            <span className="text-accent">John Doe</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.4, ease: "easeInOut" }}
          >
            A full stack developer based in London, UK.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
