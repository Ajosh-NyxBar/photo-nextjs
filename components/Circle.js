import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RiRadioButtonLine } from "react-icons/ri";
const Circle = () => {
  return (
    <div>
      <Link
        href="/"
        className="relative w-[185px] h-[185px] flex justify-center items-center"
      >
        <Image
          src={"/hero-banner.png"}
          alt="circle"
          width={141}
          height={148}
          className="animate-spin-slow max-w-[141px] max-h-[141px] w-full h-full"
        />
        <RiRadioButtonLine className="absolute text-4xl text-accent animate-spin-slow" />
      </Link>
    </div>
  );
};

export default Circle;
