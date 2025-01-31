import React,{useState,useEffect} from 'react'
import ChatBubble from './ChatBubble';
import { useParams } from 'react-router-dom'
import apiRequests from '../../../Services/Axios/Configs/Configs';
import Alert from '../../Utils/Alert';
import { Mosaic } from 'react-loading-indicators';
import { checkLogin } from '../../Utils/helperFunction';
import { Link } from 'react-router-dom';

export default function Main() {


    const [chat,setChat] = useState()
    const [messageValue,setMessageValue] = useState('')
    const [userId] = useState(localStorage.getItem('id'))
    const [loading,setLoading] = useState(false)
    const [bookData,setBookData] = useState([])

    let params = useParams()
  
    const fetchData = async () => {
      try {
        const response = await apiRequests.get(`/chats/${params.id}`);      
        const responseBook = await apiRequests.get(`/userBooks/${params.id.slice((params.id.indexOf('-')) + 1)}`)
        setChat(response.data);
        setBookData(responseBook.data)
      } catch (error) {
        Alert('error',"Error fetching chats")
      }
    };
    useEffect(() => {
        setInterval(()=> {
            fetchData();
            setLoading(true)
        }, 2000);
    }, []);

    const sendMessage = () => {

        const updatedMessages = [...chat.messages, {
            message_id: (chat.messages.length + 1).toString(),
            sender_id: userId,
            content: messageValue,
            timestamp: new Date()
          }];
        if(messageValue) {
            apiRequests.patch(`/chats/${params.id}`,{ messages: updatedMessages }).then(res=> {
                setMessageValue('')
            })
        } 
    }
    
  return (
    loading && checkLogin() ? 
    (                             
        <>
        {   
            chat &&
            <div className="flex-1 bg-secondary-light text-black dark:text-white dark:bg-secondary-dark p-3 px-4 md:px-36 sm:py-8 lg:px-56 flex flex-col h-screen font-Dana">
                {/* top => name & profile / icon */}
                <div className='flex items-center justify-between py-3'>
                    {/* name / profile */}
                    <div className="relative flex items-center gap-x-2">
                        {/* profile */}
                        <img src={bookData.image1} alt={bookData.title} className="size-10 md:size-16 rounded-xl"/>
                        {/* name */}
                        <Link to={`/user-book/${bookData.id}`} className="flex flex-col leading-tight text-base md:text-xl">
                            <span className="mr-3">{bookData.title}</span>
                        </Link>
                    </div>
                    {/* icon */}
                    {/* <svg className="w-6 h-6 cursor-pointer">
                        <use href="#ellipsis-vertical"></use>
                    </svg> */}
                    <div className='shadow rounded-full'>
                        
                    </div>
                </div>
                {/* middle => message section(chat bubble) */}
                <div id="messages" className="bg-primary-light dark:bg-primary-dark flex flex-col h-screen space-y-4 p-3 pt-5 overflow-y-auto rounded-xl md:rounded-2xl scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    {chat.messages.length > 0 ?
                    (
                        chat.messages.map((message,index) => (
                            <ChatBubble key={index} userId={userId} participants={chat.participants} {...message}/>
                        ))
                    ) :
                    (
                        <div className='w-full h-full flex-center'>
                            <p className='bg-secondary-light dark:bg-slate-500 dark:text-black p-5 font-Morabba text-xl rounded-xl'> هنوز هیچ پیامی ارسال نشده </p>
                        </div>
                    )
                    }
                </div>
                {/* bottom => input message / send button */}
                <div className="px-4 pt-4 mb-5 sm:mb-0">
                    {/* input message / send button */}
                    <div className="relative flex">
                        {/* input message */}
                        <input type="text" placeholder="پیامت رو بنویس!" value={messageValue} onChange={(e)=> setMessageValue(e.target.value)} className="w-full focus:outline-none placeholder-gray-400 text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 pr-28 pl-3 rounded-md py-3"/>
                        {/* send button */}
                        <div className="absolute right-0 items-center inset-y-0">
                            <button onClick={sendMessage} type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                </svg>
                                <span className="font-bold">ارسال</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    ) : 
    (
        <div className='h-screen w-screen flex-center'>
            <Mosaic color="#32cd32" size="medium" text="" textColor="" />
        </div>
    )
  )
}
