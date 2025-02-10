import React from 'react'
import NoComment from './NoComment'
import CommentHead from './CommentHead'

export default function Comment(Props) {

  return (
    <div className="bg-primary-light dark:bg-primary-dark rounded-2xl p-4.5 sm:p-5 mt-8" id="course-comments">	
        <CommentHead/>
        {/* <!-- Comment List Container --> */}
        <div className="comments_wrap space-y-4.5 sm:space-y-5">
          {/* <!-- Comments --> */}
          {/* When there is no comment, the "NoComment" component is rendered, and when there is a comment, the "CommentList" component is rendered. */}
          {
            // Props.comment.length > 0 ?
            // <CommentList comments={Props.comment}/> :
            <NoComment/>
          }
          
          {/* <!-- Load more --> */}
          {/* When there are more than 3 comments, the button below will be show and by clicking on the button, the rest of the comments will be displayed. */}
          <button data-id="56" type="button" className="show-more hidden button-xl button-primary w-full sm:w-auto mt-5 mx-auto">
                مشاهده بیشتر
                <svg className="show-more__icon w-6 h-6">
                  <use href="#chevron-down"></use>
                </svg>
                <svg className="show-more__loading hidden w-6 h-6 animate-spin animate-reverse">
                  <use href="#refresh"></use>
                </svg>
          </button>
        </div>
		</div>	
  )
}
