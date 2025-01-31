import React from 'react'
import { Link } from 'react-router-dom'
export default function MobileLogo() {
  return (
    <Link to={"/"} className="font-MorabbaHeavy text-base xxs:text-xl max-w-32 select-none text-black dark:text-white">
        <span> دست به دست</span>
    </Link>
  )
}
