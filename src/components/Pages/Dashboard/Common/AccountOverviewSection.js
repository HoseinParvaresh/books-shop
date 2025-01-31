import React from 'react'
import { Link } from 'react-router-dom'

export default function AccountOverviewSection(Props) {
  return (
    Props.items.map(item => (
        <section key={item.id} className="mt-6 md:mt-10">
        <div className="flex items-center justify-between bg-white dark:bg-primary-dark h-12 md:h-18 pl-2 md:pl-6 mb-5 rounded">
            <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
                <div className="w-2 md:w-2.5 h-full bg-sky-500 rounded-sm"></div>
                <span className="text-sky-500 text-sm md:text-lg font-DanaBold select-none">
                    {item.title}
                </span>
            </div>
            <Link to={item.link} className={`flex ${item.link ? '' : 'hidden'} items-center gap-x-1 md:gap-x-2 text-sky-500 text-xs md:text-base font-Dana`}>
                {item.buttonText}
                <svg className="size-5">
                    <use href="#chevron-left-mini"></use>
                </svg>
            </Link>
        </div>
        <div className="space-y-3 md:space-y-4 md:pr-5">
            <div className="text-zinc-700 dark:text-primary-light font-Dana mt-7 mb-2 leading-7 text-center">
                {item.text}
            </div>
        </div>
    </section>
    ))
  )
}
