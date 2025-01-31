import React from 'react'
import Theme from '../../../../Common/Header/Buttons/Theme'
import AsideMenuItems from './AsideMenuItems'
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import MobileLogo from '../../../../Common/Header/Logo/MobileLogo';
import { userSignOut } from '../../../../Utils/helperFunction';

export default function Aside() {

    const date = new DateObject({
        data: new Date(),
        calendar: persian,
        locale: persian_fa,
        format: "dddd DD MMMM YYYY",
    });
    const toggleMobileMenu = () => {
        document.querySelector('.navigation').classList.toggle('menu-active')
        document.querySelector('.mobile-overlay').classList.toggle('show')
    }

    let userName = localStorage.getItem('name')
    
  return (
    <aside className="navigation fixed -right-67 md:right-0 bottom-0 top-0 w-67 flex flex-col shrink-0 bg-white dark:bg-primary-dark py-4.5 px-6 z-50 md:z-auto overflow-y-auto transition-all">
        {/* them button and close button and logo => mobile size */}
        <div className="flex md:hidden items-center justify-between mb-8 relative">
            {/* logo */}
            <MobileLogo/>
            {/* theme & close button */}
            <div className="flex gap-x-3">
                <Theme/>
                {/* close button */}
                <div onClick={toggleMobileMenu} className="button-lg only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
                    <svg className="w-5.5 h-5.5">
                        <use href="#x-mark"></use>
                    </svg>
                </div>
            </div>
        </div>
        {/* Username and Date and profile => mobile and desktop */}
        <div className="relative bg-sky-500 text-white rounded md:h-[140px] px-3 py-3 md:pt-5 mb-8 md:mb-20 text-center">
            {/* Username */}
            <span className="block font-DanaBold truncate">{userName}</span>
            {/* Date */}
            <span className=" text-sm truncate mt-2.5">
                {date.format()}          
            </span>
            {/* profile */}
            <div className="hidden md:block relative -mb-11 mx-auto mt-3.5 size-22 p-1 shadow-md rounded-full">
                <img src="https://secure.gravatar.com/avatar/2df798968271838f06093bd52185c318?s=96&d=mm&r=g" className="size-full object-cover rounded-full" alt={userName}/>
            </div>
        </div>
        {/* side items(menu) => mobile and desktop */}
        <div className="divide-y divide-neutral-200/50 dark:divide-white/10 child:relative first:!pt-0 last:!pb-0 mb-10">
            <AsideMenuItems items={[
                {id:1,name:"پنل کاربری",link:"main-panel",icon:'squares-2x2'},
                {id:2,name:"کتاب های من",link:"my-books",icon:'book-open'},
                {id:3,name:"چت های من",link:"my-chats",icon:'chat-bubble-left-right'},
                {id:4,name:"کیف پول و تراکنش ها",link:"my-orders",icon:'wallet'},
                {id:5,name:"تیکت ها",link:"my-tickets",icon:'chat-bubble-bottom-center-text'},
                {id:6,name:"ویرایش حساب",link:"edit-account",icon:'pencil-square'},
            ]}/>
        </div>
        {/* signout Button */}
        <div onClick={userSignOut} className="w-full shrink-0 mt-auto button-base sm:button-xl justify-between bg-gray-100 text-gray-900 dark:bg-primary-darker dark:text-gray-400">
            خروج از حساب کاربری
            <svg className="size-6">
                <use href="#arrow-left-on-rectangle-mini"></use>
            </svg>
        </div>
    </aside>
  )
}
