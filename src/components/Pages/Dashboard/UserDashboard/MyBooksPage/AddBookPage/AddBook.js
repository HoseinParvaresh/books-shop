import React,{useState,useEffect} from 'react'
import AccountOverviewSection from './../../../Common/AccountOverviewSection'
import { provinces } from '../../../../../Utils/helperFunction'
import { useOutletContext } from 'react-router-dom'
import { validatorUserBook,uploadImage } from '../../../../../../Services/Axios/Requests/UserBook'
import { Toaster } from 'react-hot-toast'


export default function AddBook() {

  const [user] = useOutletContext()

  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('')
  const [status,setStatus] = useState('')
  const [province,setProvince] = useState('')
  const [description,setDescription] = useState('')
  const [chat,setChat] = useState(true)
  const [number,setNumber] = useState(true)
  const [image1,setImage1] = useState('')
  const [image2,setImage2] = useState('')
  const [image3,setImage3] = useState('')
  const [image4,setImage4] = useState('')
  const [image5,setImage5] = useState('')
  const [showBtn,setShowBtn] = useState(['hidden',''])

 const previewImage = (e) => {
    const [file] = e.target.files
    if (file) {
      e.target.nextElementSibling.src = URL.createObjectURL(file)
      e.target.previousElementSibling.classList.add('hidden')
  }

 }
 const submitForm = (e) => {
  e.preventDefault()

  const userBook = {
    title,
    category,
    status,
    province,
    chat,
    number,
    review_status:'pending',
    createdAt: new Date(),
    createdBy : {
      id: user.id,
      name: user.userName,
      number: user.phoneNumber
    },
    description,
    image1,
    image2,
    image3,
    image4,
    image5
  }
  if(validatorUserBook(userBook)) {
    uploadImage(image1,image2,image3,image4,image5,userBook)
    setShowBtn(['','hidden'])
  }
  
 }
  useEffect(() => {
    document.querySelectorAll('.checkbox__input')[0].checked = true
    document.querySelectorAll('.checkbox__input')[1].checked = true
  }, []);

  return (
    <div className="max-w-[1332px] w-full px-4 md:px-8 pb-5 md:pb-8 mx-auto">
      <div>
        <Toaster
        position="top-right"/>
		  </div>
      <AccountOverviewSection items={[
                    {id:1,title:'ثبت کتاب جدید',link:'/user-dashboard/my-books', buttonText:'بازگشت به کتاب ها'},
              ]}/>
      <div>
        {/* form */}
        <form className='px-3 space-y-7 md:space-y-8'>
          {/* book name */}
          <div className="relative">
              <label className="inline-block font-Dana text-sm mb-2 md:mb-3">عنوان کتاب</label>
              <input type="text" placeholder='عنوان کتاب' value={title} onChange={(e)=> setTitle(e.target.value)} className="w-full h-13 placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-primary-dark text-sm py-3.5 pr-3.5 pl-13 rounded outline-none" required=""/>
          </div>
          {/* book status / book category / book province */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
              {/* book category */}
              <div>
                <label className="inline-block font-Dana text-sm mb-2 md:mb-3"> دسته بندی </label>
                <select name="category" onChange={(e) => setCategory(e.target.value)} required="" className="w-full h-13 text-slate-500 dark:text-gray-400 bg-white dark:bg-primary-dark text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
                  <option value={false}> موضوعش چیه؟ </option>
                  <option value="داستان و رمان">داستان و رمان</option>
                  <option value="مدیریت و کسب و کار">مدیریت و کسب و کار</option>
                  <option value="ادبیات">ادبیات</option>
                  <option value="روان‌شناسی">روان‌شناسی</option>
                  <option value="زندگی‌نامه">زندگی‌نامه</option>
                  <option value="هنر">هنر</option>
                  <option value="فلسفه منطق">فلسفه منطق</option>
                  <option value="تاریخ">تاریخ</option>
                  <option value="علمی">علمی</option>
                  <option value="زبان خارجه">زبان خارجه</option>
                  <option value="کودک و نوجوان">کودک و نوجوان</option>
                  <option value="سایر دسته بندی ها">سایر دسته بندی ها</option>
                </select>
              </div>
              {/* book province */}
              <div>
                <label className="inline-block font-Dana text-sm mb-2 md:mb-3"> محل آگهی </label>
                <select name="province" onChange={(e) => setProvince(e.target.value)} required="" className="w-full h-13 text-slate-500 dark:text-gray-400 bg-white dark:bg-primary-dark text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
                  <option value={false}> کجا زندگی میکنی؟ </option>
                    {provinces.map(province => (
                      <option key={province.id} value={province.name}>{province.name}</option>
                    ))}
                </select>
              </div>
              {/* book status */}
              <div>
                <label className="inline-block font-Dana text-sm mb-2 md:mb-3"> وضعیت </label>
                <select name="status" onChange={(e) => setStatus(e.target.value)} required="" className="w-full h-13 text-slate-500 dark:text-gray-400 bg-white dark:bg-primary-dark text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
                  <option value={false}> کتابت در چه حاله؟ </option>
                  <option value="کاملا نو">کاملا نو</option>
                  <option value="در حد نو">در حد نو</option>
                  <option value="آسیب دیده"> آسیب دیده </option>
                </select>
              </div>
          </div>
          {/* chat and phone */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
            {/* chat */}
            <label className="checkbox w-full flex justify-between h-13 text-slate-500 dark:text-gray-400 bg-white dark:bg-primary-dark text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
              <input onChange={(e)=> setChat(e.target.checked)} className="checkbox__input" type="checkbox"/>
              <span className="text-sm font-Dana select-none"> قابلیت چت کردن باهات فعال باشه؟ </span>
              <span className="checkbox__marker"></span>
            </label>
            {/* phone */}
            <label className="checkbox w-full flex justify-between h-13 text-slate-500 dark:text-gray-400 bg-white dark:bg-primary-dark text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
              <input onChange={(e)=> setNumber(e.target.checked)} className="checkbox__input" type="checkbox"/>
              <span className="text-sm font-Dana select-none"> شمارت تلفنت رو نشون بدیم؟ </span>
              <span className="checkbox__marker"></span>
            </label>
          </div>
          {/* description */}
          <textarea value={description} onChange={(e)=> setDescription(e.target.value)} className="w-full min-h-48 placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-primary-dark text-sm p-3.5 outline-none rounded" placeholder="توضیحات" id="text" name="text" required=""></textarea>
          {/* images */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-5">
              <label htmlFor="file-1" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="hidden md:block mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">کلیک کنید</span> یا بکشید و رها کنید</p>
                  </div>
                  <input accept="image/*" onChange={(e)=> {setImage1(e.target.files[0]); previewImage(e);}} id="file-1" type="file" className="hidden"/>
                  <img id="blah" src="/" alt="" />
              </label>
              <label htmlFor="file-2" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="hidden md:block mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">کلیک کنید</span> یا بکشید و رها کنید</p>
                  </div>
                  <input accept="image/*" onChange={(e)=> {setImage2(e.target.files[0]); previewImage(e)}} id="file-2" type="file" className="hidden" />
                  <img id="blah" src="/" alt="" />
              </label>
              <label htmlFor="file-3" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="hidden md:block mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">کلیک کنید</span> یا بکشید و رها کنید</p>
                  </div>
                  <input accept="image/*" onChange={(e)=> {setImage3(e.target.files[0]); previewImage(e)}} id="file-3" type="file" className="hidden" />
                  <img id="blah" src="/" alt="" />
              </label>
              <label htmlFor="file-4" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="hidden md:block mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">کلیک کنید</span> یا بکشید و رها کنید</p>
                  </div>
                  <input accept="image/*" onChange={(e)=> {setImage4(e.target.files[0]); previewImage(e)}} id="file-4" type="file" className="hidden" />
                  <img id="blah" src="/" alt="" />
              </label>
              <label htmlFor="file-5" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="hidden md:block mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">کلیک کنید</span> یا بکشید و رها کنید</p>
                  </div>
                  <input accept="image/*" onChange={(e)=> {setImage5(e.target.files[0]); previewImage(e)}} id="file-5" type="file" className="hidden" />
                  <img id="blah" src="/" alt="" />
              </label>
          </div>
          {/* button */}
          <button onClick={submitForm} className={`button-primary button-xl sm:w-62 ${showBtn[1]}`}> ثبت اطلاعات کتاب </button> 
          <div className={`bg-green-600 button-primary button-xl sm:w-62 cursor-auto  ${showBtn[0]}`}> ثبت اطلاعات کتاب </div> 
        </form>
      </div>
          

    </div>
  )
}
