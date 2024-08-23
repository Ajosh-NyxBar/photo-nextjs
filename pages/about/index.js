import React from "react";
import { motion } from "framer-motion";
import { fade } from "@/variants";
import Fashion from "@/components/Fashion";

const posts = [
  {
    author: {
      name: "John Doe",
      role: "Software Engineer",
      href: "#",
      img: "/t-avt-1.png",
    },
  },
];
const About = () => {
  return (
    <div className="h-full py-32 text-center xl:text-left">
      {/* INner  */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* :EFt */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fade("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            A <span className="text-[#ff9800]">Discover</span> Our Studio
          </motion.h2>

          <motion.p
            variants={fade("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-3 xl:mb-6 px-2 xl:px-0"
          >
            Di studio desain kami, kami bersemangat menciptakan situs web yang
            indah dan fungsional yang membantu bisnis berkembang. Kami
            menggabungkan kreativitas dan teknologi untuk memberikan solusi
            terbaik bagi klien kami.
          </motion.p>

          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl items-center lg:justify-start justify-center"
            >
              <div className="flex items-center gap-x-4 relative">
                <img
                  src={post.author.img}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span className="inset-0 text-[#ff9800]">
                        {post.author.name}
                      </span>
                    </a>
                  </p>
                  <p>{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT */}
        <motion.div
          variants={fade("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex w-full xl:max-w-[48%] justify-center"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0">
            <Fashion />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
