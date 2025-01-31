import React from 'react'
import AccountStatus from './AccountStatus'
import AccountOverviewSection from './../../Common/AccountOverviewSection'
import { useOutletContext } from 'react-router-dom';
import { FormatNumber } from '../../../../Utils/helperFunction';

export default function MainPanelPage() {

    document.getElementById('aside-btn-1').classList.add('aside-btn--active')

    const [user] = useOutletContext()

  return (
        <main className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
            {/* account status section (dashboard overview) */}
            <div className="flex items-center justify-between gap-y-6 flex-wrap font-DanaBold bg-primary-light dark:bg-primary-dark py-5 px-5 sm:px-8 rounded">
                <AccountStatus items={[
                    {id:1,title:"کتاب های من",text:`${user.myBook.length} کتاب`,icon:"book-buy"},
                    {id:2,title:"مجموع تیکت های من",text:"0 تیکت",icon:"all-ticket"},
                    {id:3,title:"کتاب های نشان شده من",text:`${user.myBookmark.length} کتاب`,icon:"bookmark"},
                    {id:4,title:"موجودی کیف پول",text:`${FormatNumber(user.credit)} تومان`,icon:"credit"},
                ]}/>
            </div>
            <AccountOverviewSection items={[
                {id:1,title:'کتاب های خریداری شده',link:'/myBookBuy',text:'تا الان کتابی خریداری نکردید!',buttonText:"مشاهده همه"},
                {id:2,title:'نظرات من',link:'/myComments',text:'تا الان نظری ثبت نکرده اید!',buttonText:"مشاهده همه"},
                {id:3,title:'کتاب های نشان شده',link:'/myBookmarks',text:'تا الان کتابی را نشان نکرده اید!',buttonText:"مشاهده همه"},
            ]}/>
        </main>
  )
}
