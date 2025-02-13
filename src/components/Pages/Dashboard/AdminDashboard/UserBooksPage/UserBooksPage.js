import React,{useEffect} from 'react'
import StatusOverview from '../../Common/StatusOverview';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { calcRelativeTimeDifference } from '../../../../Utils/helperFunction';

export default function UserBooksPage() {

    const [books,users,userBook] = useOutletContext();

    useEffect(() => {
        document.getElementById('aside-btn-4').classList.add('aside-btn--active')        
      }, []);

  return (
    <main className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
        <StatusOverview button={false} 
            items={[
                    {id:1,icon:'#book-buy',text:'تایید شده',value:[...userBook.filter(book => book.review_status === 'approved')].length},
                    {id:2,icon:'#all-ticket',text:'در انتظار',value:[...userBook.filter(book => book.review_status === 'pending')].length},
                    {id:3,icon:'#bookmark',text:'رد شده',value:[...userBook.filter(book => book.review_status === 'rejected')].length},
                ]}/>
        {/* user books table */}
        <div className="h-[465px] scroll-style mt-10">
            {/* table */}
            <div className="relative dir-ltr overflow-x-scroll lg:overflow-auto">
                <table className="table">
                    {/* head */}
                    <thead className="table__head">
                        <tr>
                            <th className="table__head--row"></th>
                            <th className="table__head--row">وضعیت کتاب</th>
                            <th className="table__head--row">ساخته شده در</th>
                            <th className="table__head--row">ساخته شده توسط (شناسه)</th>
                            <th className="table__head--row">شهر</th>
                            <th className="table__head--row">عنوان  کتاب</th>
                            <th className="table__head--row">شناسه</th>
                            <th className="table__head--row">ردیف</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody className="table__body">
                        {
                            userBook.reverse().map((book,index) => (
                                <tr className="table__body--row" key={index}>
                                    <td className='text-white'>
                                        <button className='rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition-colors'>حذف</button>
                                        <button className='rounded-md px-2 py-1 bg-yellow-500 ml-2 hover:bg-yellow-600 transition-colors'>ویرایش</button>
                                        <button className='rounded-md px-2 py-1 bg-green-500 ml-2 hover:bg-green-600 transition-colors'><Link to={`/user-book/${book.id}`}>مشاهده</Link></button>
                                    </td>
                                    <td className='flex justify-center'>{book.review_status === 'approved' ? <svg className="size-5 text-green-500"><use href="#check-circle"></use></svg> : 
                                                                            book.review_status === 'rejected' ? <svg className="size-5 text-red-500"><use href="#x-circle-fill"></use></svg> :
                                                                                                                    <svg className="size-5 text-yellow-500"><use href="#question-mark-circle-fill"></use></svg>}</td>
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
        </div>
    </main>
  )
}
