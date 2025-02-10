import React,{useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';
import AccountOverviewSection from './../../Common/AccountOverviewSection';
import { Link } from 'react-router-dom';
export default function MyChatsPage() {

  const [user,userBooks,chats] = useOutletContext()
  

  useEffect(() => {
    document.getElementById('aside-btn-3').classList.add('aside-btn--active')        
  }, []);

  return (
    <main className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
      <div className="block mt-6 md:mt-10">
          <AccountOverviewSection items={[
                    {id:1,title:'چت های من'},
            ]}/>
      </div>
      {/* chat item */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {
          chats.length > 0 ?

          chats.map(chat => (
            chat.messages.length > 0 &&
            <div key={chat.id} className='flex justify-between p-3 gap-4 bg-primary-light dark:bg-primary-dark rounded-lg'>
            {/* image / title / description /username */}
            <div className='flex gap-5'>
              {/* image */}
              <Link to={`/chat/${chat.id}`}><img className='size-20 object-cover' src={chat.book.image} alt="" /></Link>
              {/* title / description /username */}
              <div className='flex flex-col justify-between'>
                {/* title */}
                <Link to={`/chat/${chat.id}`} className='line-clamp-1 text-bse'> {chat.book.title} </Link>
                {/* message */}
                <p className='line-clamp-1 text-sm text-black/50 dark:text-white/50'>  {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].content : ''} </p>
                {/* username */}
                <p className='text-xs line-clamp-1'> {chat.participants[0].id === localStorage.getItem('id') ? chat.participants[1].name : chat.participants[0].name} </p>
              </div>
            </div>
            {/* button */}
            <Link to={`/chat/${chat.id}`} className="flex items-center gap-x-1 text-sky-500 text-sm md:text-base font-Dana">
              مشاهده
              <svg className="size-5">
                  <use href="#chevron-left-mini"></use>
              </svg>
            </Link>
            </div>
          )) 
          :
          <div>
            هنوز با کسی چت نکردی!
          </div>
        }
      </div>
    </main>
  )
}
