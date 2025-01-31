import React,{useState,useEffect} from 'react'
import apiRequests from '../../../../Services/Axios/Configs/Configs'
import Alert from '../../../Utils/Alert'

export default function AdminDashboardPage() {

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
    <div>
      
    </div>
  )
}
