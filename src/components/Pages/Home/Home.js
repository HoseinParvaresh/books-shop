import React,{useState,useEffect} from 'react'
import Header from "./../../Common/Header/Header"
import Main from "./Main"
import Footer from "./../../Common/Footer/Footer"
import Alert from './../../Utils/Alert';
import apiRequests from './../../../Services/Axios/Configs/Configs'

export default function Home() {

  const [books,setBooks] = useState()
  const [publishers,setPublishers] = useState()
  const [quoteCard,setQuoteCard] = useState()
  const [userBooks,setUserBooks] = useState()
  
  // get books data 
  const fetchData = async () => {
    try {
      const responseBook = await apiRequests.get("/books");
      const responsePublisher = await apiRequests.get("/publisher");
      const responseBookCard = await apiRequests.get("/quoteCard");
      const responseUserBooks = await apiRequests.get("/userBooks");
      
      setBooks(responseBook.data);
      setPublishers(responsePublisher.data);
      setQuoteCard(responseBookCard.data) 
      setUserBooks(responseUserBooks.data)   
          
    } catch (error) {
      Alert('error','Error fetching data from Main.js in Main Page')
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    books && publishers && quoteCard && userBooks &&
    <div className="relative dark:bg-secondary-dark bg-secondary-light">
      <Header/>
      <Main books={books} publishers={publishers} quoteCard={quoteCard} userBooks={userBooks}/>
      <Footer/>
    </div>
  )
}
