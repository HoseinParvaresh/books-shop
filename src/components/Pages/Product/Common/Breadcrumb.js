import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb(Props) {
  return (
    <div className="breadcrumb overflow-hidden">
			<div className="breadcrumb__item">
				<Link to="/" className="breadcrumb__link">
					<svg className="w-6 h-6">
						<use href="#home"></use>
					</svg>
				</Link>
			</div>
             {
                Props.items.map((item,index) => (
                    <div key={index} className="breadcrumb__item">
                        <Link to={item.href} className="breadcrumb__link">
                            {item.title}
                        </Link>
                    </div>
                ))
             }
		</div>
  )
}
