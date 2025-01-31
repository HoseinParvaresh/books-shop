
const OtpGenerator = () => {
    let num1 = Math.floor(Math.random()*9).toString()
    let num2 = Math.floor(Math.random()*9).toString()
    let num3 = Math.floor(Math.random()*9).toString()
    let num4 = Math.floor(Math.random()*9).toString()
    let num5 = Math.floor(Math.random()*9).toString()
    
    return (num1+num2+num3+num4+num5)
}



export default OtpGenerator