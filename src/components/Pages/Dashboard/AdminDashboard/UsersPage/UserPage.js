import React,{useEffect} from 'react'
import StatusOverview from '../../Common/StatusOverview';
import { useOutletContext } from 'react-router-dom';
import { calcRelativeTimeDifference } from '../../../../Utils/helperFunction';

export default function BookPage() {

    const [books,users] = useOutletContext();

    useEffect(() => {
      document.getElementById('aside-btn-3').classList.add('aside-btn--active')        
      }, []);

  return (
    <main className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
        <StatusOverview button={false} 
            items={[
                    {id:1,icon:'#book-buy',text:'تعداد کاربران',value: users.length},
                    {id:2,icon:'#all-ticket',text:'کابران ؟؟؟؟',value: 0},
                    {id:3,icon:'#bookmark',text:'کابران مسدود شده',value: 0},
                ]}/>
        {/* books table */}
        <div className="h-[465px] scroll-style mt-10">
            {/* table */}
            <div className="relative dir-ltr overflow-x-scroll lg:overflow-auto">
                <table className="table">
                    {/* head */}
                    <thead className="table__head">
                        <tr>
                            <th className="table__head--row"></th>
                            <th className="table__head--row">ساخته شده در</th>
                            <th className="table__head--row">پسورد </th>
                            <th className="table__head--row">ایمیل </th>
                            <th className="table__head--row">شماره تلفن</th>
                            <th className="table__head--row">نام کاربری</th>
                            <th className="table__head--row">شناسه</th>
                            <th className="table__head--row">ردیف</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody className="table__body">
                        {
                            users.map((user,index) => (
                                <tr className="table__body--row" key={index}>
                                    <td className='text-white'>
                                        <button className='rounded-md px-2 py-1 bg-red-500 hover:bg-red-600 transition-colors'>بن</button>
                                        <button className='rounded-md px-2 py-1 bg-yellow-500 ml-2 hover:bg-yellow-600 transition-colors'>ویرایش</button>
                                    </td>
                                    <td className='dir-rtl'>{calcRelativeTimeDifference(user.createdAt)}</td>
                                    <td>{user.password}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.id}</td>
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
