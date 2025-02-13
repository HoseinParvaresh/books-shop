import React from 'react'
import Theme from '../../../Common/Header/Buttons/Theme'
import ShoppingCart from '../../../Common/Header/Buttons/ShoppingCart'
import MobileLogo from '../../../Common/Header/Logo/MobileLogo'
import BarsIcon from '../../../Common/Header/Buttons/BarsIcon'
import { userName } from '../../../Utils/helperFunction'

export default function DashboardHeader() {

    const toggleMobileMenu = () => {
        document.querySelector('.navigation').classList.toggle('menu-active')
        document.querySelector('.mobile-overlay').classList.toggle('show')
    }

  return (
    <>
        {/* overlay */}
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
        {/* header */}
        <header className="flex items-center justify-between bg-white dark:bg-primary-dark py-4.5 sm:py-5 px-4 sm:px-8 mb-5 md:mb-8">
            {/* bars icon (show and hide mobile menu and overlay) => mobile size */}
            <BarsIcon/>
            {/* logo in mobile size */}
            <div className="flex items-center">
                {/* logo */}
                <div className='xl:pl-6 xl:ml-6 border-r-red-300'>
                    <MobileLogo/>
                </div> 
                {/* username */}
                <div className="hidden xl:block text-slate-500 dark:text-gray-400">
                    <span className="font-DanaBold ml-1">{userName}</span>
                    عزیز، به پنل کاربریت خوش اومدی
                </div>
            </div>
            {/* theme and cart */}
            <div className="flex items-center gap-x-5 h-13">
                {/* theme */}
                <div className='hidden md:block'>
                    <Theme/>
                </div>
                {/*  Cart */}
                <ShoppingCart/>
            </div>
        </header>
    </>
  )
}
