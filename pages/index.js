import Image from "next/image";
import { Inter } from "next/font/google";
import Circle from "@/components/Circle";
import { motion } from "framer-motion";
import Stack from "@/components/Stack";
import { fade } from "@/variants";
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

          <motion.div
            variants={fade("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3 mx-auto justify-center"
          >
            <Stack />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fade("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            <span className="text-white">Hello, I'm</span>
            <span className="text-accent"> Ajosh</span>
          </motion.h1>

          <motion.p
            variants={fade("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="justify-center text-white mx-auto max-w-sm xl:max-w-xl"
          >
            Welome to Our World endless imagination and innovation, Togther we
            can create a better future.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
