import React from 'react'

export default function CommentList(Props) {
  
  return (
      Props.comments.map((comment,index)=> (
        <div key={index} id={`comment-${comment.id}`} className="p-4.5 md:p-5 bg-gray-100 dark:bg-primary-darker rounded-xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-b-neutral-200/60 dark:border-white/10">
                <div className="flex items-center gap-x-3.5">
                    <div className="hidden border-b-neutral-200/60 dark:border-white/10 sm:flex-center w-15 h-15 border rounded-full relative">
                        <img src="https://secure.gravatar.com/avatar/2df798968271838f06093bd52185c318?s=96&amp;d=mm&amp;r=g" className="w-12 h-12 block object-cover rounded-full" loading='lazy' alt='profile'/>
                    </div>
                    <span className="inline-block max-w-40 truncate">{comment.name}</span>
                </div>
            </div>
            <p className="font-Dana text-sm sm:text-base break-words">{comment.comment}</p>
        </div>
      ))
  )
}
