import React,{useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';
import AccountOverviewSection from './../../Common/AccountOverviewSection';
import MyBooksProduct from './MyBooksProduct';
import StatusOverview from './../../Common/StatusOverview';


export default function MyBooksPage() {

  useEffect(() => {
    document.getElementById('aside-btn-2').classList.add('aside-btn--active')        
  }, []);

  const [user,userBooks] = useOutletContext()
  

  return (
    <main className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
      <StatusOverview button={{text:'ثبت کتاب جدید',link:'/user-dashboard/add-book'}} 
        items={[
                {id:1,icon:'#book-buy',text:'کتاب های تایید شده',value:0},
                {id:2,icon:'#all-ticket',text:'کتاب های در حال بررسی ',value:0},
                {id:3,icon:'#bookmark',text:'کتاب های رد شده ',value:0},
              ]}/>
      {/* Overview Section / inputs / buttons */}
      <div className="block mt-6 md:mt-10">
          <AccountOverviewSection items={[
                    {id:1,title:'کتاب های من'},
              ]}/>
      </div>
      {/* books */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:pr-5">       
        {userBooks.length > 0 ?
          userBooks.map((book,index) => (
            <MyBooksProduct key={index} book={book}/>
          )) 
          : 
          <span> هنوز کتابی ثبت نکردی! </span>
        }
      </div>
    </main>
  )
}
