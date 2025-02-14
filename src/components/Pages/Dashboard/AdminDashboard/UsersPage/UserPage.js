import React,{useEffect} from 'react'
import StatusOverview from '../../Common/StatusOverview';
import { useOutletContext } from 'react-router-dom';
import UsersTable from './UsersTable';

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
        {/* user table */}
        <UsersTable users={users}/>
    </main>
  )
}
