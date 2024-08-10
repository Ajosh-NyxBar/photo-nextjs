import Link from "next/link";
import React from "react";
import {
  RiBubbleChartLine,
  RiDribbbleFill,
  RiMessengerFill,
  RiPatreonFill,
  RiWhatsappFill,
  RiYuqueFill,
} from "react-icons/ri";

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg text-white">
      <Link href={"/"} className="hover:text-[#FF9800] transition-all duration-300">
        <RiBubbleChartLine  />
      </Link>
      <Link href={"/"} className="hover:text-[#FF9800] transition-all duration-300">
        <RiDribbbleFill />
      </Link>
      <Link href={"/"} className="hover:text-[#FF9800] transition-all duration-300">
        <RiMessengerFill />
      </Link>
      <Link href={"/"} className="hover:text-[#FF9800] transition-all duration-300">
        <RiPatreonFill />
      </Link>
      <Link href={"/"} className="hover:text-[#FF9800] transition-all duration-300">
        <RiWhatsappFill />
      </Link>
      <Link href={"/"} className="hover:text-[#FF9800] transition-all duration-300">
        <RiYuqueFill />
      </Link>
    </div>
  );
};

export default Social;
