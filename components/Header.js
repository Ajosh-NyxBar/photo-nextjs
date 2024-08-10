import Image from "next/image";
import Link from "next/link";
import React from "react";
import Social from "./Social";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={48}
              height={48}
              alt="logo"
              priority={true}
            />
          </Link>

          {/* SOCIAL */}
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
