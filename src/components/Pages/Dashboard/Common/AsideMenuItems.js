import React from 'react'

export default function AsideMenuItems(Props) {

  return (
    Props.items.map(item => (
        <div key={item.id} id={`aside-btn-${item.id}`} className={`py-4 md:py-6 ${item.id == 1 ? '!pt-0' : ''} ${Props.items.length == item.id  ? '!pb-0' : ''}`}>
            <a href={item.link} className="flex items-center justify-between text-sm md:text-base font-dana">
                <span className="flex items-center gap-x-2.5">
                    <svg className="size-5 md:size-7">
                        <use href={`#${item.icon}`}></use>
                    </svg>
                    {item.title}                       
                </span>
                <svg className="size-5 md:size-6">
                    <use href="#chevron-left-mini"></use>
                </svg>
            </a>
        </div>
    ))
  )
}
