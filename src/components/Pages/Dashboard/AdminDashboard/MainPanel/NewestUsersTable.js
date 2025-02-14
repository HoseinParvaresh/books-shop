import React from 'react'

export default function NewestUsersTable({users}) {
  return (
    <div className="overflow-hidden col-span-12 lg:col-span-5">
                {/* title */}
                <div className='table__title'>
                    <p className='font-DanaBold'>جدید ترین کاربران</p>
                    <a href='/admin-dashboard/users' className='text-sm text-sky-500 flex items-center justify-center gap-2 hover:text-sky-600'>
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
                                <th className="table__head--row">شماره تلفن</th>
                                <th className="table__head--row">نام کاربری</th>
                                <th className="table__head--row">شناسه</th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody className="table__body">
                            {
                                users.slice(0,5).map((user,index) => (
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
  )
}
