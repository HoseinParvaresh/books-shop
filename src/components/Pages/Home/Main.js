import React from 'react'
import Category from './Category';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import Product from './Product';
import UserBookProduct from './../Store/UserBooks/UserBookProduct'
import { Link } from 'react-router-dom';
import QuoteCard from './QuoteCard';

export default function Main({books,publishers,quoteCard,userBooks}) {
  
  return (
    <main className="main my-5 w-full font-Dana">
      {/* <!-- top image --> */}
      <Swiper
          modules={[Autoplay,Pagination]}
          style={{
            '--swiper-pagination-color': '#16a34a',
            '--swiper-pagination-bullet-inactive-color': 'gray',
            '--swiper-pagination-bullet-inactive-opacity': '0.4'
            }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={
            {
              delay: 3000,
              disableOnInteraction: false,
            }
          }
          >
          <SwiperSlide>
            <a href="#"><img className='hidden sm:block w-full' src="./images/bg1-desktop.jpg" alt="bg 1" loading='lazy'/></a>
            <a href="#"><img className='block sm:hidden w-full' src="./images/bg1-mobile.jpg" alt="bg 1" loading='lazy'/></a>
          </SwiperSlide>
          <SwiperSlide>     
              <a href="#"><img className='hidden sm:block w-full' src="./images/bg2-desktop.jpg" alt="bg 2" loading='lazy'/></a>
              <a href="#"><img className='block sm:hidden w-full' src="./images/bg2-mobile.jpg" alt="bg 2" loading='lazy'/></a>
          </SwiperSlide>
          <SwiperSlide>     
              <a href="#"><img className='hidden sm:block w-full' src="./images/bg3-desktop.jpg" alt="bg 3" loading='lazy'/></a>
              <a href="#"><img className='block sm:hidden w-full' src="./images/bg3-mobile.jpg" alt="bg 3" loading='lazy'/></a>
          </SwiperSlide>
      </Swiper>
      {/* <!-- Categories --> */}
      <section className=" dark:text-primary-light my-5 p-2 mx-2 rounded-xl xs:rounded-2xl md:rounded-3xl">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={5}
                  modules={[Autoplay]}
                  breakpoints={
                    {
                      530: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                      1280: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                      },
                      1380: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                      }
                    }
                  }
                  autoplay={
                    {
                      delay: 3000,
                      disableOnInteraction: false,
                    }
                  }
                >
                    <SwiperSlide>
                      <Category img="./images/1.jpg" loading='lazy'/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Category img="./images/2.jpg" loading='lazy'/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Category img="./images/3.jpg" loading='lazy'/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Category img="./images/4.jpg" loading='lazy'/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Category img="./images/5.jpg" loading='lazy'/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Category img="./images/6.jpg" loading='lazy'/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Category img="./images/7.jpg" loading='lazy'/>
                    </SwiperSlide>
                </Swiper>
      </section>
      {/* Amazing offer & The latest books & background images */}
      <div className="px-10">
          {/* <!-- Amazing offer --> */}
          <section className="bg-orange-300 dark:bg-orange-400 sm:flex shadow-normal py-3 md:pb-4 lg:py-5 px-3 md:px-4 lg:px-5 rounded-xl xs:rounded-2xl md:rounded-3xl">
              {/* <!-- logo --> */}
              <div className="w-full sm:w-32 mb-4 mt-3 sm:ml-5 flex items-center justify-between sm:justify-center sm:gap-5 sm:flex-col sm:shrink-0 text-primary-light">
                  {/* amazing offer image */}
                  <img src="./images/svg/Amazings.svg" alt="amazing offer" className="hidden sm:block w-full" loading='lazy'/>
                  <img src="./images/svg/incredible-word.svg" alt="amazing offer" className='block sm:hidden' loading='lazy'/>
                  {/* amazing offer svg */}
                  <svg className="hidden sm:block size-20">
                      <use href="#percent-badge"></use>
                  </svg>
                  {/* show more */}
                  <Link to={'/shop'} className="flex items-center gap-1">
                      <span className="font-DanaBold text-sm md:text-base ">مشاهده همه</span>
                      <svg className="size-3 xs:size-5">
                          <use href="#chevron-left-mini"></use>
                      </svg>
                  </Link>
              </div>
              {/* <!-- product offer swiper --> */}
              <Swiper
                slidesPerView={1}
                spaceBetween={5}
                modules={[Autoplay]}
                breakpoints={
                  {
                    467: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    }
                  }
                }
                autoplay={
                  {
                    delay: 4000,
                    disableOnInteraction: false,
                  }
                }
              >

                {
                  books.slice(0,5).map(product => (
                    <SwiperSlide key={product.id}>
                        <Product {...product}></Product>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
          </section> 
          {/* quoteCard => Book Quote */}
          <section className="py-2.5 md:px-4 lg:px-5 mb-5">
            <div className="title">
                <b></b>
                <p> قطعه ای از کتاب </p>
                <b></b>
            </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={5}
                modules={[Autoplay]}
                breakpoints={
                 {
                    1000: {
                      slidesPerView: 2,
                      spaceBetween: 10
                    },
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    }
                  }
                }
                autoplay={
                  {
                    delay: 4000,
                    disableOnInteraction: false,
                  }
                }
              >
                {
                  quoteCard.length > 0  &&
                  quoteCard[0].bookQuote.map((bq,index) => (
                    <SwiperSlide key={index}>
                      <QuoteCard book={books.find(product => bq.bookName == product.title)} bookQuote={bq}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
          </section>
          {/* <!-- The latest books --> */}
          <section className="bg-primary-light dark:bg-primary-dark dark:text-primary-light w-full shadow-normal rounded-xl xs:rounded-2xl md:rounded-3xl py-2.5 px-3 md:px-4 lg:px-5">
              {/* <!-- title --> */}
              <div className="title">
                  <b></b>
                  <p> آخرین کتاب ها </p>
                  <b></b>
              </div>
              <Swiper
                className='!p-1'
                slidesPerView={1}
                spaceBetween={5}
                modules={[Autoplay]}
                breakpoints={
                  {
                    467: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 15,
                    }
                  }
                }
                autoplay={
                  {
                    delay: 4000,
                    disableOnInteraction: false,
                  }
                }
              >
              {
                books.slice(5,11).map(product => (
                  <SwiperSlide key={product.id}>
                      <Product {...product}></Product>
                  </SwiperSlide>
                ))
              }
              </Swiper>      
          </section>
          {/* <!-- background images --> */}
          <section className="my-4 rounded-xl xs:rounded-2xl md:rounded-3xl overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={
              {
                delay: 3000,
                disableOnInteraction: false,
              }
            }
            >
            <SwiperSlide>
              <a href="/shop"><img className='hidden sm:block w-full' src="./images/bg4.jpg" alt="bg 4" loading='lazy'/></a>
            </SwiperSlide>
            <SwiperSlide>     
                <a href="/shop"><img className='hidden sm:block w-full' src="./images/bg5.jpg" alt="bg 5" loading='lazy'/></a>
            </SwiperSlide>
            <SwiperSlide>     
                <a href="/shop"><img className='hidden sm:block w-full' src="./images/bg6.jpg" alt="bg 6" loading='lazy'/></a>
            </SwiperSlide>
            <SwiperSlide>     
                <a href="/shop"><img className='hidden sm:block w-full' src="./images/bg7.jpg" alt="bg 7" loading='lazy'/></a>
            </SwiperSlide>
        </Swiper>
          </section>
          {/* <!-- Best selling books --> */}
          <section className="bg-primary-light dark:bg-primary-dark dark:text-primary-light w-full shadow-normal rounded-xl xs:rounded-2xl md:rounded-3xl py-2.5 px-3 md:px-4 lg:px-5">
              {/* <!-- title --> */}
              <div className="title">
                  <b></b>
                  <p> پرفروش ترین کتاب ها </p>
                  <b></b>
              </div>
              <Swiper
              className='!p-1'
              slidesPerView={1}
              spaceBetween={5}
              modules={[Autoplay]}
              breakpoints={
                {
                  467: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                  }
                }
              }
              autoplay={
                {
                  delay: 4000,
                  disableOnInteraction: false,
                }
              }
            >
            {
              books.slice(11,17).map(product => (
                <SwiperSlide key={product.id}>
                    <Product {...product}></Product>
                </SwiperSlide>
              ))
            }
            </Swiper> 
          </section>
          {/* <!-- quoteCard => author Quote --> */}
          <section className="py-2.5 px-3 md:px-4 lg:px-5 mb-5">
            <div className="title">
                <b></b>
                <p> دوستت دارم به زبان نویسنده ها </p>
                <b></b>
            </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={5}
                modules={[Autoplay]}
                breakpoints={
                  {
                    1000: {
                      slidesPerView: 2,
                      spaceBetween: 10
                    },
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    }
                  }
                }
                autoplay={
                  {
                    delay: 4000,
                    disableOnInteraction: false,
                  }
                }
              >
                {
                  quoteCard.length > 0  &&
                  quoteCard[1].authorQuote.map((aq,index) => (
                    <SwiperSlide key={index}>
                      <QuoteCard {...aq}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
          </section>
          {/* users books */}
          <section className="bg-primary-light dark:bg-primary-dark dark:text-primary-light w-full shadow-normal rounded-xl xs:rounded-2xl md:rounded-3xl mb-5 py-2.5 px-3 md:px-4 lg:px-5">
              {/* <!-- title --> */}
              <div className="title">
                  <b></b>
                  <p> آخرین کتاب های کاربران</p>
                  <b></b>
              </div>
              <Swiper
                className='!p-1'
                slidesPerView={1}
                spaceBetween={5}
                modules={[Autoplay]}
                breakpoints={
                  {
                    470: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 15,
                    }
                  }
                }
                autoplay={
                  {
                    delay: 4000,
                    disableOnInteraction: false,
                  }
                }
              >
              {
                userBooks.slice(0).map(userBook => (
                  <SwiperSlide key={userBook.id}>
                      <UserBookProduct {...userBook}></UserBookProduct>
                  </SwiperSlide>
                ))
              }
              </Swiper>      
          </section>
          {/* <!-- publishers --> */}
          <section className="bg-primary-light dark:bg-primary-dark dark:text-primary-light w-full shadow-normal rounded-xl xs:rounded-2xl md:rounded-3xl py-2.5 px-3 md:px-4 lg:px-5">
            <div className="title">
                <b></b>
                <p> ناشر ها </p>
                <b></b>
            </div>
            <div className="flex-center">
              <Swiper
                slidesPerView={2}
                spaceBetween={5}
                modules={[Autoplay]}
                breakpoints={
                  {
                    467: {
                      slidesPerView: 4,
                      spaceBetween: 5,
                    },
                    640: {
                      slidesPerView: 6,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 10,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 12,
                      spaceBetween: 15,
                    }
                  }
                }
                autoplay={
                  {
                    delay: 4000,
                    disableOnInteraction: false,
                  }
                }
              >
              {
                publishers.map(pub => (
                  <SwiperSlide key={pub.id}>
                     <img src={pub.image} alt={pub.name} loading='lazy' className='rounded-xl p-2 cursor-pointer' />
                  </SwiperSlide>
                ))
              }
              </Swiper>
            </div>
          </section>
      </div>
    </main>
  )
}

