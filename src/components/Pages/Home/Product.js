import React from 'react'
import { Link } from 'react-router-dom';
import {FormatNumber,calcDiscountPrice} from '../../Utils/helperFunction'

export default function Product(Props) {
    
  return (
    <div className="product shadow-normal dark:shadow-normal-dark flex flex-col dark:text-primary-light bg-primary-light dark:bg-primary-dark border border-neutral-100 dark:border-none rounded-2xl">
        {/* <!-- product Banner --> */}
        <div className="relative h-[282px] group">
            <Link className="block w-full h-full" to={`/book/${Props.id}`} title={Props.title}>
                <img className="block w-full h-full object-cover rounded-t-2xl" src={Props.image1} alt={Props.title} loading='lazy'/>
            </Link>
            {/* <!-- Offer percent  --> */}
            <span className={`${Props.available && Props.discount ? '' : 'hidden'} absolute right-4 top-3 flex-center w-12 h-7 bg-primary text-white font-danaMedium text-sm rounded-full`}>{Props.discount}%</span>
        </div>
        {/* <!-- product Title & Description --> */}
        <div className="flex-grow px-4.5 pt-4 pb-3">
            {/* <!-- product Title --> */}
            <h3 className="font-DanaBold line-clamp-1 mb-3">
                <Link to={`/book/${Props.id}`}> {Props.title} </Link>
            </h3>
            {/* <!-- product Description --> */}
            <p className="text-sm line-clamp-2 opacity-70">{Props.summary}</p>
        </div>
        {/* <!-- product Footer --> */}
        <div className="px-4.5 pb-3">
            {/* <!-- author & Rating --> */}
            <div className="flex justify-between gap-2.5 text-slate-500 dark:text-primary-light/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-primary-light/10">
                <div className="flex items-center gap-x-0.5">
                    <p className='line-clamp-1'>{Props.author.name}</p>
                </div>
                {/* <!-- Rating --> */}
                <div className="flex items-center gap-x-0.5 text-amber-500">
                    <span className="font-Dana">{Props.rate}</span>
                    <svg className="w-5 h-5">
                        <use href="#star-mini"></use>
                    </svg>
                </div>
            </div>
            {/* Price */}
            <div className={`${Props.discount ? 'mt-1.5' : 'mt-5'} flex items-end justify-between`}>
                <span className="flex items-center gap-x-0.5 text-slate-500 dark:text-primary-light/70 text-sm">
                    <svg className="w-5 h-5">
                        <use href="#users"></use>
                    </svg>
                    {Props.buyer}   
                </span>
                {/* <!-- Price --> */}
                <div className="flex flex-col">
                    <span className={`${(Props.available && Props.discount) ? '' : 'hidden' } text-sm text-slate-500 dark:text-primary-light/70 -mb-1.5 line-through`}>
                        {FormatNumber(Props.price)}                  
                    </span>
                    <span className={`${Props.available ? '' : 'hidden'} flex items-center gap-1 text-primary font-DanaBold text-base xl:text-lg`}>
                        {Props.discount ? FormatNumber(calcDiscountPrice(Props.price,Props.discount)) : FormatNumber(Props.price) } 
                        <svg className="w-3.5 h-3.5">
                            <use href="#toman"></use>
                        </svg>                    
                    </span>
                    <span className={`${Props.available ? 'hidden' : '' } text-red-600 dark:text-red-500 text-sm lg:text-base mt-[1.1rem] line-clamp-1 mr-1.5`}>فعلا موجود نیست</span>
                </div>
            </div>
        </div>
    </div>
  )
}
