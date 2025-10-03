import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isLogin,userSignOut,isAdmin } from '../../../../Utils/helperFunction';
import DashboardLink from './DashboardLink';
export default function SignUp() {


    const [toggle,setToggle] = useState('hide')
    const [userName] = useState(localStorage.getItem('name'));

    const signupButtonHandler = () => {
        toggle === 'hide' ?
        setToggle('show') :
        setToggle('hide')
    }

  return (
    isLogin ? (
            <>
                {/* overlay */}
                <div onClick={signupButtonHandler} className={`overlay ${toggle}`}></div>
                {/* icon and drop down => user profile */}
                <div className="relative group z-10">
                    {/* <!-- icon => When Click Box Showing --> */}
                    <button onClick={signupButtonHandler} type="button" className="button-lg md:button-xl only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
                        <svg className="size-5.5 md:size-6">
                            <use href="#user"></use>
                        </svg>
                    </button>
                    {/* <!-- drop down --> */}
                    <div className={`absolute -left-12 xxs:left-0 transition-all pt-5 z-10 ${toggle}`}>
                        {/* drop down */}
                        <div className="w-[278px] bg-primary-light dark:bg-primary-dark border border-neutral-100 dark:border-0 p-5 pb-3.5 rounded-xl">
                            {/* <!-- User Info => profile / username / credit --> */}
                            <div className="flex items-center border-b border-b-neutral-200 dark:border-b-white/5 pb-5 mb-2">
                                {/* profile */}
                                <div className="shrink-0">
                                    <img src="https://secure.gravatar.com/avatar/2df798968271838f06093bd52185c318?s=96&d=mm&r=g" alt={userName} className="object-cover w-14 h-14 rounded-full inline-block" loading="lazy"/>
                                </div>
                                {/* username / credit */}
                                <div className="mr-3.5 flex flex-col gap-y-3 overflow-hidden">
                                    <span className="font-DanaBold inline-block truncate">{userName}</span>
                                    <span className="text-sm font-Dana text-primary inline-block">موجودی: 0&nbsp;<span>تومان</span></span>
                                </div>
                            </div>
                            {/* <!-- Dashboard Links --> */}

                            {isAdmin ? (
                                <>
                                    <DashboardLink title={'پیشخوان'} link={'/admin-dashboard/main-panel'} icon={'#home'}/>
                                    <DashboardLink title={'کاربران'} link={'/admin-dashboard/users'} icon={'#user-group'}/>
                                    <DashboardLink title={'کتاب ها'} link={'/admin-dashboard/books'} icon={'#book-open'}/>
                                    <DashboardLink title={'کتاب های کاربران'} link={'/admin-dashboard/user-books'} icon={'#folder-open'}/>
                                </>
                            ) : (
                                <>
                                    <DashboardLink title={'پیشخوان'} link={'/user-dashboard/main-panel'} icon={'#home'}/>
                                    <DashboardLink title={'کتاب های من'} link={'/user-dashboard/my-books'} icon={'#book-open'}/>
                                    <DashboardLink title={'چت های من'} link={'/user-dashboard/my-chats'} icon={'#chat-bubble-left-right'}/>
                                    <DashboardLink title={'جزئیات حساب'} link={'/user-dashboard/edit-account'} icon={'#user'}/>
                                </>
                            )}

                            {/* <!-- Logout Link --> */}
                            <div className="mt-2 pt-2 border-t border-t-neutral-200 dark:border-t-white/5 cursor-pointer">
                                <div onClick={userSignOut} className="flex items-center justify-between px-2.5 h-12 rounded-lg hover:text-white hover:bg-red-500 transition-colors">
                                    <span className="flex items-center gap-x-2">
                                        <svg className="w-6 h-6">
                                            <use href="#power"></use>
                                        </svg>
                                        خروج
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    ) : (
            <Link to={'/register'} className="button-xl h-11 button-primary">
                <svg className="w-6 h-6 hidden xs:block">
                    <use href="#user"></use>
                </svg>
                ورود | عضویت
            </Link>
    )
  )
}
