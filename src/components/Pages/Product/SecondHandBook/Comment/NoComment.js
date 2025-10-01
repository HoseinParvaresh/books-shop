import React from 'react'

export default function NoComment() {
  return (
    <div>
      <div className="no_comment w-full bg-secondary-light dark:bg-secondary-dark flex-center flex-col p-5 rounded-xl">
            <svg className="w-28 h-28">
              <use href="#no-comment"></use>
            </svg>
            <p className='text-slate-400'> هنوز هیچ نظری ثبت نشده </p>
          </div>
    </div>
  )
}
