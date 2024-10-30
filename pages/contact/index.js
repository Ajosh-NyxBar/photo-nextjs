import React from "react";
import { BsFillSendDashFill } from "react-icons/bs";

import { motion } from "framer-motion";
import { fade } from "../../variants";
const index = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text dan form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Text */}
          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="h2 text-center mb-12"
          >
            Lets <span className="text-[#FF9800]">talk</span> with advisors
          </motion.h2>

          {/* FORM */}
          <motion.form
            variants={fade}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
          >
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>
            <input type="email" placeholder="Email" className="input" />
            <textarea
              className="textarea "
              placeholder="Your Message"
              // sasaa
            ></textarea>
            <button
              className="btn rounded-full bg-[#FF9800]  border border-white/20 max-w-[175px] px-8
          transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#FF9800] group"
            >
              <span
                className="group-hover:-translate-y-[120%] text-black font-semibold group-hover:opacity-0
              transition-all duration-500"
              >
                Lets Talk
              </span>
              <BsFillSendDashFill
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
              transition-all duration-300 absolute"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default index;
