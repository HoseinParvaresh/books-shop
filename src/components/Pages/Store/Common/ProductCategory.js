import React from 'react'

export default function ProductCategory(Props) {
  return (
        Props.items.map((item,index)=>(
            <label key={index} className="checkbox">
                <input className="checkbox__input" name={`category[${item.id}]`} value="yes" type="checkbox"/>
                <span className="checkbox__marker"></span>
                <span className="text-sm font-Dana select-none"> {item.name} </span>
            </label>
        ))
  )
}
