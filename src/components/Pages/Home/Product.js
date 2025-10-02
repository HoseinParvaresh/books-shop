import React from 'react'
import { Link } from 'react-router-dom';
import { FormatNumber, calcDiscountPrice } from '../../Utils/helperFunction'

export default function Product(Props) {

    return (
        // <div className="product shadow-normal dark:shadow-normal-dark flex flex-col dark:text-primary-light bg-primary-light dark:bg-primary-dark border border-neutral-100 dark:border-none rounded-2xl">
        //     {/* <!-- product Banner --> */}
        //     <div className="relative h-[282px] group">
        //         <Link className="block w-full h-full" to={`/book/${Props.id}`} title={Props.title}>
        //             <img className="block w-full h-full object-cover rounded-t-2xl" src={Props.image1} alt={Props.title} loading='lazy'/>
        //         </Link>
        //         {/* <!-- Offer percent  --> */}
        //         <span className={`${Props.available && Props.discount ? '' : 'hidden'} absolute right-4 top-3 flex-center w-12 h-7 bg-primary text-white font-danaMedium text-sm rounded-full`}>{Props.discount}%</span>
        //     </div>
        //     {/* <!-- product Title & Description --> */}
        //     <div className="flex-grow px-4.5 pt-4 pb-3">
        //         {/* <!-- product Title --> */}
        //         <h3 className="font-DanaBold line-clamp-1 mb-3">
        //             <Link to={`/book/${Props.id}`}> {Props.title} </Link>
        //         </h3>
        //         {/* <!-- product Description --> */}
        //         <p className="text-sm line-clamp-2 opacity-70">{Props.summary}</p>
        //     </div>
        //     {/* <!-- product Footer --> */}
        //     <div className="px-4.5 pb-3">
        //         {/* <!-- author & Rating --> */}
        //         <div className="flex justify-between gap-2.5 text-slate-500 dark:text-primary-light/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-primary-light/10">
        //             <div className="flex items-center gap-x-0.5">
        //                 <p className='line-clamp-1'>{Props.author.name}</p>
        //             </div>
        //             {/* <!-- Rating --> */}
        //             <div className="flex items-center gap-x-0.5 text-amber-500">
        //                 <span className="font-Dana">{Props.rate}</span>
        //                 <svg className="w-5 h-5">
        //                     <use href="#star-mini"></use>
        //                 </svg>
        //             </div>
        //         </div>
        //         {/* Price */}
        //         <div className={`${Props.discount ? 'mt-1.5' : 'mt-5'} flex items-end justify-between`}>
        //             <span className="flex items-center gap-x-0.5 text-slate-500 dark:text-primary-light/70 text-sm">
        //                 <svg className="w-5 h-5">
        //                     <use href="#users"></use>
        //                 </svg>
        //                 {Props.buyer}   
        //             </span>
        //             {/* <!-- Price --> */}
        //             <div className="flex flex-col">
        //                 <span className={`${(Props.available && Props.discount) ? '' : 'hidden' } text-sm text-slate-500 dark:text-primary-light/70 -mb-1.5 line-through`}>
        //                     {FormatNumber(Props.price)}                  
        //                 </span>
        //                 <span className={`${Props.available ? '' : 'hidden'} flex items-center gap-1 text-primary font-DanaBold text-base xl:text-lg`}>
        //                     {Props.discount ? FormatNumber(calcDiscountPrice(Props.price,Props.discount)) : FormatNumber(Props.price) } 
        //                     <svg className="w-3.5 h-3.5">
        //                         <use href="#toman"></use>
        //                     </svg>                    
        //                 </span>
        //                 <span className={`${Props.available ? 'hidden' : '' } text-red-600 dark:text-red-500 text-sm lg:text-base mt-[1.1rem] line-clamp-1 mr-1.5`}>فعلا موجود نیست</span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='p-3 flex flex-col gap-3 items-center shadow-normal rounded-xl bg-white'>
            {/* discount and timer */}
            <div className='flex items-center justify-between w-full px-1'>
                <span className='bg-red-500 text-white text-xs rounded-full px-2.5 pb-[1.5px] pt-1'>%3</span>
                <div className='flex items-center gap-2'>
                    <div className='text-xs mt-1 text-neutral-900'>
                        <span>20</span> : <span>01</span> : <span>41</span> : <span>55</span>
                    </div>
                    <svg className='size-5 text-black/30'>
                        <use href='#clock'></use>
                    </svg>
                </div>
            </div>
            {/* banner */}
            <div className='h-[234px]'>
                <Link className="size-full" to={`/book/${Props.id}`} title={Props.title}>
                    <img className="size-full object-cover" src={Props.image1} alt={Props.title} loading='lazy' />
                </Link>
            </div>
            {/* title */}
            <p className='self-start my-3 text-black/70 text-sm font-DanaBold'>{Props.title}</p>
            {/* price and basket */}
            <div className='flex w-full justify-between'>
                {/* basket */}
                <div className='flex items-center gap-3'>
                    <div className='rounded-full bg-primary pt-2 pb-2.5 px-2.5 flex-center cursor-pointer'>
                        <svg className='size-6 text-white'>
                            <use href='#shopping-bag'></use>
                        </svg>
                    </div>
                    <p className='text-[13px] max-w-15 text-neutral-700'>افزودن به <span className='text-sm font-DanaBold'>سبدخرید</span></p>
                </div>
                {/* price */}
                <div className='flex items-center gap-1'>
                    <div className='text-sm flex flex-col'>
                        <span className='text-black/40'>{FormatNumber(Props.price)}</span>
                        <span className='text-primary font-DanaBold'>{FormatNumber(calcDiscountPrice(Props.price,Props.discount))}</span>
                    </div>
                    <span className='text-[10px] font-DanaBold text-black/40 rotate-90'>تومان</span>
                </div>
            </div>
        </div>
    )
}
