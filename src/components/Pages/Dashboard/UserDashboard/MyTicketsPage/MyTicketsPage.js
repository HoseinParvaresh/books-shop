import React,{useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';

export default function MyTicketsPage() {

  useEffect(() => {
    document.getElementById('aside-btn-5').classList.add('aside-btn--active')        
  }, []);
  
  const [user] = useOutletContext()
  
  return (
    <div>
      <p> در دست توسعه </p>
    </div>
  )
}
