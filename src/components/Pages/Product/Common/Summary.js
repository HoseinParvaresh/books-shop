import React from 'react'

export default function Summary(Props) {
  return (
	<>
    {
        Props.items.map((item,index) => (
            <div key={index} className="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-primary-light dark:bg-primary-dark pt-4 pb-3.5 sm:py-3 px-4.5 rounded-xl">
                <svg className="size-9 text-primary">
                    <use href={item.icon}></use>
                </svg>
                <div className="space-y-0.5 sm:space-y-1">
                    <span className="block font-DanaBold text-sm sm:text-base">{item.title}</span>
                    <span className="block text-sm opacity-70">{item.desc}</span>
                </div>
            </div>
        ))
    }
    </>
  )
}
