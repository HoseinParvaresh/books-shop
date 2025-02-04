import React,{useEffect} from 'react'
import AccountStatus from '../../Common/AccountStatus'
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NewestUserItem from './NewestUserItem';

export default function AdminMainPanelPage() {

    const [books,users,userBook,menus,chats] = useOutletContext()
    
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
        <div className='flex mt-7'>
            {/* The newest users section */}
            <div className='p-4 bg-primary-light dark:bg-primary-dark w-96 rounded'>
                {/* head => title / button */}
                <div className='flex justify-between items-center mb-3 pb-3 border-b border-black/10 dark:border-white/10'>
                    {/* title */}
                    <p className='font-DanaBold'>جدیدترین کاربران</p>
                    {/* button */}
                    <Link to={'/admin-dashboard/users'} className='button-primary button-xs'>
                        مشاهده همه
                        <svg className="size-4">
                            <use href="#chevron-left"></use>
                        </svg>
                    </Link>
                </div>
                {/* newest users */}
                <div className='flex flex-col gap-y-3 px-2 py-1'>
                    {
                        users.slice(-5).reverse().map((user)=>(
                            <NewestUserItem {...user}/>
                        ))
                    }
                </div>
                
            </div>
        </div>
    </main>
  )
}
