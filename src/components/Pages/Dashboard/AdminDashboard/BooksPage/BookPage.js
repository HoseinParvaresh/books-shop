import React,{useEffect} from 'react'
import StatusOverview from '../../Common/StatusOverview';
import AccountOverviewSection from '../../Common/AccountOverviewSection';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { calcDiscountPrice,FormatNumber } from '../../../../Utils/helperFunction';

export default function BookPage() {

    const [books,users,userBook,menus,chats] = useOutletContext();

    useEffect(() => {
        document.getElementById('aside-btn-2').classList.add('aside-btn--active')        
      }, []);

  return (
    <main className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
        <StatusOverview button={{text:'ثبت کتاب جدید',link:'/admin-dashboard/add-book'}} 
            items={[
                    {id:1,icon:'#book-buy',text:'تعداد کتاب ها',value:books.length},
                    {id:2,icon:'#all-ticket',text:'کتاب های تخفیف دار',value:[...books.filter(book => book.discount)].length},
                    {id:3,icon:'#bookmark',text:'کتاب های ناموجود',value:[...books.filter(book => !book.available)].length},
                ]}/>
        {/* Overview Section / inputs / buttons */}
        <div className="block mt-6 md:mt-10">
            <AccountOverviewSection items={[
                        {id:1,title:'کتاب ها'},
                ]}/>
        </div>
        {/* books table */}
        <div className="h-96 scroll-style">
            {/* table */}
            <div className="relative dir-ltr overflow-x-scroll lg:overflow-auto">
                <table className="table">
                    {/* head */}
                    <thead className="table__head">
                        <tr>
                            <th className="table__head--row"></th>
                            <th className="table__head--row">موجودی</th>
                            <th className="table__head--row">وضعیت کتاب</th>
                            <th className="table__head--row">تعداد خریداران</th>
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
                            books.reverse().map((book,index) => (
                                <tr className="table__body--row" key={index}>
                                    <td className='text-white'>
                                        <button className='rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition-colors'>حذف</button>
                                        <button className='rounded-md px-2 py-1 bg-yellow-500 ml-2 hover:bg-yellow-600 transition-colors'>ویرایش</button>
                                    </td>
                                    <td className='flex justify-center'>{book.available ? <svg className="size-5 text-green-500"><use href="#check-circle"></use></svg> : <svg className="size-5 text-red-500"><use href="#x-circle-fill"></use></svg>}</td>
                                    <td>{book.status}</td>
                                    <td>{book.buyer}</td>
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
        </div>
    </main>
  )
}
