import React from 'react'
import FooterList from './FooterList'

export default function Footer() {
  return (
    // <!-- footer -->
     <footer className="footer font-Dana bg-primary-light dark:bg-primary-dark dark:text-primary-light pt-20 shadow-normal mt-8">
        <div className="container">
          {/* <!-- top --> */}
          <div className="flex justify-between items-center flex-col lg:flex-row gap-5 pb-14">
              {/* <!-- right --> */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-6 xxs:gap-x-10 sm:gap-20 text-sm child:md:text-base">
                    <FooterList title="راهنمای خرید از سایت" items={["نحوه ثبت سفارش","شیوه های پرداخت","رویه ارسال سفارش"]} />
                    <FooterList title="خدمات مشتریان " items={["پرسش‌های متداول ","رویه‌های بازگرداندن کالا ","شرایط استفاده "]} />
                    <FooterList title="آخرین خبرها " items={["پیشنهادات و معاملات ","حساب من ","محصولات من "]} />
                    <FooterList title="دست به دست" items={["تماس با ما","درباره ما","فرصت های شغلی"]} />
                  </div>
              {/* <!-- left --> */}
              <div className="flex gap-10 scale-75 child:cursor-pointer">
                  <img src="/images/f_logo2.png" alt=" f logo" loading='lazy'/>
                  <img src="/images/f_logo1.png" alt=" f logo" loading='lazy'/>
              </div>
          </div>
        </div>
        {/* <!-- bottom --> */}
         <div className="text-xs py-5 text-gray-500 text-center border-t border-gray-300">
            <p> تمام حقوق قالب برای <span className="font-DanaBold text-black dark:text-primary-light"> حسین پرورش </span> محفوظ است. </p>
         </div>
     </footer>
  )
}
