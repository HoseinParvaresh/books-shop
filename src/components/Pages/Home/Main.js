import React, { useRef } from 'react'
import Category from './Category';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import Product from './Product';
import UserBookProduct from './../Store/UserBooks/UserBookProduct'
import { Link } from 'react-router-dom';
import QuoteCard from './QuoteCard';


export default function Main({ books, discountBooks, lastBooks, bestsellingBooks, publishers, quoteCard, userBooks }) {
  const swiperRef = useRef(null);
  return (
    <main className="main w-full font-Dana">

      {/* <!-- top image --> */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          '--swiper-pagination-bullet-inactive-color': 'gray',
          '--swiper-pagination-bullet-inactive-opacity': '0.4',
          '--swiper-pagination-bottom': '1px',
          '--swiper-pagination-bullet-size': '6px',
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        pagination={{ clickable: true, bulletActiveClass: "swiper-custom-bullet-active", }}
        autoplay={
          {
            delay: 5000,
            disableOnInteraction: false,
          }
        }
      >
        <div className='relative'>
          <svg className='absolute bottom-[-35px] right-[calc(50%-75px)] z-[9] fill-[#F8F8F8] dark:fill-[#191919]' xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 450 100">
            <path d="M270.237,99.821V99.491c40.471,0.125,98.4.46,180.972,1.134C355.121,99.842,395.9,8.993,327.679,8.993H124.453c-69.409,0-27.919,90.849-125.675,91.632,85.077-.682,144.365-1.016,185.606-1.137v0.333c5.854-.193,18.314-0.351,42.557-0.382C251.605,99.47,264.281,99.628,270.237,99.821Zm0,0v0.8S281,100.169,270.237,99.821Zm-85.854.8v-0.8C173.8,100.169,184.383,100.625,184.383,100.625Z"></path></svg>
        </div>
        <div className='relative'>
          <button onClick={() => swiperRef.current && swiperRef.current.slideNext()} className='absolute left-0 bottom-3 xs:bottom-5 right-[calc(100%-45px)] xs:right-[calc(100%-50px)] z-[9] text-white bg-black/20 hover:bg-black/30 transition-colors w-max py-1 px-2 rounded-md'>
            <svg className='size-3 xs:size-4'>
              <use href='#arrow-left'></use>
            </svg>
          </button>
          <button onClick={() => swiperRef.current && swiperRef.current.slidePrev()} className='absolute left-0 bottom-3 xs:bottom-5 right-[calc(100%-80px)] xs:right-[calc(100%-95px)] z-[9] text-white bg-black/20 hover:bg-black/30 transition-colors w-max py-1 px-2 rounded-md'>
            <svg className='size-3 xs:size-4'>
              <use href='#arrow-right'></use>
            </svg>
          </button>
        </div>
        <SwiperSlide>
          <Link to={'/book-store'}><img className='hidden sm:block w-full' src="./images/bg1-desktop.jpg" alt="bg 1" loading='lazy' /></Link>
          <Link to={'/book-store'}><img className='block sm:hidden w-full' src="./images/bg1-mobile.jpg" alt="bg 1" loading='lazy' /></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/book-store'}><img className='hidden sm:block w-full' src="./images/bg2-desktop.jpg" alt="bg 2" loading='lazy' /></Link>
          <Link to={'/book-store'}><img className='block sm:hidden w-full' src="./images/bg2-mobile.jpg" alt="bg 2" loading='lazy' /></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/book-store'}><img className='hidden sm:block w-full' src="./images/bg3-desktop.jpg" alt="bg 3" loading='lazy' /></Link>
          <Link to={'/book-store'}><img className='block sm:hidden w-full' src="./images/bg3-mobile.jpg" alt="bg 3" loading='lazy' /></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/book-store'}><img className='hidden sm:block w-full' src="./images/bg3-desktop.jpg" alt="bg 3" loading='lazy' /></Link>
          <Link to={'/book-store'}><img className='block sm:hidden w-full' src="./images/bg3-mobile.jpg" alt="bg 3" loading='lazy' /></Link>
        </SwiperSlide>

      </Swiper>
      {/* <!-- Categories --> */}
      <section className="dark:text-primary-light my-5 mb-7 p-2 px-7 md:px-28">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          breakpoints={
            {
              345: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 10,
              },
              1380: {
                slidesPerView: 10,
                spaceBetween: 0,
              }
            }
          }
        >
          <SwiperSlide>
            <Category img="./images/c-1.png" title="هنر" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-2.png" title="پزشکی" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-4.png" title="اقتصاد" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-5.png" title="تاریخ و جغرافیا" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-6.png" title="دانشگاهی" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-7.png" title="روانشناسی" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-8.png" title="فلسفی" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-10.png" title="فیزیک و شیمی" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-11.png" title="مهندسی" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <Category img="./images/c-12.png" title="نجوم" loading='lazy' />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Amazing offer & quoteCard(Book Quote) & The latest books &  background images & Best selling books & quoteCard(author Quote) & users books & publishers */}
      <div className="px-10">
        {/* <!-- Amazing offer --> */}
        <section>
          <div className='w-full bg-primary flex items-center gap-2 p-2 text-white rounded-xl mb-4'>
            <svg className="hidden sm:block size-7">
              <use href="#percent-badge"></use>
            </svg>
            <p className='font-Morabba'>پیشنهادات شگفت انگیز</p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            className='!p-1'
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
          >
            {
              discountBooks.map(product => (
                <SwiperSlide key={product.id}>
                  <Product {...product}></Product>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
        {/* quoteCard => Book Quote */}
        <section className="py-2.5 md:px-4 lg:px-5 my-5">
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
          >
            {
              quoteCard.length > 0 &&
              quoteCard[0].bookQuote.map((bq, index) => (
                <SwiperSlide key={index}>
                  <QuoteCard book={books.find(product => bq.bookName === product.title)} bookQuote={bq} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
        {/* <!-- The latest books --> */}
        <section>
          <div className='w-full flex justify-between items-center gap-5 p-2 text-black mb-2'>
            <div className='flex items-center gap-2 min-w-max'>
              <svg className="hidden sm:block size-7 text-primary">
                <use href="#book-open"></use>
              </svg>
              <p className='font-Morabba dark:text-white'>جدیدترین کتاب ها</p>
            </div>
            <span className='border border-dashed border-black/20 dark:border-white/20 w-full'></span>
            <Link to="/" className='min-w-max flex-center gap-1 cursor-pointer'>
              <p className='text-xs dark:text-white'>مشاهده همه</p>
              <div className="p-0.5 rounded-full bg-primary">
                <svg className="size-3.5 text-white">
                  <use href="#chevron-left"></use>
                </svg>
              </div>
            </Link>
          </div>
          <Swiper
            className='!p-1'
            slidesPerView={1}
            spaceBetween={5}
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
          >
            {
              lastBooks.map(product => (
                <SwiperSlide key={product.id}>
                  <Product {...product}></Product>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
        {/* <!-- background images --> */}
        <section className="my-6">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
          >
            <SwiperSlide>
              <div className='flex gap-3 items-center bg-yellow-100/70 p-5 rounded-full'>
                <svg className='size-8 text-orange-300'>
                  <use href='#map-pin'></use>
                </svg>
                <div className='flex flex-col gap-2 font-DanaBold'>
                  <p className='text-sm text-black/70'>ارسال رایگان</p>
                  <p className='text-black/40 text-[13px]'>ارسال رایگان برای سفارش های بالای 300 هزار تومان</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex gap-3 items-center bg-cyan-100/70 p-5 rounded-full'>
                <svg className='size-8 text-cyan-300'>
                  <use href='#sparkles'></use>
                </svg>
                <div className='flex flex-col gap-2 font-DanaBold'>
                  <p className='text-sm text-black/70'>تحویل سریع</p>
                  <p className='text-black/40 text-[13px]'>ارسال رایگان برای سفارش های بالای 300 هزار تومان</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex gap-3 items-center bg-yellow-100/70 p-5 rounded-full'>
                <svg className='size-8 text-orange-300'>
                  <use href='#gift'></use>
                </svg>
                <div className='flex flex-col gap-2 font-DanaBold'>
                  <p className='text-sm text-black/70'>بسته‌بندی هدیه با کارت تبریک</p>
                  <p className='text-black/40 text-[13px]'>بسته بندی به صورت کادو به همراه متن دلخواه</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* <!-- Best selling books --> */}
        <section>
          <div className='w-full flex justify-between items-center gap-5 p-2 text-black mb-2'>
            <div className='flex items-center gap-2 min-w-max'>
              <svg className="hidden sm:block size-7 text-primary">
                <use href="#book-open"></use>
              </svg>
              <p className='font-Morabba dark:text-white'>پرفروش ترین کتاب ها</p>
            </div>
            <span className='border border-dashed border-black/20 dark:border-white/20 w-full'></span>
            <Link to="/" className='min-w-max flex-center gap-1 cursor-pointer'>
              <p className='text-xs dark:text-white'>مشاهده همه</p>
              <div className="p-0.5 rounded-full bg-primary">
                <svg className="size-3.5 text-white">
                  <use href="#chevron-left"></use>
                </svg>
              </div>
            </Link>
          </div>
          <Swiper
            className='!p-1'
            slidesPerView={1}
            spaceBetween={5}
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
          >
            {
              bestsellingBooks.map(product => (
                <SwiperSlide key={product.id}>
                  <Product {...product}></Product>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
        {/* <!-- quoteCard => author Quote --> */}
        <section className="py-2.5 px-3 md:px-4 lg:px-5 my-5">
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
          >
            {
              quoteCard.length > 0 &&
              quoteCard[1].authorQuote.map((aq, index) => (
                <SwiperSlide key={index}>
                  <QuoteCard {...aq} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
        {/* users books */}
        <section>
          <div className='w-full flex justify-between items-center gap-5 p-2 text-black mb-2'>
            <div className='flex items-center gap-2 min-w-max'>
              <svg className="hidden sm:block size-7 text-primary">
                <use href="#book-open"></use>
              </svg>
              <p className='font-Morabba dark:text-white'>جدیدترین کتاب های کاربران</p>
            </div>
            <span className='border border-dashed border-black/20 dark:border-white/20 w-full'></span>
            <Link to="/" className='min-w-max flex-center gap-1 cursor-pointer'>
              <p className='text-xs dark:text-white'>مشاهده همه</p>
              <div className="p-0.5 rounded-full bg-primary">
                <svg className="size-3.5 text-white">
                  <use href="#chevron-left"></use>
                </svg>
              </div>
            </Link>
          </div>
          <Swiper
            className='!p-1'
            slidesPerView={1}
            spaceBetween={5}
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
          >
            {
              userBooks.map(book => (
                <SwiperSlide key={book.id}>
                  <UserBookProduct {...book}></UserBookProduct>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
        {/* <!-- publishers --> */}
        <section className="py-2.5 px-3 md:px-4 lg:px-5 mt-10">
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
            >
              {
                publishers.map(pub => (
                  <SwiperSlide key={pub.id}>
                    <div className='text-center'>
                      <div className="flex-center">
                        <img src={pub.image} alt={pub.name} loading='lazy' className='size-20 border-3 shadow border-dashed rounded-full border-primary hover:border-sky-400 transition-colors p-1' />
                      </div>
                      <p className='text-xs mt-2 font-DanaBold dark:text-white'>{pub.name}</p>
                    </div>
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

