import React,{useState,useEffect} from 'react'
import Aside from './../Common/Aside'
import DashboardHeader from './../Common/DashboardHeader'
import { Outlet } from 'react-router-dom'
import apiRequests from './../../../../Services/Axios/Configs/Configs'
import Alert from './../../../Utils/Alert'

export default function UserDashboardPage() {

  const userId = localStorage.getItem('id');
  const AsideItem = [
    {id:1,name:"پنل کاربری",link:"main-panel",icon:'squares-2x2'},
    {id:2,name:"کتاب های من",link:"my-books",icon:'book-open'},
    {id:3,name:"چت های من",link:"my-chats",icon:'chat-bubble-left-right'},
    {id:4,name:"کیف پول و تراکنش ها",link:"my-orders",icon:'wallet'},
    {id:5,name:"تیکت ها",link:"my-tickets",icon:'chat-bubble-bottom-center-text'},
    {id:6,name:"ویرایش حساب",link:"edit-account",icon:'pencil-square'},
]

  const [user,setUser] = useState()
  const [userBooks,setUserBooks] = useState([])
  const [selfChats,setSelfChats] = useState([])
  const [otherChats,setOtherChats] = useState([])

  const fetchData = async () => {
    try {
      const response = await apiRequests.get(`/users/${userId}`);     
      const responseUserBook = await apiRequests.get(`/userBooks?createdBy.id=${userId}`);
      const responseSelfChats = await apiRequests.get(`/chats?participants[0].id=${userId}`);
      const responseOtherChats = await apiRequests.get(`/chats?participants[1].id=${userId}`);
      setUser(response.data);
      setUserBooks(responseUserBook.data)
      setSelfChats(responseSelfChats.data)
      setOtherChats(responseOtherChats.data)
      
    } catch (error) {
      Alert('error',"Error fetching data users")
    }
  };
  useEffect(() => {
    fetchData();
    document.body.classList = 'bg-gray-100 dark:bg-gray-900' 

  }, []);
  
  return (
    <div className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 font-Dana">
        <section className="flex md:pr-67">
            <Aside items={AsideItem}/>
            <section className="w-full">
              <DashboardHeader/>
              {
                user && 
                <Outlet context={[user,userBooks,[...selfChats,...otherChats]]} />
              }
            </section> 
        </section>
    </div>
  )
}
