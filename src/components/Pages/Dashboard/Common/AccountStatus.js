import React from 'react'

export default function AccountStatus(Props) {
  return (
    Props.items.map(item => (
        <div key={item.id} className="flex items-center gap-x-4 w-64 col-span-3">
            <svg className="size-10 sm:size-12">
                <use href={`#${item.icon}`}></use>
            </svg>
            <div className="flex flex-col gap-y-2">
                <span className="text-xs sm:text-sm text-dark opacity-70 dark:opacity-100 dark:text-gray-400">{item.title}</span>
                <span className="text-sm sm:text-base">{item.text}</span>
            </div>
        </div>
    ))
  )
}
