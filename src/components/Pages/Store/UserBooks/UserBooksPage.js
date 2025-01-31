import React,{useState,useEffect} from 'react'
import Main from './../Common/Main'
import Header from './../../../Common/Header/Header'
import Footer from './../../../Common/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import Alert from './../../../Utils/Alert'
import apiRequests from './../../../../Services/Axios/Configs/Configs'
import { provinces } from '../../../Utils/helperFunction'

export default function BookSwapPage() {

    const [Products,setProducts] = useState([])

    const [categoryList] = useState(provinces)

    const fetchData = async () => {
        try {
          const response = await apiRequests.get("/userBooks");
          setProducts(response.data);
          
        } catch (error) {
          Alert('error',"Error fetching data from ShopPage.js in Shop Page")
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
      
  return (
    <div className='text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 font-Dana'>
      <div><Toaster position="top-right"/></div>
      <Header/>
      {Products.length != 0 ? <Main booksSwap={Products} categoryList={categoryList} title={"کتاب های کاربران"}/> : ""}
      <Footer/>
    </div>
  )
}
