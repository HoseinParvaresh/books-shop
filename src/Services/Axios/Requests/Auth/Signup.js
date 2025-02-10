import apiRequests from "./../../Configs/Configs"
import Alert from "../../../../components/Utils/Alert"
import validator from 'validator';

const validatorInfo = (userName,phoneNumber,email,password) => {
    
    if(!validator.matches(userName, "^[a-zA-Z][a-zA-Z0-9_.]{4,25}$") || validator.isEmpty(userName)) {
        Alert('error',"نام کاربری رو درست بزن") 
        return false 
    } 
    if(!validator.isMobilePhone(phoneNumber.trim(),'fa-IR')) {
        Alert('error',"شماره موبایلت رو درست بزن")
        return false   
    } 
    if (!validator.isEmail(email.trim())) {
        Alert('error',"ایمیلت رو درست وارد کن")
        return false 
    } 
    if (!validator.isStrongPassword(password.trim(),{minLength: 8, minUppercase: 0, minNumbers: 1, minSymbols: 0})) {
        Alert('error',"یه پسورد قوی تر بزن")
        return false 
    }
    return true
}

const validatorUser = async (userName,phoneNumber,email) => {

    const users = await apiRequests.get('/users')
           
    const userValid = users.data.some(user => {return user.userName === userName})
    const emailValid = users.data.some(user => {return user.email === email})
    const numberValid = users.data.some(user => {return user.phoneNumber === phoneNumber})
    
    if(userValid) {
        Alert('error','نام کاربری وارد شده قبلا استفاده شده است.')
        return false  
    }
    if(numberValid) {
        Alert('error','شماره موبایل وارد شده قبلا استفاده شده است.')
        return false
    }
    if(emailValid) {
        Alert('error','آدرس ایمیل وارد شده قبلا استفاده شده است.')
        return false
    }   

    return true
}

const addUser = (data) => {
    apiRequests.post('/users',data).then(res => {
        localStorage.setItem('id',res.data.id)
        localStorage.setItem('name',res.data.userName)
    }); 
}
export {validatorInfo,validatorUser,addUser}