import React from 'react'

export default function ToggleBox(Props) {

  return (
    Props.items.map((item) => (
      <div key={item.id} className="h-17 bg-primary-light dark:bg-primary-dark rounded-xl p-5">
        <div className="flex items-center justify-between">
            <span className="font-DanaBold"> {item.title} </span>
            <label className="toggle">
                <input className="toggle__input" type="checkbox" name={item.inputName} value="yes"/>
                <span className="toggle__marker"></span>
            </label>
        </div>
      </div>
    ))
  )
}
