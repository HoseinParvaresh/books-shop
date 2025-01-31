import React, { useState , useEffect } from 'react'
import DesktopMenu from './Menus/DesktopMenu'
import MobileMenu from './Menus/MobileMenu'
import Alert from '../../Utils/Alert'
import apiRequests from '../../../Services/Axios/Configs/Configs'
import { Toaster } from 'react-hot-toast'
import SignUp from './Buttons/SignupButton/Signup'
import ShoppingCart from './Buttons/ShoppingCart'
import Theme from './Buttons/Theme'
import MobileLogo from './Logo/MobileLogo'
import DesktopLogo from './Logo/DesktopLogo'
import { Link } from 'react-router-dom'

export default function Header() {

    const [menuList,setMenuList] = useState([])
    const [books,setBooks] = useState([])
    const [searchValue,setSearchValue] = useState([])
    const [toggleSearchBox,setToggleSearchBox] = useState('hidden')

    const searchBooks = (e) => {
        
        let value = e.target.value

        value.length ? setToggleSearchBox('') : setToggleSearchBox('hidden')
        
        let filterWord = books.filter((book)=> {
            return book.title.includes(value)
        })
        setSearchValue(filterWord)        
      }

    const fetchData = async () => {
        try {
          const response = await apiRequests.get("/menus");
          const responseBook = await apiRequests.get("/books");
          setMenuList(response.data);
          setBooks(responseBook.data);
          
        } catch (error) {
          Alert('error','Error fetching data from Header.js')
          console.log(error);
        }
      };
    useEffect(() => {
          fetchData();
      }, []);
     
  return (
    <div className="header font-Dana md:pb-0 md:border-b border-gray-300 dark:border-neutral-600/50 dark:text-primary-light bg-primary-light dark:bg-primary-dark shadow-normal md:shadow-none">
        <div><Toaster position='top-right'/></div>
        {/* <!-- desktop header --> */}
        <div className="hidden md:flex my-0 mx-auto pt-5 pb-3 w-[85%]">
            {/* right header => (logo for desktop) */}
            <DesktopLogo/>
            {/* left header */}
            <div className='w-full mr-10'>
                {/* top header => search input & search drop down / theme button & sign up & shopping cart */}
                <div className='flex gap-5 items-start relative'>
                    {/* search input */}
                    <div className='flex-center w-full relative'>
                        {/* icon */}
                        <svg className="size-6 absolute right-3 text-primary-darker/50 dark:text-gray-300/50 cursor-pointer">
                            <use href="#magnifying-glass"></use>
                        </svg>
                        {/* input */}
                        <input type="text" onChange={searchBooks} placeholder='جستجو' className='w-full bg-gray-100 dark:bg-secondary-dark py-3 pr-10 pl-2 outline-none rounded-full' />
                    </div>
                    {/* search drop down desktop */}
                    <div id='search-drop_down' className={`absolute ${toggleSearchBox} scroll-style shadow-normal top-17 w-4/6 max-h-60 overflow-scroll overflow-x-hidden right-0 left-0 bg-white dark:bg-primary-darker p-5 text-gray-900 dark:text-white rounded-xl z-20 transition-all`}>
                        <div className="space-y-5 text-right">
                            {searchValue.length ?
                                searchValue.map((book,index)=>(
                                    <Link key={index} to={`/book/${book.id}`} className="flex items-center justify-between gap-x-3.5 text-sm hover:text-black/70 dark:hover:text-white/70 md:text-base">
                                        <span className="inline-block w-full md:w-3/4">{book.title}</span>
                                        <svg className="size-5 rotate-90 shrink-0">
                                            <use href="#chevron-down"></use>
                                        </svg>
                                    </Link>
                                )) 
                                :
                                (
                                    <p>متاسفانه نتیجه ای با مشخصات مورد نظر شما پیدا نشد!</p>
                                )
                            }
                        </div>
                    </div>
                    {/* theme button & sign up & shopping cart */}
                    <div className='flex gap-5 items-center'>
                        {/* theme button */}
                        <Theme/>
                        {/* <!-- shopping cart --> */}
                        <ShoppingCart/>
                        {/* <!-- signup --> */}
                        <SignUp/>
                    </div>
                </div>
                {/* bottom header => desktop menu */}
                <div className='mt-5'>
                    {/* menu */}
                    {menuList ? <DesktopMenu items={menuList}/> : ''}
                </div>
            </div>
        </div>
        {/* <!-- mobile header --> */}
        <div className="md:hidden w-[95%] gap-3 py-3 mx-auto flex items-center justify-between">
            {/* <!-- mobile menu --> */}
            {menuList ? <MobileMenu items={menuList} books={books}/> : ''}
            {/* <!-- logo for mobile --> */}
            <MobileLogo/>   
            {/* <!-- Shopping Cart & SignUp --> */}
            <div className='flex items-center gap-3 md:gap-6'>
                <SignUp/>
                <ShoppingCart/>
            </div>
        </div>  
    </div>
  )
}

