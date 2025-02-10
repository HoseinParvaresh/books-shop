import React,{useEffect} from 'react'

export default function MyOrdersPage() {

  useEffect(() => {
    document.getElementById('aside-btn-4').classList.add('aside-btn--active')        
  }, []);
  
  return (
    <div>
      <p> در دست توسعه </p>
    </div>
  )
}
