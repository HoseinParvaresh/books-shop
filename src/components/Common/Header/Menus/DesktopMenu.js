import React,{useState} from 'react'
import DesktopSubMenu from './DesktopSubMenu'
import { Link } from 'react-router-dom'

export default function Menu(Props) {
    const [widthElm,setWidthElm] = useState(0)
    const [transformElm,setTransformElm] = useState(0)

    const mouseEnterHandler = (e) => {
        let elm = e.target.getBoundingClientRect()
                
        setWidthElm(elm.width)
        setTransformElm(elm.right - elm.width)
        
    }
    const mouseLeaveHandler = (e) => {
        setWidthElm(0)
    }
    const styles = { 
        transform: `translateX(${transformElm}px)`,
        width: widthElm
    };
        
  return (
    <nav className="h-8 w-full lg:w-auto" onMouseLeave={mouseLeaveHandler}>
        <ul className="flex h-full transition-colors gap-4 child:flex-center child:gap-x-1 child:cursor-pointer">
            <div className="absolute top-[123px] left-0 h-[2px] bg-black dark:bg-primary-light bottom-0 transition-all duration-300" style={styles}></div>
            {
                Props.items.map((menu)=>(
                    menu.subMenu.length > 0 ? (
                        <li key={menu.id} onMouseEnter={mouseEnterHandler}>
                            <DesktopSubMenu title={menu.title}
                                subMenu={menu.subMenu} />
                        </li>
                    ) : (
                        <li key={menu.id}>
                            <Link to={menu.link} onMouseEnter={mouseEnterHandler} className="text-sm">{menu.title}</Link>
                        </li> 
                    )
                      
                ))
            }
        </ul>
</nav>
  )
}
