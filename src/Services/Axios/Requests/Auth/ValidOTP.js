import Alert from "../../../../components/Utils/Alert"
import { addUser } from "./Signup"

function validOTP (otp,otpInput1,otpInput2,otpInput3,otpInput4,otpInput5,
	userName,phoneNumber,email,password) {

    const otpInputs = otpInput1+otpInput2+otpInput3+otpInput4+otpInput5

	if(otpInputs !== otp) {
		Alert('error','کد وارد شده صحیح نیست')
		return
	}
		Alert('success','با موفقیت ثبت نام شدید.')
		const newUser = {
			name: '',
			userName,
			phoneNumber,
			email,
			password,
			credit: 0,
			role:'user',
			createdAt: new Date(),
			myBookmark:[],
			notification : [],
		}
		addUser(newUser)
		setTimeout(()=>{
		window.location.replace('https://books-shop.liara.run');
	}, 1500)
}

export default validOTP