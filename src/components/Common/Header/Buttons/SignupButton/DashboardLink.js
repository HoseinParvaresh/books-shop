import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardLinks({title,link,icon}) {
  return (
        <Link to={link} className="dashboard-link">
            <span className="flex items-center gap-x-2">
                <svg className="w-6 h-6">
                    <use href={icon}></use>
                </svg>
                {title}                           
            </span>
        </Link>
  )
}
