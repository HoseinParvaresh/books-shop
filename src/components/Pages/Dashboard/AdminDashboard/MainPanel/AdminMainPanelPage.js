import React,{useEffect} from 'react'
import AccountStatus from '../../Common/AccountStatus'
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { calcDiscountPrice,FormatNumber,calcRelativeTimeDifference } from '../../../../Utils/helperFunction';

export default function AdminMainPanelPage() {

    const [books,users,userBook] = useOutletContext()
    
    useEffect(() => {
        document.getElementById('aside-btn-1').classList.add('aside-btn--active')        
      }, []);

  return (
    <main className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
        {/* account status section (dashboard overview) */}
        <div className="flex items-center justify-between gap-y-6 flex-wrap font-DanaBold bg-primary-light dark:bg-primary-dark py-5 px-5 sm:px-8 rounded">
            <AccountStatus items={[
                {id:1,title:"کتاب ها",text:`${books.length} کتاب`,icon:"book-buy"},
                {id:2,title:"کاربران",text:`${users.length} کاربر`,icon:"all-ticket"},
                {id:3,title:"کتاب های کاربران",text:`${userBook.length} کتاب`,icon:"bookmark"},
                {id:4,title:"تیکت ها",text:`${0} تیکت`,icon:"credit"},
            ]}/>
        </div>
        <div className='grid grid-cols-12 mt-7 gap-7'>
            {/* The newest users table => title / table */}
            <div className="overflow-hidden col-span-12 lg:col-span-5">
                {/* title */}
                <div className='table__title'>
                    <p className='font-DanaBold'>جدید ترین کاربران</p>
                    <Link to={'/admin-dashboard/users'} className='text-sm text-sky-500 flex items-center justify-center gap-2 hover:text-sky-600'>
                        مشاهده همه
                        <svg className="size-4">
                            <use href="#chevron-left"></use>
                        </svg>
                    </Link>
                </div>
                {/* table */}
                <div className="relative dir-ltr overflow-x-scroll lg:overflow-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="table__head">
                            <tr>
                                <th className="table__head--row">شماره تلفن</th>
                                <th className="table__head--row">نام کاربری</th>
                                <th className="table__head--row">شناسه</th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody className="table__body">
                            {
                                users.slice(-5).reverse().map((user,index) => (
                                <tr className="table__body--row" key={index}>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.id}</td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Latest books table => title / table  */}
            <div className="overflow-hidden col-span-12 lg:col-span-7">
                {/* title */}
                <div className='table__title'>
                    <p className='font-DanaBold'>آخرین کتاب ها</p>
                    <Link to={'/admin-dashboard/users'} className='text-sm text-sky-500 flex items-center justify-center gap-2 hover:text-sky-600'>
                        مشاهده همه
                        <svg className="size-4">
                            <use href="#chevron-left"></use>
                        </svg>
                    </Link>
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
                                books.slice(-5).reverse().map((book,index) => (
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
            {/* Latest user books table => title / table */}
            <div className="overflow-hidden col-span-12 lg:col-span-12">
                {/* title */}
                <div className='table__title'>
                    <p className='font-DanaBold'>جدید ترین کتاب های کاربران</p>
                    <Link to={'/admin-dashboard/users'} className='text-sm text-sky-500 flex items-center justify-center gap-2 hover:text-sky-600'>
                        مشاهده همه
                        <svg className="size-4">
                            <use href="#chevron-left"></use>
                        </svg>
                    </Link>
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
                                userBook.slice(-5).reverse().map((book,index) => (
                                <tr className="table__body--row" key={index}>
                                    <td className="flex justify-center">{book.review_status === 'pending'  ? <svg className="size-5 text-yellow-500">
                                                                                                                <use href="#question-mark-circle-fill"></use>
                                                                                                            </svg> :
                                                                         book.review_status === 'approved' ? <svg className="size-5 text-green-500">
                                                                                                                <use href="#check-circle"></use>
                                                                                                            </svg> 
                                                                                                          : 
                                                                                                            <svg className="size-5 text-red-500">
                                                                                                                <use href="#x-circle-fill"></use>
                                                                                                            </svg>}
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
        </div>
    </main>
  )
}
