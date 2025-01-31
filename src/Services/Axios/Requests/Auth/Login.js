import Alert from "../../../../components/Utils/Alert"


function Login(users,emailInput,passwordInput) {
    let userInfo = null

    let valid = users.some((user) => {
        userInfo = user
        return user.email == emailInput && user.password == passwordInput
    })
    
    if(valid) {
        Alert('success','با موفقیت وارد شدید.')
        localStorage.setItem('id',userInfo.id)
        localStorage.setItem('name',userInfo.userName)
        setTimeout(()=>{
            window.location.replace('http://localhost:3001');
        }, 1500)
    } else {
        Alert('error','کاربری با این ایمیل و رمز عبور یافت نشد.')
    }
}

export default Login