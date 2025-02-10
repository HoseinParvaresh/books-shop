import React,{useEffect,useState} from 'react'
import Header from '../../../Common/Header/Header'
import Footer from '../../../Common/Footer/Footer'
import Main from './Main'
import { useParams } from 'react-router-dom'
import apiRequests from '../../../../Services/Axios/Configs/Configs'
import Alert from './../../../Utils/Alert'
import { Toaster } from 'react-hot-toast'

export default function ProductPage() {

  const [Products,setProducts] = useState([])

  document.documentElement.scrollTop = 0;

  let params = useParams()

  const fetchData = async () => {
    try {
      const response = await apiRequests.get("/books");      
      setProducts(response.data);
    } catch (error) {
      Alert('error',"Error fetching data from ProductPage.js in Product Page")
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const productData = Products.find(product => product.id === params.id)
  
  let product = {relatedProduct: [{...Products[(Math.floor(Math.random() * Products.length))]},{...Products[(Math.floor(Math.random() * Products.length))]},
                  {...Products[(Math.floor(Math.random() * Products.length))]},{...Products[(Math.floor(Math.random() * Products.length))]}]}
  
    return (
      productData ? (
        <div className='relative font-Dana dark:bg-secondary-dark bg-secondary-light'>
            <div><Toaster position="top-right"/></div>
            <Header/>
            <Main {...productData} {...product} />
            <Footer/>
        </div>
      ) : (
        ''
      )
    )
}
