import React from 'react'

export default function Description(Props) {
  
  return (
    <>
      {
        Props.items.map((item,index)=>(
            item.title ? (
              <h2 key={index} className='dark:text-primary-light font-DanaBold text-xl my-5'>{item.title}</h2>
            ) : (
              <p key={index}  className='leading-7 my-5 text-primary-darker dark:text-gray-300'>{item.desc}</p>
            )
        ))
      }
    </>
  )
}
