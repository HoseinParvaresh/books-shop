import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function MyOrdersPage() {

  document.getElementById('aside-btn-4').classList.add('aside-btn--active')
  const [user] = useOutletContext()
  
  return (
    <div>
      <p> در دست توسعه </p>
    </div>
  )
}
