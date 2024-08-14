import React from "react";
import { motion } from "framer-motion";
import { fade } from "@/variants";
import ServiceSlider from "@/components/ServiceSlider";

const Services = () => {
  return (
    <div className="h-full py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8">
          {/* TEXT */}
          <div className="text-center flex xl:w-[59vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fade("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
             My Services <span className="text-[#ff9800]">.</span>
            </motion.h2>
          </div>

          {/* SLIDER */}
          <motion.div
            variants={fade("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full mt-5 xl:max-w-[95%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
