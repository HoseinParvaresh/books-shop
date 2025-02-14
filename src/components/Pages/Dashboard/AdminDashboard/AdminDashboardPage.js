import React,{useState,useEffect} from 'react'
import apiRequests from '../../../../Services/Axios/Configs/Configs'
import Alert from '../../../Utils/Alert'
import DashboardHeader from '../Common/DashboardHeader'
import Aside from '../Common/Aside'
import { Outlet } from 'react-router-dom'

export default function AdminDashboardPage() {

  const [books,setBooks] = useState([])
  const [users,setUsers] = useState([])
  const [userBook,setUserBook] = useState([])
  const [asideMenuItem,setAsideMenuItem] = useState()


  const fetchData = async () => {
    try {
      const responseOtherAsideItems = await apiRequests.get(`/asideMenuItems`); 
      const responseBooks = await apiRequests.get('/books');     
      const responseUser = await apiRequests.get('/users');     
      const responseUserBook = await apiRequests.get('/userBooks');     

      setAsideMenuItem(responseOtherAsideItems.data)
      setBooks(responseBooks.data);
      setUsers(responseUser.data);
      setUserBook(responseUserBook.data);

    } catch (error) {
      Alert('error',"Error fetching data")
    }
  };
  
  useEffect(() => {
    fetchData();
    document.body.classList = 'bg-gray-100 dark:bg-gray-900' 
  }, []);

  return (
    asideMenuItem &&
    <div className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 font-Dana">
        <section className="flex md:pr-67">
            <Aside items={asideMenuItem.adminDashboard}/>
            <section className="w-full">
              <DashboardHeader/>
              {
                <Outlet context={[books.reverse(),users.reverse(),userBook.reverse()]} />
              }
            </section> 
        </section>
    </div>
  )
}
