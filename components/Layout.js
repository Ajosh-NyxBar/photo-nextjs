import React from "react";

import Nav from "./Nav";
import Header from "./Header";

import { Poppins } from "next/font/google";
    
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }) => {
  return (
    <div className={`${poppins.variable} font-poppins page text-black bg-site bg-cover bg-no-repeat relative`}> 
        <Nav />
        <Header />
        {children}
    </div>
  )
};

export default Layout;