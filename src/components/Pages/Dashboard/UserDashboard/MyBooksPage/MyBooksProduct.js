import React from 'react'
import {calcRelativeTimeDifference,findImage} from './../../../../Utils/helperFunction'

export default function MyBooksProduct({book}) {

    const img = findImage(book.image1,book.image2,book.image3,book.image4,book.image5)
    
  return (
    <div className="flex flex-col bg-white dark:bg-primary-dark px-3 pt-3 rounded">
          <div className="relative aspect-video -mx-3 -mt-3 mb-3">
            <img src={img} className="size-full object-cover rounded h-40" alt={book.title}/>
            <a href={`/user-book/${book.id}`} target="_blank">
                <svg className="size-16 md:size-21 absolute inset-0 m-auto text-gray-100">
                    <use href="#play-circle-solid"></use>
                </svg>
            </a>
          </div>
          <a href={`/user-book/${book.id}`} className="block h-12 md:h-14 text-sm md:text-base line-clamp-2 font-DanaBold">{book.title}</a>
          <div className="flex justify-between gap-2.5 text-slate-500 dark:text-white/70 text-sm pb-3 mt-3">
              <div className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
                  <svg className="size-5">
                      <use href="#clock"></use>
                  </svg>
                  <span className='line-clamp-1'> {calcRelativeTimeDifference(book.createdAt)} در {book.province} </span> 
              </div>
          </div>
        </div>
  )
}
