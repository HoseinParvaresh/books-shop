import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function ShoppingCart() {

    const [toggleBox,setToggleBox] = useState('hide')
    const [toggleOverlay,setToggleOverlay] = useState('hide')
    const [Z_index,setZ_index] = useState('')

    const shoppingCartHandler = () => {
        toggleBox === 'hide' ?
        setToggleBox('show') :
        setToggleBox('hide')

        toggleOverlay === 'hide' ? 
        setToggleOverlay('show') :
        setToggleOverlay('hide')

        Z_index === '' ? 
        setZ_index('z-20') :
        setZ_index('')
    }

  return (
    <>
        <div onClick={shoppingCartHandler} className={`overlay ${toggleOverlay}`}></div>
        <div className={`group relative rounded-full ${Z_index}`}>
            {/* <!-- cart button --> */}
            <div onClick={shoppingCartHandler}>
                <button type="button" className="button-lg md:button-xl only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white ">
                    <svg className="size-5.5 md:size-6">
                        <use href="#shopping-cart"></use>
                    </svg>
                </button>   
            </div>
            
            {/* <!-- cart drop down --> */}
            <div className={`${Z_index} pt-5 absolute left-0 transition-all ${toggleBox}`}>
                <div className="flex-center flex-col w-75 sm:w-[350px] p-6 shadow-normal rounded-xl bg-primary-light dark:bg-primary-dark">
                    <p className="mb-5"> هیچ محصولی در سبد خرید شما نیست. </p>
                    <Link to={'/shop'} className="text-xs py-2 px-3 button-primary"> بازگشت به فروشگاه </Link>
                </div>
            </div>
        </div>
    </>
  )
}
