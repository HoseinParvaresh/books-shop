import React,{useState,useEffect} from 'react'
import apiRequests from '../../../../Services/Axios/Configs/Configs'
import Alert from '../../../Utils/Alert'
import DashboardHeader from '../Common/DashboardHeader'
import Aside from '../Common/Aside'
import { Outlet } from 'react-router-dom'

export default function AdminDashboardPage() {

  const AsideItem = [
    {id:1,name:"پنل کاربری",link:"main-panel",icon:'squares-2x2'},
    {id:2,name:"کتاب های من",link:"my-books",icon:'book-open'},
    {id:3,name:"چت های من",link:"my-chats",icon:'chat-bubble-left-right'},
    {id:4,name:"کیف پول و تراکنش ها",link:"my-orders",icon:'wallet'},
    {id:5,name:"تیکت ها",link:"my-tickets",icon:'chat-bubble-bottom-center-text'},
    {id:6,name:"ویرایش حساب",link:"edit-account",icon:'pencil-square'},
]
  const [books,setBooks] = useState([])
  const [users,setUsers] = useState([])
  const [userBook,setUserBook] = useState([])
  const [menus,setMenus] = useState([])
  const [chats,setChats] = useState([])

  const fetchData = async () => {
    try {
      const responseBooks = await apiRequests.get('/books');     
      const responseUser = await apiRequests.get('/users');     
      const responseUserBook = await apiRequests.get('/userBooks');     
      const responseMenus = await apiRequests.get('/menus');   
      const responseChats = await apiRequests.get('/chats');   

      setBooks(responseBooks.data);
      setUsers(responseUser.data);
      setUserBook(responseUserBook.data);
      setMenus(responseMenus.data);
      setChats(responseChats.data)

    } catch (error) {
      Alert('error',"Error fetching data")
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
                <Outlet context={[books,users,userBook,menus,chats]} />
              }
            </section> 
        </section>
    </div>
  )
}
