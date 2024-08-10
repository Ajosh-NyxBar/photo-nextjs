import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import {
  FaGlobe,
  FaUser,
  FaBriefcase,
  FaThLarge,
  FaEnvelope,
} from "react-icons/fa";

export const navData = [
  {
    name: "home",
    path: "/",
    icon: <FaGlobe />,
  },
  {
    name: "about",
    path: "/about",
    icon: <FaUser />,
  },
  {
    name: "services",
    path: "/services",
    icon: <FaBriefcase />,
  },
  {
    name: "work",
    path: "/work",
    icon: <FaThLarge />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <FaEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center gap-y-4 fixed h-max bottom-10 mt-auto  z-50 w-full ">
      {/* Inner Sec */}
      <div className="flex xl:flex-row items-center justify-between gap-x-10 px-4 md:px-10 h-[75px] bg-white py-4 rounded-full backdrop-blur-sm text-3xl z-50">
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-[#FF9800]"
              } relative flex items-center gap-x-5 text-xl font-medium hover:text-[#FF9800] transition-all duration-300`}
            >
              <div className="absolute hidden bottom-16 group-hover:flex">
                <div className="bg-[#ff9800] relative flex text-white items-center px-4 py-2 rounded-full">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="text-2xl">{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
