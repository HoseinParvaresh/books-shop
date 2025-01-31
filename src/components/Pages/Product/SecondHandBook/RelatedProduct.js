import React from 'react'
import { Link } from 'react-router-dom';

export default function RelatedProduct(Props) {
    
  return (
    <div className="product shadow-normal flex flex-col dark:text-primary-light bg-primary-light dark:bg-[#242A38] border border-neutral-100 dark:border-none rounded-2xl">
        {/* <!-- product Banner --> */}
        <div className="relative h-42 group">
            <Link className="block w-full h-full" to={`/book/${Props.id}`} title={Props.title}>
                <img className="block w-full h-60 object-cover rounded-2xl" src={Props.image1} alt={Props.title} loading='lazy'/>
            </Link>
        </div>
        {/* <!-- product Title & Description --> */}
        <div className="flex-grow px-4.5 pt-4 pb-3">
            {/* <!-- product Title --> */}
            <h3 className="font-DanaBold line-clamp-1 mb-3">
                <Link to={`/product/${Props.id}`}> {Props.title} </Link>
            </h3>
            {/* <!-- product Description --> */}
            <p className="text-sm line-clamp-2 opacity-70">{Props.summary}</p>
        </div>
        {/* <!-- product Footer --> */}
        <div className="px-4.5 pb-3">
            {/* <!-- Teacher & Rating --> */}
            <div className="flex justify-between gap-2.5 text-slate-500 dark:text-primary-light/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-primary-light/10">
            </div>
            {/* Price */}
            <Link to={`/book/${Props.id}`} className='button-primary button-xl w-full h-11 mt-5' > مشاهده محصول</Link>
        </div>
    </div>
  )
}
