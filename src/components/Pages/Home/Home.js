import React, { useState, useEffect } from 'react'
import Header from "./../../Common/Header/Header"
import Main from "./Main"
import Footer from "./../../Common/Footer/Footer"
import Alert from './../../Utils/Alert';
import apiRequests from './../../../Services/Axios/Configs/Configs'

export default function Home() {

  const [books, setBooks] = useState()
  const [discountBooks, setDiscountBooks] = useState()
  const [bestsellingBooks, setBestsellingBooks] = useState()
  const [publishers, setPublishers] = useState()
  const [quoteCard, setQuoteCard] = useState()
  const [userBooks, setUserBooks] = useState()

  // get books data 
  const fetchData = async () => {
    try {
      const responseBook = await apiRequests.get("/books");
      const responseDiscountBooks = await apiRequests.get("/books?discount_ne=&discount_ne=0&available_ne=false&_limit=6");
      const responseBestsellingBooks = await apiRequests.get("/books?_sort=buyer&_order=desc&_limit=6");
      const responsePublisher = await apiRequests.get("/publisher");
      const responseBookCard = await apiRequests.get("/quoteCard");
      const responseUserBooks = await apiRequests.get("/userBooks?review_status=approved");

      setBooks(responseBook.data);
      setDiscountBooks(responseDiscountBooks.data);
      setBestsellingBooks(responseBestsellingBooks.data);
      setPublishers(responsePublisher.data);
      setQuoteCard(responseBookCard.data)
      setUserBooks(responseUserBooks.data)

    } catch (error) {
      Alert('error', 'Error fetching data from Main.js in Main Page')
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    books && publishers && quoteCard && userBooks &&
    <div className="relative dark:bg-secondary-dark bg-secondary-light">
      <Header />
      <Main books={books} discountBooks={discountBooks.reverse()} lastBooks={books.slice(-6).reverse()} bestsellingBooks={bestsellingBooks} publishers={publishers} quoteCard={quoteCard} userBooks={userBooks.slice(-6).reverse()} />
      <Footer />
    </div>
  )
}
