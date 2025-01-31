import React from 'react'

export default function BarsIcon() {

    const toggleMobileMenu = () => {
        document.querySelector('.navigation').classList.toggle('menu-active')
        document.querySelector('.mobile-overlay').classList.toggle('show')
    }

  return (
    <button onClick={toggleMobileMenu} type="button" className="md:hidden button-lg md:button-xl only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white ">
        <svg className="size-5.5 md:size-6">
            <use href="#bars-3"></use>
        </svg>
    </button>
  )
}