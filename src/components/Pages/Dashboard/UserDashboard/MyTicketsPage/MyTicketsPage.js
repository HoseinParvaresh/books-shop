import React,{useEffect} from 'react'   
export default function MyTicketsPage() {

  useEffect(() => {
    document.getElementById('aside-btn-5').classList.add('aside-btn--active')        
  }, []);
  
  
  return (
    <div>
      <p> در دست توسعه </p>
    </div>
  )
}
