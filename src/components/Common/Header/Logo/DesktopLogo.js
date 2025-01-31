import React from 'react'
import { Link } from 'react-router-dom'
export default function DesktopLogo() {
  return (
    <Link to={"/"} className="font-MorabbaHeavy text-[1.8rem]/[2rem] max-w-24 select-none text-black dark:text-white">
        {/* for light theme */}
        <span> دست به دست </span>
        {/* for dark theme */}
        <span></span>
    </Link>
  )
}
