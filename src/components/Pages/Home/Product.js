import React from 'react'
import { Link } from 'react-router-dom';
import { FormatNumber, calcDiscountPrice } from '../../Utils/helperFunction'

export default function Product(Props) {

    return (
        <div className='p-3 flex flex-col gap-3 items-center shadow-normal rounded-xl bg-white dark:bg-primary-dark'>
            {/* discount and timer */}
            <div className='flex items-center justify-between w-full px-1'>
                <span className='bg-red-500 text-white text-xs rounded-full px-2.5 pb-[1.5px] pt-1'>%3</span>
                <div className='flex items-center gap-2'>
                    <div className='text-xs mt-1 text-neutral-900 dark:text-white'>
                        <span>20</span> : <span>01</span> : <span>41</span> : <span>55</span>
                    </div>
                    <svg className='size-5 text-black/30 dark:text-white/70'>
                        <use href='#clock'></use>
                    </svg>
                </div>
            </div>
            {/* banner */}
            <div className='h-[234px]'>
                <Link className="size-full" to={`/book/${Props.id}`} title={Props.title}>
                    <img className="size-full object-cover rounded-lg" src={Props.image1} alt={Props.title} loading='lazy' />
                </Link>
            </div>
            {/* title */}
            <Link to={`/book/${Props.id}`} title={Props.title} className='self-start my-3 text-black/70 dark:text-white text-sm font-DanaBold line-clamp-1'>{Props.title}</Link>
            {/* price and basket */}
            <div className='flex w-full justify-between'>
                {/* basket */}
                <div className='flex items-center gap-3 cursor-pointer group transition-colors'>
                    <div className='rounded-full bg-primary pt-2 pb-2.5 px-2.5 flex-center group-hover:bg-white group-hover:shadow-normal transition-colors'>
                        <svg className='size-6 text-white group-hover:text-primary transition-colors'>
                            <use href='#shopping-bag'></use>
                        </svg>
                    </div>
                    <p className='text-[13px] max-w-15 text-neutral-700 dark:text-white'>افزودن به <span className='text-sm font-DanaBold'>سبدخرید</span></p>
                </div>
                {/* price */}
                <div className='flex items-center gap-1'>
                    <div className='text-sm flex flex-col relative'>
                        <span className='absolute w-13 h-px bg-red-500 -rotate-6 top-2 left-0'></span>
                        <span className='text-black/40 dark:text-white/60'>{FormatNumber(Props.price)}</span>
                        <span className='text-primary font-DanaBold'>{FormatNumber(calcDiscountPrice(Props.price, Props.discount))}</span>
                    </div>
                    <span className='text-[10px] font-DanaBold text-black/40 dark:text-white/60 rotate-90'>تومان</span>
                </div>
            </div>
        </div>
    )
}
