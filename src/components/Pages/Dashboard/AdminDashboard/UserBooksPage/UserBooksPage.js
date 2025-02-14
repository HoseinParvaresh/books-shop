import React,{useEffect} from 'react'
import StatusOverview from '../../Common/StatusOverview';
import { useOutletContext } from 'react-router-dom';
import UserBooksTable from './UserBooksTable';

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
            <UserBooksTable userBook={userBook}/>
        </div>
    </main>
  )
}
