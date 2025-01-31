import React,{useState} from 'react'

export default function MobileSubMenu(Props) {


    const [mobileSubMenu,setMobileSubMenu] = useState([''])

    const showAndHideSubMenu = () => {
        mobileSubMenu == '' ?
        setMobileSubMenu('mobile-menu__wrapper--open') :
        setMobileSubMenu('')
    }

  return (
    <li onClick={showAndHideSubMenu} className="mobile-menu__item">
        <div className={`mobile-menu__wrapper ${mobileSubMenu}`}>
            <span> {Props.title} </span>                                              
            <svg className="size-5 mobile-menu__icon">
                <use href="#chevron-left-mini"></use>
            </svg>
        </div>
        <ul className="mobile-menu__submenu">
        {Props.subMenu.map(sub => (
            <li key={sub.id}>
                <a href={sub.link}>{sub.title}</a>
            </li>
        ))}
        </ul>
    </li>
  )
}
