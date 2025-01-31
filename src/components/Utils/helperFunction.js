import Alert from "./Alert";

const provinces = [
  {id:1,name:'آذربایجان شرقی'},
  {id:2,name:'آذربایجان غربی'},
  {id:3,name:'اردبیل '},
  {id:4,name:'اصفهان '},
  {id:5,name:'البرز '},
  {id:6,name:'ایلام '},
  {id:7,name:'بوشهر '},
  {id:8,name:'تهران '},
  {id:9,name:'چهارمحال و بختیاری'},
  {id:10,name:'خراسان جنوبی'},
  {id:11,name:'خراسان رضوی'},
  {id:12,name:'خراسان شمالی'},
  {id:13,name:'خوزستان '},
  {id:14,name:'زنجان '},
  {id:15,name:'سمنان '},
  {id:16,name:'سیستان و بلوچستان'},
  {id:17,name:'فارس '},
  {id:18,name:'قزوین '},
  {id:19,name:'قم '},
  {id:20,name:'کردستان '},
  {id:21,name:'کرمان '},
  {id:22,name:'کرمانشاه '},
  {id:23,name:'کهگیلویه و بویراحمد'},
  {id:24,name:'گلستان '},
  {id:25,name:'گیلان '},
  {id:26,name:'لرستان '},
  {id:27,name:'مازندران '},
  {id:28,name:'مرکزی '},
  {id:29,name:'هرمزگان '},
  {id:30,name:'همدان '},
  {id:31,name:'یزد '},
]
const isLogin = localStorage.getItem('id') && localStorage.getItem('name');
const isAdmin = (localStorage.getItem('id') == 'admin') && (localStorage.getItem('name') == 'admin')

function FormatNumber (num) {
    return new Intl.NumberFormat('en-US', {style : "decimal" }).format(num);
}
function calcDiscountPrice (price,discount) {
    return price - (price * (discount / 100))
}
function switchTheme () {
    if(localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
}
function checkLogin () {
  if(localStorage.getItem('id')) {
    return true
  } else {
    Alert('error','ابتدا وارد شوید یا ثبت نام کنید')
    return false
  }
}
function calcRelativeTimeDifference (createdAt) {
  const currentTime = new Date();
  const createdTime = new Date(createdAt);

  const timeDifference = currentTime - createdTime;
  const hours = Math.floor(timeDifference / (60 * 60 * 1000));
  const minutes = Math.floor(timeDifference / (60 * 1000));
  const days = Math.floor(hours / 24);


  if (minutes < 1) {
    return 'لحظاتی پیش'
  }
  if(minutes < 60) {
    return `${minutes} دقیقه پیش`
  } 
  else {
    if(hours < 24) {
      return `${hours} ساعت پیش`;
    } else {
      return `${days} روز پیش`;
    }
  }
};
function calcMessageSendTime (timeStamp) {
  const createdTime = new Date(timeStamp);
  return createdTime.getHours() + ':' + createdTime.getMinutes()
  
}
function findImage(image1,image2,image3,image4,image5) {
  return image1 ? image1 : 
                (image2 ? image2 : 
                    (image3 ? image3 : 
                        (image4 ? image4 : 
                            (image5 ? image5 :
                                ''
                            ))))
}
function userSignOut () {
  localStorage.removeItem('id')
  localStorage.removeItem('name')
  window.location.reload()
}

export {FormatNumber,calcDiscountPrice,switchTheme,checkLogin,calcRelativeTimeDifference,calcMessageSendTime,provinces,findImage,
        isLogin,isAdmin,userSignOut}