import React from 'react'
export default function Category(props) {
  return (
    <div className='text-center cursor-pointer'>
      <div className="flex-center">
        <div className='size-20 border-3 shadow border-dashed rounded-full border-primary hover:border-sky-400 transition-colors p-1'>
          <img src={props.img} alt="img" className='dark:bg-white rounded-full' />
        </div>
      </div>
      <p className='text-xs mt-2 font-DanaBold'>{props.title}</p>
    </div>
  )
}
