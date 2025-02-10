import React,{useEffect,useState} from 'react'
import Header from '../../../Common/Header/Header'
import Footer from '../../../Common/Footer/Footer'
import Main from './Main'
import { useParams } from 'react-router-dom'
import apiRequests from '../../../../Services/Axios/Configs/Configs'
import Alert from './../../../Utils/Alert'
import { Toaster } from 'react-hot-toast'

export default function ProductPage() {

  const [userBooks,setUserBooks] = useState()

  document.documentElement.scrollTop = 0;

  
  useEffect(() => {
    const fetchData = async () => {
      const params = useParams()
      try {
        const response = await apiRequests.get(`/userBooks/${params.id}`);     
        setUserBooks(response.data);
        
      } catch (error) {
        Alert('error',"Error fetching data usersBooks")
      }
    };
    fetchData();
  }, []);
   
    return (
      userBooks && (
        <div className='relative font-Dana dark:bg-secondary-dark bg-secondary-light'>
        <div><Toaster position="top-right"/></div>
            <Header/>
            <Main {...userBooks}/>
            <Footer/>
        </div>
      )
    )
}
