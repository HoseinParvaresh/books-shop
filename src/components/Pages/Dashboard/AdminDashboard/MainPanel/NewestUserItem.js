import React from 'react'

export default function NewestUserItem(Props) {
  return (
        <div className='flex gap-x-2 h-14 py-2 px-3 rounded bg-primary-light dark:bg-primary-darker'>
            <div className='shrink-0'>
                <img src="https://secure.gravatar.com/avatar/2df798968271838f06093bd52185c318?s=96&d=mm&r=g" className="size-full object-cover rounded-full"/>
            </div>
            <div>
                <p className='line-clamp-1'> {Props.userName} </p>
                <p className='text-sm text-black/50 dark:text-white/50 line-clamp-1'> {Props.email} </p>
            </div>
        </div>
  )
}
