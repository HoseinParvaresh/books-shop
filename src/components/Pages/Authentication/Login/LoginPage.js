import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import apiRequests from '../../../../Services/Axios/Configs/Configs'
import { switchTheme } from '../../../Utils/helperFunction'
import Login from '../../../../Services/Axios/Requests/Auth/Login'
import Alert from '../../../Utils/Alert'
import DesktopLogo from './../../../Common/Header/Logo/DesktopLogo'

export default function LoginPage() {

    const [passwordInput,setPasswordInput] = useState('')
    const [emailInput,setEmailInput] = useState('')
    const [users,setUsers] = useState([])

    useEffect(() => {
        switchTheme()
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await apiRequests.get("/users");
          setUsers(response.data);
        } catch (error) {
          Alert('error',"Error fetching data from LoginPage.js")
        }
      };

      const submitForm = (e) => {
        e.preventDefault()
        Login(users,emailInput,passwordInput)
 
      }

    return (
        <div className='blog text-gray-900 dark:text-primary-light bg-gray-100 dark:bg-gray-900 font-Dana'>
            <div>
                <Toaster
                position="top-right"/>
            </div>
            <main className="flex-center flex-col relative px-4 py-6 min-h-screen">
            {/* <!-- Logo --> */}
            <div className='mb-5'>
				<DesktopLogo/>
			</div>
            {/* <!-- Page Body --> */}
            <div className="max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-primary-light dark:bg-primary-dark rounded-2xl">
                {/* <!-- Data Inputs --> */}
                <div>
                    <h4 className="font-DanaBold text-xl mb-4 sm:mb-4.5">ورود</h4>
                    <p className="mb-5"> حساب کاربری ندارید؟ <Link className='text-primary font-DanaBold' to={'/register'}>ثبت نام کنید </Link></p>
                    {/* form */}
                    <form className="user-data__form space-y-5" autoComplete="on">
                        {/* <!-- email Input --> */}
                        <div className="relative">
                            <input type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)}  className="form-input has-icon dark:bg-[#333c4c]" placeholder="آدرس ایمیل" inputMode="email"/>
                            <svg className="left-3.5 size-5">
                                <use href="#envelope"></use>
                            </svg>
                        </div>
                        {/* <!-- password Input --> */}
                        <div className="relative">
                            <input type="password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)}  className="form-input has-icon dark:bg-[#333c4c]" placeholder="رمز عبور"/>
                            <svg className="left-3.5 size-5">
                                <use href="#lock-closed"></use>
                            </svg>
                        </div>
                        {/* submit */}
                        <button type="submit" onClick={submitForm} className="button-primary button-xl w-full">ورود</button>
                        <div className="flex items-center justify-between font-Dana text-sm text-slate-500 mt-5">
                            <Link to={'#'} className="underline-offset-2">فراموشی رمز عبور</Link>
                            <Link to={'#'} className="underline underline-offset-2">حریم خصوصی</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="max-w-[330px] w-full mx-auto text-center mt-7 sm:mt-8">
                <p> با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات وبسایت  را پذیرفته اید. </p>
            </div>
            {/* background color */}
            <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-20 blur-[120px] rounded-full"></div>
            <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400 opacity-20 blur-[120px] rounded-full"></div>
            </main>
        </div>
      )
}
