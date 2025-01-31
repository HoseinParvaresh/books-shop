import React from 'react'

export default function FooterList(Props) {
  return (
    <div>
        <ul className="space-y-4">
            <li className="font-DanaBold"> {Props.title} </li>
            {Props.items.map((item,index) => (
                <li key={index} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">{item}</li>
            ))}
        </ul>
    </div>
  )
}
