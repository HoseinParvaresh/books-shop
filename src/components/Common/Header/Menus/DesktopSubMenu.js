import React from 'react'

export default function SubMenu(Props) {    
        
  return (
    <div className="relative group flex-center gap-1">
        <span className="text-sm cursor-pointer">{Props.title}</span>
            {/* <!-- sub menu --> */}
        <div className="w-44 absolute top-full pt-2.5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 delay-100 z-10">
            <ul className="bg-primary-light divide-y-2 divide-black/10 dark:divide-white/10 dark:bg-primary-dark text-gray-900 dark:text-primary-light text-sm shadow-normal rounded-lg child:px-3 child:py-2.5 ">
                {
                    Props.subMenu.map((sub,index)=>(
                        <li key={index} className='flex items-center gap-1.5 hover:text-primary'>
                            <svg className="size-5">
                                <use href={`#${sub.icon}`}></use>
                            </svg>
                            <a href={sub.link}>{sub.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
