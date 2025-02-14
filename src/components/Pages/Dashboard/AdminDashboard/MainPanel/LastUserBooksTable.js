import React from 'react'
import { calcRelativeTimeDifference } from '../../../../Utils/helperFunction'
import { Link } from 'react-router-dom'

export default function LastUserBooksTable({userBook}) {
  return (
    <div className="overflow-hidden col-span-12 lg:col-span-12">
                {/* title */}
                <div className='table__title'>
                    <p className='font-DanaBold'>جدید ترین کتاب های کاربران</p>
                    <a href='/admin-dashboard/user-books' className='text-sm text-sky-500 flex items-center justify-center gap-2 hover:text-sky-600'>
                        مشاهده همه
                        <svg className="size-4">
                            <use href="#chevron-left"></use>
                        </svg>
                    </a>
                </div>
                {/* table */}
                <div className="relative dir-ltr overflow-x-scroll lg:overflow-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="table__head">
                            <tr>
                                <th className="table__head--row">وضعیت</th>
                                <th className="table__head--row">ساخته شده توسط (شناسه)</th>
                                <th className="table__head--row">ساخته در</th>
                                <th className="table__head--row">عنوان  کتاب</th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody className="table__body">
                            {
                                userBook.slice(0,5).map((book,index) => (
                                <tr className="table__body--row" key={index}>
                                    <td className="flex justify-center">
                                        <svg className={`size-5 ${book.review_status === 'approved' ? 'text-green-500' : book.review_status === 'rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                                            <use href={`${book.review_status === 'approved' ? '#check-circle' : book.review_status === 'rejected' ? '#x-circle-fill' : '#question-mark-circle-fill'}`}></use>
                                        </svg>
                                    </td>
                                    <td>{book.createdBy.id}</td>
                                    <td className='dir-rtl'>{`${calcRelativeTimeDifference(book.createdAt)} در ${book.province}`}</td>
                                    <td><Link to={`/user-book/${book.id}`}>{book.title}</Link></td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
  )
}
