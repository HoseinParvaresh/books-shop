import React from 'react'
export default function Category(props) {
  return (
    <div className='text-center'>
      <div className="flex-center">
        <img src={props.img} alt="img" className='size-15 border-2 shadow border-dashed rounded-full border-primary hover:border-sky-400 transition-colors p-3' />
      </div>
      <p className='text-xs mt-2 font-DanaBold'>{props.title}</p>
    </div>
  )
}
