import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { calcRelativeTimeDifference } from '../../../../Utils/helperFunction';
import { changeReviewStatusUserBook } from '../../../../../Services/Axios/Requests/UserBook';

export default function UserBooksTable({userBook}) {

  return (
    <div className="relative dir-ltr overflow-x-scroll lg:overflow-auto">
        <table className="table">
            {/* head */}
            <thead className="table__head">
                <tr>
                    <td className="table__head--row"></td>
                    <td className="table__head--row">وضعیت کتاب</td>
                    <td className="table__head--row">ساخته شده در</td>
                    <td className="table__head--row">ساخته شده توسط (شناسه)</td>
                    <td className="table__head--row">شهر</td>
                    <td className="table__head--row">عنوان  کتاب</td>
                    <td className="table__head--row">شناسه</td>
                    <td className="table__head--row">ردیف</td>
                </tr>
            </thead>
            {/* body */}
            <tbody className="table__body">
                {
                    userBook.map((book,index) => (
                        <tr className="table__body--row" key={index}>
                            <td className='text-white'>
                                <button onClick={()=> changeReviewStatusUserBook(book.id,'rejected')} className={`rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition-colors ${book.review_status === 'rejected' ? 'hidden' : ''}`}>حذف</button>
                                <button className='rounded-md px-2 py-1 bg-yellow-500 ml-2 hover:bg-yellow-600 transition-colors'>ویرایش</button>
                                <button onClick={()=> changeReviewStatusUserBook(book.id,'approved')} className={`rounded-md px-2 py-1 bg-green-500 ml-2 hover:bg-green-600 transition-colors ${book.review_status === 'approved' ? 'hidden' : ''}`}>تایید</button>
                            </td>
                            <td className='flex-center'>
                                <svg className={`size-5 ${book.review_status === 'approved' ? 'text-green-500' : book.review_status === 'rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                                    <use href={`${book.review_status === 'approved' ? '#check-circle' : book.review_status === 'rejected' ? '#x-circle-fill' : '#question-mark-circle-fill'}`}></use>
                                </svg>
                            </td>
                            <td className='dir-rtl'>{calcRelativeTimeDifference(book.createdAt)}</td>
                            <td>{book.createdBy.id}</td>
                            <td>{book.province}</td>
                            <td><Link to={`/user-book/${book.id}`}>{book.title}</Link></td>
                            <td>{book.id}</td>
                            <td>{index+1}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
