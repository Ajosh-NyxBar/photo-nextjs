import React from 'react'
import { HiGlobeAlt, HiUser, HiBriefcase, HiViewBoards, HiEnvelope } from "react-icons/hi";




export const navData = [
    {
        name: "home", path: "/", icon: <HiGlobeAlt />
    },
    {
        name: "about", path: "/about", icon: <HiUser />
    },
    {
        name: "services", path: "/services", icon: <HiBriefcase />
    },
    {
        name: "work", path: "/work", icon: <HiViewBoards />
    },
    {
        name: "contact", path: "/contact", icon: <HiEnvelope />
    }
]
const Nav = () => {
  return (
    <div>
      
    </div>
  )
}

export default Nav
