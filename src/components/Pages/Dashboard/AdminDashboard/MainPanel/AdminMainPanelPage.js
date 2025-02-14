import React,{useEffect} from 'react'
import AccountStatus from '../../Common/AccountStatus'
import { useOutletContext } from 'react-router-dom';
import NewestUsersTable from './NewestUsersTable';
import LastBooksTable from './LastBooksTable';
import LastUserBooksTable from './LastUserBooksTable';

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
        {/* tables */}
        <div className='grid grid-cols-12 mt-7 gap-7'>
            {/* The newest users table => title / table */}
            <NewestUsersTable users={users}/>
            {/* last books table => title / table  */}
            <LastBooksTable books={books}/>
            {/* last user books table => title / table */}
            <LastUserBooksTable userBook={userBook}/>
        </div>
    </main>
  )
}
