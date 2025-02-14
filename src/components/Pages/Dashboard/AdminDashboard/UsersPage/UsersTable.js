import React from 'react'
import { calcRelativeTimeDifference } from '../../../../Utils/helperFunction';

export default function UsersTable({users}) {
  return (
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
  )
}
