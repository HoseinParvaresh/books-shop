import React,{useState} from 'react'
import { checkLogin } from '../../../../Utils/helperFunction'

export default function CommentForm() {

const [commentForm,setCommentForm] = useState('hidden')

  const newComment = () => {
    
    if(checkLogin()) {
      commentForm == 'hidden' ?
      setCommentForm('') :
      setCommentForm('hidden')
    }
	}

  return (
    <>
        {/*  Comment Head */}
        <div className="flex items-center justify-between mb-6 sm:mb-7">
          <div className="flex items-center gap-x-3 relative">
            <svg className="inline-block text-red-500 w-7 h-7 md:w-9 md:h-9">
              <use href="#chat-bubble-left-right-fill"></use>
            </svg>
            <div className="font-MorabbaBold text-xl md:text-2xl">نظرات</div>
          </div>
          {/* New Comment Button */}
          <button className="button-xs sm:button-sm button-primary" onClick={newComment} type="button" id="comment-create-btn">
              ایجاد نظر جدید
              <svg className="w-5 h-5">
                <use href="#chat-bubble-bottom-center-text"></use>
              </svg>
          </button>
        </div>
        {/*  Comment Form  */}
        <div className={`mb-10 ${commentForm}`}>
          <div className="flex gap-x-3.5 mb-4.5 sm:mb-5">
            <div className="flex-center p-1.5 border border-gray-100 dark:border-primary-darker rounded-full">
              <div className="flex-center w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 dark:bg-primary-darker rounded-full">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500">
                  <use href="#user-mini"></use>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-Dana">{localStorage.getItem('name')}</span>
              <span className="font-Dana text-sm opacity-70" id="comment-to">ثبت نظر جدید</span>
            </div>
          </div>
          <textarea rows="6" id="comment-textarea" className="w-full outline-none block p-4.5 md:p-4 bg-gray-100 dark:bg-primary-darker text-gray-900 dark:text-primary-light placeholder:text-slate-500/70 font-Dana text-sm rounded-xl" placeholder="نظر خود را بنویسید ..."></textarea>
          <div className="flex gap-x-4 justify-end mt-4.5 sm:mt-6">
            <button onClick={newComment} className="flex-grow sm:grow-0 sm:w-36 button-lg button-primary button-outline" id="comment-cancel-btn">لغو</button>
            <button className="flex-grow sm:grow-0 sm:w-36 button-lg button-primary" id="comment-submit-btn">ارسال</button>
          </div>
        </div>
    </>
  )
}
