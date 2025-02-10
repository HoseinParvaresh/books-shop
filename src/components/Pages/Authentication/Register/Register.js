import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {validatorInfo,validatorUser} from '../../../../Services/Axios/Requests/Auth/Signup';
import { Toaster } from 'react-hot-toast';
import Alert from '../../../Utils/Alert';
import OtpGenerate from './OtpGenerate';
import { switchTheme } from '../../../Utils/helperFunction';
import validOTP from '../../../../Services/Axios/Requests/Auth/ValidOTP';
import DesktopLogo from './../../../Common/Header/Logo/DesktopLogo'

export default function Register() {

	const [userName,setUserName] = useState('')
	const [phoneNumber,setPhoneNumber] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [stepRegister,setStepRegister] = useState(['','hidden'])
	const [otp,setOtp] = useState('')
	const [otpInput1,setOtpInput1] = useState('')
	const [otpInput2,setOtpInput2] = useState('')
	const [otpInput3,setOtpInput3] = useState('')
	const [otpInput4,setOtpInput4] = useState('')
	const [otpInput5,setOtpInput5] = useState('')

    useEffect(() => switchTheme(), []);


	const submitForm = (e) => {
		e.preventDefault();
		
		validatorInfo(userName,phoneNumber,email,password) ?  
		validatorUser(userName,phoneNumber,email).then(res => {
			if(res) {
				setStepRegister(['hidden',''])
				let otpNumber = OtpGenerate();
				Alert('success',`کد تایید شما : ${otpNumber}`)
				setOtp(otpNumber)	
			}
		}) :
		console.log(false);
	}

	const otpSubmit = () => {
		validOTP(otp,otpInput1,otpInput2,otpInput3,otpInput4,otpInput5,
			userName,phoneNumber,email,password)
	}
	
	const resendOtp = () => {
		let otpNumber = OtpGenerate();
		Alert('success',`کد تایید شما : ${otpNumber}`)
		setOtp(otpNumber)
	}

	const backwardBtn = () => {
		setStepRegister(['','hidden'])
	}

	const moveToNextOtpInput = (e) => {
		let maxLength = parseInt(e.target.maxLength)
		let inputValue = e.target.value

		if(e.key === 'Backspace' && inputValue.length === 0) {
			let previousInput = e.target.previousElementSibling;
			if(previousInput) {
				previousInput.focus();
			}
		} else if (inputValue.length >= maxLength && e.key !== 'Backspace') {
			let nextInput = e.target.nextElementSibling;
			if(nextInput) {
				nextInput.focus()
			}
		}

		if(!e.target.nextElementSibling) {
			otpSubmit()
		}
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
			{/* <!-- Page Body => Step 1 - Student Data Inputs / Step 2 - OTP  --> */}
			<div className="max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-white dark:bg-primary-dark rounded-2xl">
				{/* <!-- Step 1 - Student Data Inputs --> */}
				<div className={`user-data ${stepRegister[0]}`}>
					<h4 className="font-DanaBold text-xl mb-4 sm:mb-4.5">عضویت</h4>
					<p className="mb-5"> حساب کاربری دارید؟ <Link className='text-primary font-DanaBold' to={'/login'}>وارد شوید</Link></p>
					{/* form */}
					<form className="space-y-5" autoComplete="on">
						{/* <!-- username Input --> */}
						<div className="relative">
							<input type="text" value={userName} onChange={e => setUserName(e.target.value)} className="form-input has-icon dark:bg-[#333c4c]" placeholder="نام کاربری" autoFocus=""/>
							<svg className="left-3.5 size-5">
								<use href="#user"></use>
							</svg>
						</div>
						{/* <!-- phone number Input --> */}
						<div className="relative">
							<input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-input has-icon dark:bg-[#333c4c]" placeholder="شماره موبایل" inputMode="tel"/>
							<svg className="left-3.5 size-5">
								<use href="#phone"></use>
							</svg>
						</div>
						{/* <!-- email Input --> */}
						<div className="relative">
							<input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-input has-icon dark:bg-[#333c4c]" placeholder="آدرس ایمیل" inputMode="email"/>
							<svg className="left-3.5 size-5">
								<use href="#envelope"></use>
							</svg>
						</div>
						{/* <!-- password Input --> */}
						<div className="relative">
							<input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-input has-icon dark:bg-[#333c4c]" placeholder="رمز عبور"/>
							<svg className="left-3.5 size-5">
								<use href="#lock-closed"></use>
							</svg>
						</div>
						{/* submit Button */}
						<button onClick={submitForm} className="user-data__submit button-primary button-xl w-full">ادامه</button>
					</form>
				</div>
				{/* <!-- Step 2 - OTP --> */}
				<div className={`otp ${stepRegister[1]}`}>
					{/* OTP Form Head */}
					<div className="flex items-center justify-between">
						<span className="font-danaBold text-xl">کد تایید</span>
						<svg onClick={backwardBtn} className="w-7 h-7 text-slate-500 cursor-pointer">
							<use href="#arrow-left-circle-mini"></use>
						</svg>
					</div>
					<span className="block text-center my-4 sm:my-5"> کد تایید برای <span className="otp-phone__text"> {phoneNumber} </span> ارسال شد. </span>
					{/* OTP Inputs */}
					<form className="otp__form">
						<div className="flex justify-center gap-x-1 child:dark:bg-[#333c4c]" dir="ltr">
							<input value={otpInput1} onChange={e => setOtpInput1(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required=""/>
							<input value={otpInput2} onChange={e => setOtpInput2(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required=""/>
							<input value={otpInput3} onChange={e => setOtpInput3(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required=""/>
							<input value={otpInput4} onChange={e => setOtpInput4(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required=""/>
							<input value={otpInput5} onChange={e => setOtpInput5(e.target.value)} onKeyUp={moveToNextOtpInput} className="form-input" type="text" inputMode="numeric" min="0" max="9" maxLength="1" required=""/>
						</div>
						<button onClick={(e)=>{e.preventDefault(); otpSubmit()}} type="submit" className="button-primary button-xl w-full mt-5">تایید</button>
					</form>
					{/* Resend OTP */}
					<div className="flex items-center justify-between font-danaMedium text-sm text-slate-500 mt-5">
						<div className="underline underline-offset-2">حریم خصوصی</div>
						<button type="button" className="user-otp__resend">
							<span onClick={resendOtp}> ارسال دوباره </span>
						</button>
					</div>
				</div>
			</div>
			{/* bottom form text */}
			<div className="max-w-[330px] w-full mx-auto text-center mt-7 sm:mt-8">
				<p> با عضویت در سایت، تمامی <div className='text-green-500'>قوانین و شرایط</div> استفاده از خدمات وبسایت را پذیرفته اید. </p>
			</div>
			{/* background color */}
			<div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-20 blur-[120px] rounded-full"></div>
			<div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400 opacity-20 blur-[120px] rounded-full"></div>
		</main>
    </div>
  )
}
