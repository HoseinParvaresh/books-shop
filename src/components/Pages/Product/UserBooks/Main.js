import React, { useState,useEffect } from 'react'
import Breadcrumb from './../Common/Breadcrumb'
import Summary from '../Common/Summary';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { calcRelativeTimeDifference,checkLogin,findImage} from '../../../Utils/helperFunction';
import { Link } from 'react-router-dom';
import addChat from '../../../../Services/Axios/Requests/Chat';

export default function Main(Props) {

    const [userId] = useState(localStorage.getItem('id'))
    const img = findImage(Props.image1,Props.image2,Props.image3,Props.image4,Props.image5)
    
    const ChatWithTheUser = () => {
        const name = localStorage.getItem('name')
        checkLogin() && addChat(userId,name,Props.id,Props.createdBy.id,Props.createdBy.name,Props.title,img)
    }

  return (
    <main className='max-w-[1920px] m-h mx-auto overflow-x-hidden mt-8 sm:mt-10 dark:text-primary-light'>

      <div className='container'>
        {/* Breadcrumb */}
		<Breadcrumb 
			items={[
				{href:"/users-book-store",title:'تبادل کتاب با کاربران'},
				{href:`/province/${Props.province}`,title:Props.province},
				{href:`/user-book/${Props.id}`,title:Props.title},
		]}/>
		
		{/* books Banner */}
		<section className="lg:items-center xl:items-stretch mt-8 sm:mt-10 rounded-2xl p-4.5 lg:p-0 bg-primary-light dark:bg-primary-dark lg:!bg-transparent border border-neutral-100 dark:border-none lg:border-none">
			{/* <!-- books Banner --> */}
			<div className="order-1 w-full xl:h-[360px]">
			<Swiper
				style={{
				'--swiper-pagination-color': '#16a34a',
				'--swiper-pagination-bullet-inactive-color': 'gray',
				'--swiper-pagination-bullet-inactive-opacity': '0.4'
				}}
				zoom={true}
				pagination={{
				clickable: true,
				}}
				modules={[Zoom, Pagination]}
				className={`mySwiper h-full ${Props.image1 && !Props.image4 ? 'child:justify-center' : ''}`}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}
      		>
                {Props.image1 && 
                    <SwiperSlide>
                        <div className="swiper-zoom-container child:rounded-2xl">
                            <img src={Props.image1} alt='img1' loading='lazy'/>
                        </div>
                    </SwiperSlide>
                }
				{Props.image2 && 
                    <SwiperSlide>
                        <div className="swiper-zoom-container child:rounded-2xl">
                            <img src={Props.image2} alt='img1' loading='lazy'/>
                        </div>
                    </SwiperSlide>
                }
                {Props.image3 && 
                    <SwiperSlide>
                        <div className="swiper-zoom-container child:rounded-2xl">
                            <img src={Props.image3} alt='img1' loading='lazy'/>
                        </div>
                    </SwiperSlide>
                }
                {Props.image4 && 
                    <SwiperSlide>
                        <div className="swiper-zoom-container child:rounded-2xl">
                            <img src={Props.image4} alt='img1' loading='lazy'/>
                        </div>
                    </SwiperSlide>
                }
                {Props.image5 && 
                    <SwiperSlide>
                        <div className="swiper-zoom-container child:rounded-2xl">
                            <img src={Props.image5} alt='img1' loading='lazy'/>
                        </div>
                    </SwiperSlide>
                }

			</Swiper>
				
			</div>
		</section>
		{/* title & Description & Summary / user Profile */}
		<section className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
            {/* title / Description */}
            <div className='col-span-12 lg:col-span-8'>
                {/* title */}
                <div className='col-span-12 lg:col-span-8 mb-5 flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-between gap-x-3 gap-y-2.5 bg-primary-light dark:bg-primary-dark pt-4 pb-3.5 sm:py-3 px-4.5 rounded-xl'>
                    <h1 className="font-DanaBold text-[1.375rem]/8 sm:text-[1.5rem]/10">{Props.title}</h1>
                </div>
                {/* Summary / Description */}
                <div className="col-span-12 lg:col-span-8">
                    {/* <!-- Summary --> */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <Summary items={
                            [
                                {title:"وضعیت کتاب",desc:Props.status,icon:"#hashtag"},
                                {title:"ایجاد شده در",desc:calcRelativeTimeDifference(Props.createdAt),icon:"#clock"},
                                {title:"استان",desc:Props.province,icon:"#home"},
                            ]
                        }/>
                    </div>
                    {/* Description */}
                    <div className="bg-primary-light dark:bg-primary-dark rounded-2xl p-4.5 sm:p-5 mt-8">
                        {/* title */}
                        <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                            <svg className="inline-block text-amber-400 w-7 h-7 md:w-9 md:h-9">
                                <use href="#document-text-fill"></use>
                            </svg>
                            <div className="font-MorabbaBold text-xl md:text-2xl">توضیحات</div>
                        </div>
                        {/* text */}
                        <div className="relative overflow-hidden">
                            <div className="wp-content text-primary-darker dark:text-gray-300 child:leading-7 child:my-5">
                            <p className="leading-7 my-5 text-primary-darker dark:text-gray-300">{Props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* user Profile */}
			<aside className="col-span-12 lg:col-span-4 space-y-8">
				{/* <!-- image / username / number button / chat button --> */}
                <div className="bg-primary-light dark:bg-primary-dark rounded-2xl pt-6 px-4.5 pb-4.5 md:py-6 md:px-5 text-center">
                    {/* image */}
                    <img className="block mb-4 mx-auto object-cover rounded-full" width="90" height="90" src="https://secure.gravatar.com/avatar/2df798968271838f06093bd52185c318?s=96&d=mm&r=g" alt={Props.createdBy.name} loading='lazy'/>
                    {/* username */}
                    <span className="font-DanaBold text-lg mb-4"> {Props.createdBy.name} | کاربر </span>
                    {/* number button */}
                    <button onClick={() => checkLogin()} className="button-primary button-lg mx-auto mt-4 w-full"> 
                        <svg className="w-6 h-6">
                            <use href="#phone"></use>
                        </svg>
                        تماس با {userId ? Props.createdBy.number : Props.createdBy.number.slice(8,11)+'****'+Props.createdBy.number.slice(0,4)}
                    </button>
                    {/* chat button */}
                    {
                        userId != Props.createdBy.id && 
                        (   
                            <Link to={userId ? `/chat/${userId}-${Props.id}`: '#'} onClick={ChatWithTheUser} className="button-primary button-outline button-lg mx-auto mt-4 w-full"> 
                                <svg className="w-6 h-6">
                                    <use href="#chat-bubble-left-right"></use>
                                </svg>
                                چت با {Props.createdBy.name} 
                            </Link>
                        )
                    }  
                </div>
			</aside>
		</section>
      </div>
    </main>
  )
}



