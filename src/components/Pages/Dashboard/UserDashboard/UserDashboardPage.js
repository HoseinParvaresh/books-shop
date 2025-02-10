import React,{useState,useEffect} from 'react'
import Aside from './../Common/Aside'
import DashboardHeader from './../Common/DashboardHeader'
import { Outlet } from 'react-router-dom'
import apiRequests from './../../../../Services/Axios/Configs/Configs'
import Alert from './../../../Utils/Alert'
import { userId } from '../../../Utils/helperFunction'

export default function UserDashboardPage() {

  const [user,setUser] = useState()
  const [userBooks,setUserBooks] = useState([])
  const [selfChats,setSelfChats] = useState([])
  const [otherChats,setOtherChats] = useState([])
  const [asideMenuItem,setAsideMenuItem] = useState()

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRequests.get(`/users/${userId}`);     
        const responseUserBook = await apiRequests.get(`/userBooks?createdBy.id=${userId}`);
        const responseSelfChats = await apiRequests.get(`/chats?participants[0].id=${userId}`);
        const responseOtherChats = await apiRequests.get(`/chats?participants[1].id=${userId}`);
        const responseOtherAsideItems = await apiRequests.get(`/asideMenuItems`);
  
        setUser(response.data);
        setUserBooks(responseUserBook.data)
        setSelfChats(responseSelfChats.data)
        setOtherChats(responseOtherChats.data)
        setAsideMenuItem(responseOtherAsideItems.data)
        
      } catch (error) {
        Alert('error',"Error fetching data users")
      }
    };
    fetchData();
    document.body.classList = 'bg-gray-100 dark:bg-gray-900'
  }, []);
  
  return (
    asideMenuItem && 
    <div className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 font-Dana">
        <section className="flex md:pr-67">
            <Aside items={asideMenuItem.userDashboard}/>
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
