import React from 'react'
import { Link } from 'react-router-dom';
import {calcRelativeTimeDifference,findImage} from './../../../Utils/helperFunction'

export default function ProductSwap(Props) {

    const img = findImage(Props.image1,Props.image2,Props.image3,Props.image4,Props.image5)

    
  return (
    <div className="product shadow-normal dark:shadow-normal-dark flex flex-col dark:text-primary-light bg-primary-light dark:bg-[#242A38] border border-neutral-100 dark:border-none rounded-2xl">
        {/* <!-- product Banner --> */}
        <div className="relative h-[282px] group">
            <Link className="block w-full h-full" to={`/user-book/${Props.id}`} title={Props.title}>
                <img className="block w-full h-full object-cover rounded-t-2xl" src={img} alt={Props.title} loading='lazy'/>
            </Link>
        </div>
        {/* <!-- product Title & Description --> */}
        <div className="flex-grow px-4.5 pt-4 pb-3">
            {/* <!-- product Title --> */}
            
            <h3 className="font-DanaBold line-clamp-1 mb-3">
                <Link to={`/user-book/${Props.id}`}> {Props.title} </Link>
            </h3>
            {/* <!-- product Description --> */}
            <p className="text-sm line-clamp-2 opacity-70 h-10">{Props.description}</p>
        </div>
        {/* <!-- product Footer --> */}
        <div className="px-4.5 pb-3">
            {/* <!-- author & Rating --> */}
            <div className="flex justify-between gap-2.5 text-slate-500 dark:text-primary-light/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-primary-light/10">
                <div className="flex items-center gap-x-0.5">
                    <p className='line-clamp-1'>{Props.status}</p>
                </div>
                {/* <!-- Rating --> */}
                <div className="flex items-center gap-x-0.5">
                    <svg className="w-5 h-5">
                        <use href="#chat-bubble-oval-left"></use>
                    </svg>
                </div>
            </div>
            {/* Price */}
            <div className={`${Props.discount ? 'mt-1.5' : 'mt-5'} flex items-end justify-between`}>
                <span className="flex items-center gap-x-1 text-slate-500 dark:text-primary-light/70 text-sm">
                    <svg className="w-5 h-5">
                        <use href="#clock"></use>
                    </svg>
                    <span className='line-clamp-1'> {calcRelativeTimeDifference(Props.createdAt)} در {Props.province} </span> 
                </span>
            </div>
        </div>
    </div>
  )
}
