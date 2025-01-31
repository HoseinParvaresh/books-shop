import React from 'react'
import { useOutletContext } from 'react-router-dom';
import AccountOverviewSection from './../../Common/AccountOverviewSection';
import EditAccountInput from './EditAccountInput';

export default function EditAccountPage() {

  document.getElementById('aside-btn-6').classList.add('aside-btn--active')
  const [user] = useOutletContext()
  

  return (
    <main className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
      {/* Overview Section / inputs / buttons */}
      <form className="block mt-6 md:mt-10">
          <AccountOverviewSection items={[
                    {id:1,title:'جزئیات حساب کاربری',link:'',text:''},
                ]}/>
          {/* inputs => full name / user name / email / phone number */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 md:pr-5">
              <EditAccountInput label={'نام و نام خانوادگی'} value={''} icon={'#user-circle'} />
              <EditAccountInput label={'نام کاربری'} value={user.userName} icon={'#user-circle'} />
              <EditAccountInput label={'ایمیل'} value={user.email} icon={'#envelope'} />
              <EditAccountInput label={'شماره تلفن'} value={user.phoneNumber} icon={'#device-tablet'} />
          </div>
          {/* <!-- buttons =>  upload profile / edit information --> */}
          <div className="flex flex-wrap gap-5 items-center justify-between mt-8 md:pr-5">
              {/* upload profile button */}
              <div className="button-primary button-outline w-full button-xl sm:w-62">
                  <span className="text-sm font-DanaBold select-none">آپلود عکس پروفایل</span>
                  <svg className="size-5">
                      <use href="#arrow-up-tray"></use>
                  </svg>
              </div>
              {/* edit information button */}
              <div className="button-primary button-xl w-full sm:w-62">
                <span className="text-sm font-DanaBold select-none"> ویرایش حساب کاربری </span>
                <svg className="size-5">
                      <use href="#pencil-square"></use>
                  </svg>
              </div>
          </div>
      </form>
      {/* password inputs => for change password */}
      <form id="edit-account-password" className="block mt-6 md:mt-10 pt-6 md:pt-10 border-t border-t-neutral-200 dark:border-t-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 md:pr-5">
            <EditAccountInput label={'رمز عبور فعلی'} value={''} icon={'#lock-closed'} />
            <EditAccountInput label={'رمز عبور جدید'} value={''} icon={'#lock-closed'} />
          </div>
          <button className="button-primary button-outline button-xl w-full sm:w-62 mr-auto mt-8">تغییر رمز عبور</button>
      </form>
    </main>
  )
}
