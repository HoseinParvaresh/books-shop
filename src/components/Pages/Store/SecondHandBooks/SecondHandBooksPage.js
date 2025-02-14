import React,{useState,useEffect} from 'react'
import Header from './../../../Common/Header/Header'
import StorePage from '../StorePage'
import Footer from './../../../Common/Footer/Footer'
import apiRequests from '../../../../Services/Axios/Configs/Configs'
import Alert from '../../../Utils/Alert'
import { Toaster } from 'react-hot-toast'

export default function ShopPage() {

  const [books,setBooks] = useState([])

  const [sortList] = useState([
    {id:1,title:'همه کتاب ها',href:'#',dataId:'default',active:true},
    {id:2,title:'ارزان ترین',href:'#',dataId:'cheapest',active:false},
    {id:3,title:'گران ترین',href:'#',dataId:'expensive',active:false},
    {id:4,title:'پرفروش ترین',href:'#',dataId:'bestSeller',active:false}
  ])
  const [toggleList] = useState([
    {id:1,title: 'فقط کتاب های تخفیف دار', inputName: 'only_offer'},
    {id:2,title: 'کتاب های موجود', inputName: 'available'},
  ])
  const [categoryList] = useState([
    {id:1,name:'داستان و رمان'},
    {id:2,name:'مدیریت و کسب و کار'},
    {id:3,name:'ادبیات'},
    {id:4,name:'روان‌شناسی'},
    {id:5,name:'زندگی‌نامه'},
    {id:6,name:'هنر'},
    {id:7,name:'فلسفه منطق'},
    {id:8,name:'تاریخ'}
  ])

  document.documentElement.scrollTop = 0;

  const fetchData = async () => {
    
    try {
      const response = await apiRequests.get("/books");
      setBooks(response.data);
      
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
      {books.length && <StorePage books={books} sortList={sortList} toggleBox={toggleList} categoryList={categoryList} title={"کتاب ها"}/>}
      <Footer/>
    </div>
  )
}

