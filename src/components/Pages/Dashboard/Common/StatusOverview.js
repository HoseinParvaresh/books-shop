import React from 'react'
import { Link } from 'react-router-dom'

export default function StatusOverview({button,items}) {

  return (
    <div className="flex items-center justify-between flex-wrap gap-y-5">
        <div className="flex order-2 sm:order-1 items-center justify-between gap-x-10 gap-y-6 flex-wrap">
            {/* status overview items */}
            {
                items.map(item => (
                    <div className="flex items-center gap-x-4 w-full sm:w-56 md:w-full lg:w-56 2xl:w-72 py-4 px-4.5 bg-white dark:bg-primary-dark rounded">
                        <svg class="size-10 sm:size-12"><use href={item.icon}></use></svg>
                        <div className="flex flex-col gap-y-2">
                            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400"> {item.text} </span>
                            <span className="text-sm sm:text-base font-danaBold">{item.value}</span>
                        </div>
                    </div>
                ))
            }
        </div>
        {/* status overview button */}
        <Link to={button.link} type="button" className="flex order-1 sm:order-2 items-center justify-between gap-x-6 w-full sm:w-auto md:w-full lg:w-auto text-sky-500 bg-transparent border border-sky-500 px-4 h-15 sm:h-20 font-DanaBold rounded cursor-pointer">
            {button.text}
            <svg className="size-7">
                <use href="#plus-circle"></use>
            </svg>
        </Link>
    </div>
  )
}
