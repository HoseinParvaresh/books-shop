import React, { useState } from 'react'
import MobileSubMenu from './MobileSubMenu'
import Theme from '../Buttons/Theme'
import MobileLogo from '../Logo/MobileLogo'
import { Link } from 'react-router-dom'
import BarsIcon from './../Buttons/BarsIcon'

export default function MobileMenu(Props) {

    const [searchValue,setSearchValue] = useState([])
    const [toggleSearchBox,setToggleSearchBox] = useState('hidden')

      const searchBooks = (e) => {
        
        let value = e.target.value
        value.length ? setToggleSearchBox('') : setToggleSearchBox('hidden')
        
        let filterWord = Props.books.filter((book)=> {
            return book.title.includes(value)
        })
        setSearchValue(filterWord)        
    }
      const toggleMobileMenu = () => {
        document.querySelector('.navigation').classList.toggle('menu-active')
        document.querySelector('.mobile-overlay').classList.toggle('show')
    }

    
  return (
    <>
        {/* <!-- overlay--> */}
        <div onClick={toggleMobileMenu} className="mobile-overlay"></div>
        {/* menu */}
        <div className="relative">
            {/* <!-- bars svg(when clicked show mobile menu) --> */}
            <BarsIcon/>
            {/* <!-- menu --> */}
            <div className="navigation -right-67 md:hidden bg-primary-light dark:bg-primary-dark w-64 overflow-y-auto pb-5 fixed top-0 bottom-0 z-50 transition-all"> 
                {/* top menu => logo / theme button & close menu button  */}
                <div className="flex items-center justify-between py-3.5 px-4 bg-primary-light dark:bg-primary-dark mb-5">
                    {/* logo */}
                    <MobileLogo/>
                    {/* theme button & close menu button */}
                    <div className='flex gap-2 items-center'>
                        {/* theme button */}
                        <Theme/>
                        {/* close menu button */}
                        <div onClick={toggleMobileMenu} className="button-lg only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
                            <svg className="size-5.5">
                                <use href="#x-mark"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* bottom menu => search input / search drop down / menu list */}
                <div className="px-6 relative">
                    {/* search input */}
                    <div className="text-sm space-y-1 mb-4 pb-4 border-b border-b-neutral-200 dark:border-b-white/10">
                        <div className="flex items-center bg-gray-100 dark:bg-primary-darker p-3 my-2 rounded-full justify-center">
                            <input type="text" onChange={searchBooks} className="text-slate-700 dark:text-slate-300 text-sm bg-transparent border-none outline-none" placeholder="جستجو بین کتاب ها"/>
                            <button type="submit">
                                <svg className="size-4 bg-pr">
                                    <use href="#magnifying-glass"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* search drop down */}
                    <div id='search-drop_down' className={`absolute ${toggleSearchBox} top-15 right-[22px] left-0 w-5/6 max-h-60 overflow-scroll overflow-x-hidden shadow-normal dark:shadow-none bg-white dark:bg-primary-darker p-5 border-l-8 border-y-8 border-white dark:border-primary-darker text-gray-900 dark:text-white rounded-xl z-20 transition-all`}>
                        <div className="space-y-5 text-right">
                            {searchValue.length ? 
                                searchValue.map((book,index)=>(
                                    <Link key={index} to={`/book/${book.id}`} className="flex items-center justify-between gap-x-3.5 text-sm">
                                        <span className="inline-block w-full">{book.title}</span>
                                        <svg className="size-4 rotate-90 shrink-0">
                                            <use href="#chevron-down"></use>
                                        </svg>
                                    </Link>
                                )) 
                                :
                                (
                                    <p className='text-sm'>متاسفانه نتیجه ای با مشخصات مورد نظر شما پیدا نشد!</p>
                                )
                            }
                        </div>
                    </div>
                    {/* menu list */}
                    <ul className="mobile-menu">
                        {
                            Props.items.map(menu => (
                                menu.subMenu.length > 0 ? (
                                  <MobileSubMenu {...menu} key={menu.id}/>
                                ) : (
                                    <li key={menu.id} className="mobile-menu__item">
                                        <div className="mobile-menu__wrapper">
                                            <Link to={menu.link}> {menu.title} </Link>                                              
                                        </div>
                                    </li>
                                )
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div> 
    </>
  )
}
