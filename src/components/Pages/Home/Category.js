import React from 'react'
export default function Category(props) {
  return (
      <a href="#" className="flex-center flex-col gap-6">
          <img src={props.img} alt="img" className="object-cover rounded-lg xs:rounded-xl md:rounded-2xl border-3 border-black/10 dark:border-white/10 hover:border-black/50 hover:dark:border-white/50 p-1 transition-colors"/>
      </a>
  )
}
