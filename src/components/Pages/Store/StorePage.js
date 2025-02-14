import React from 'react'
import Sorting from './SecondHandBooks/Sorting'
import Product from '../Home/Product'
import SideBar from './Common/SideBar'
import UserBookProduct from './UserBooks/UserBookProduct'

export default function StorePage(Props) {	
	
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden mt-8 sm:mt-10">
		{/* main */}
		<div className="container">
			{/* <!-- Section Name => title / Number of books --> */}
			<div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
				{/* title */}
				<div className="flex gap-2.5 items-center">
					<span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
					<h2 className="text-center font-MorabbaBold text-2xl lg:text-3xl"> {Props.title} </h2>
				</div>
				{/* Number of books */}
				<span className="sm:text-xl font-Dana text-slate-500"><span id="count_item_archive">{Props.books ? Props.books.length : Props.userBooks.length}</span> جلد کتاب </span>
			</div>
      		{/* Sidebar & Content */}
			<section className="grid grid-cols-12 gap-y-5 md:gap-x-7">
				{/* side bar */}
				<SideBar toggleBox={Props.toggleBox} categoryList={Props.categoryList}/>
				{/* <!-- Content --> */}
				<section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
					{/* <!-- Filter button in Mobile Size --> */}
					<div className="flex md:hidden items-center gap-6 mb-8">
						{/* filter */}
						<div className="button button-xl bg-primary-light w-full">
							<svg className="w-6 h-6 shrink-0">
								<use href="#funnel"></use>
							</svg>
							<span>فیلتر</span>
						</div>
					</div>
					{/* <!-- product Sort => desktop size --> */}
					{
						Props.sortList &&
						<div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-primary-light dark:bg-primary-dark shadow-normal dark:shadow-none rounded-xl">
							{/* title */}
							<div className="flex items-center shrink-0 gap-x-2">
								<svg className="w-7 h-7">
									<use href="#arrows-up-down"></use>
								</svg>
								<span className="font-Dana">مرتب سازی بر اساس :</span>
							</div>
							{/* sort */}
							<div className="flex gap-x-5 lg:gap-x-8 h-full">
								<Sorting items={Props.sortList}/>
							</div>
						</div>
					}
					{/* <!-- product List --> */}
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">		
						{
							Props.books ? (
								
								Props.books.map(product => (
									<Product key={product.id} {...product}/>
								))
							) : (
								Props.userBooks.map(product => (
									<UserBookProduct key={product.id} {...product}/>
								))
							)
						}
					</div>
					{/* <!-- Show more Button --> */}
					<button type="button" className="show-more button-xl button-primary w-full sm:w-auto mt-10 mx-auto ">
						مشاهده بیشتر
						<svg className="show-more__icon w-6 h-6">
							<use href="#chevron-down"></use>
						</svg>
						<svg className="show-more__loading hidden w-6 h-6 animate-spin animate-reverse">
							<use href="#refresh"></use>
						</svg>
					</button>
				</section>
			</section>
		</div>
	</main>
  )
}
