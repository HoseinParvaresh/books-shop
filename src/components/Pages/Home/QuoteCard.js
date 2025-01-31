import React from 'react'
import { Link } from 'react-router-dom';

export default function BookQuoteCard(Props) {

  const book = Props.book
  const bookQuote = Props.bookQuote
  
  return (
    <div className="flex items-center justify-center flex-col xs:items-start xs:justify-start xs:flex-row gap-5 py-4 px-4 md:px-6 bg-white dark:bg-primary-dark rounded-lg select-none text-black dark:text-white">
      <img className="rounded-full size-20" src={book ? book.author.image : Props.image} alt={book ? book.author.name : Props.authorName} loading="lazy"/>
      <div className="flex flex-col gap-1 text-center xs:text-start">
        <div className="font-Morabba text-sm sm:text-base h-18 xs:h-17"> {bookQuote ? bookQuote.text : Props.text} </div>
        {book ? (
            <Link to={`/book/${book.id}`} className="font-Dana text-sm text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70">{book.author.name} | {book.title}</Link>
          ) : (
            <span className="font-Dana text-sm text-black/50 dark:text-white/50">{Props.authorName}</span>
          )
        }
      </div>
    </div>
  )
}
