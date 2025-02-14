import React from 'react'
import { calcDiscountPrice,FormatNumber } from '../../../../Utils/helperFunction';
import { Link } from 'react-router-dom';

export default function LastBooksTable({books}) {
  return (
    <div className="overflow-hidden col-span-12 lg:col-span-7">
                {/* title */}
                <div className='table__title'>
                    <p className='font-DanaBold'>آخرین کتاب ها</p>
                    <a href='/admin-dashboard/books' className='text-sm text-sky-500 flex items-center justify-center gap-2 hover:text-sky-600'>
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
                                <th className="table__head--row">مقدار تخفیف</th>
                                <th className="table__head--row">قیمت با تخفیف (تومان)</th>
                                <th className="table__head--row">قیمت اصلی (تومان)</th>
                                <th className="table__head--row">عنوان  کتاب</th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody className="table__body">
                            {
                                books.slice(0,5).map((book,index) => (
                                <tr className="table__body--row" key={index}>
                                    <td className='flex justify-center'>{book.available ? <svg className="size-5 text-green-500"><use href="#check-circle"></use></svg> : <svg className="size-5 text-red-500"><use href="#x-circle-fill"></use></svg>}</td>
                                    <td>{book.discount ? `${book.discount}%` : 0}</td>
                                    <td>{book.discount ? FormatNumber(calcDiscountPrice(book.price,book.discount)) :  FormatNumber(book.price)}</td>
                                    <td>{FormatNumber(book.price)}</td>
                                    <td><Link to={`/book/${book.id}`}>{book.title}</Link></td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
  )
}
