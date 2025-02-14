import React from 'react'
import { Link } from 'react-router-dom';
import { calcDiscountPrice,FormatNumber } from '../../../../Utils/helperFunction';

export default function BooksTable({books}) {
  return (
    <div className="relative dir-ltr overflow-x-scroll lg:overflow-auto">
        <table className="table">
            {/* head */}
            <thead className="table__head">
                <tr>
                    <th className="table__head--row"></th>
                    <th className="table__head--row">موجودی</th>
                    <th className="table__head--row">وضعیت کتاب</th>
                    <th className="table__head--row">مقدار تخفیف</th>
                    <th className="table__head--row">قیمت با تخفیف (تومان)</th>
                    <th className="table__head--row">قیمت اصلی (تومان)</th>
                    <th className="table__head--row">عنوان  کتاب</th>
                    <th className="table__head--row">شناسه</th>
                    <th className="table__head--row">ردیف</th>
                </tr>
            </thead>
            {/* body */}
            <tbody className="table__body">
                {
                    books.map((book,index) => (
                        <tr className="table__body--row" key={index}>
                            <td className='text-white'>
                                <button className='rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition-colors'>حذف</button>
                                <button className='rounded-md px-2 py-1 bg-yellow-500 ml-2 hover:bg-yellow-600 transition-colors'>ویرایش</button>
                                <button className='rounded-md px-2 py-1 bg-green-500 ml-2 hover:bg-green-600 transition-colors'><Link to={`/book/${book.id}`}>مشاهده</Link></button>
                            </td>
                            <td className='flex justify-center'>{book.available ? <svg className="size-5 text-green-500"><use href="#check-circle"></use></svg> : <svg className="size-5 text-red-500"><use href="#x-circle-fill"></use></svg>}</td>
                            <td>{book.status}</td>
                            <td>{book.discount ? `${book.discount}%` : 0}</td>
                            <td>{book.discount ? FormatNumber(calcDiscountPrice(book.price,book.discount)) :  FormatNumber(book.price)}</td>
                            <td>{FormatNumber(book.price)}</td>
                            <td><Link to={`/book/${book.id}`}>{book.title}</Link></td>
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
