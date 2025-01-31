import React from 'react'

export default function EditAccountInput({label,value,icon,func}) {
  return (
    <div onClick={func}>
        <label className="inline-block font-Dana text-sm mb-3">{label}</label>
        <div className="relative">
            {value ? 
                <input type="text" className="w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-primary-dark text-sm py-3.5 pr-3.5 pl-13 rounded opacity-60" disabled value={value}/>
                :
                <input type="text" className="w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-primary-dark text-sm py-3.5 pr-3.5 pl-13 rounded outline-none" name="full_name" required=""/>            
            }
            <svg className="absolute left-3.5 top-0 bottom-0 my-auto size-6 text-slate-500 dark:text-gray-400">
                <use href={icon}></use>
            </svg>
        </div>
    </div>
  )
}
