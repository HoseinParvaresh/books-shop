import React,{useEffect} from 'react'
import StatusOverview from '../../Common/StatusOverview';
import { useOutletContext } from 'react-router-dom';
import BooksTable from './BooksTable';

export default function BookPage() {

    const [books] = useOutletContext();

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
        {/* books table */}
        <div className="h-[465px] scroll-style mt-10">
            {/* table */}
            <BooksTable books={books}/>
        </div>
    </main>
  )
}
