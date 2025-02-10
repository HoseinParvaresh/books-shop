import Alert from "../../../components/Utils/Alert"
import validator from "validator"
import apiRequests from './../Configs/Configs'
import baseURL from './../../../components/Utils/helperFunction/baseURL'

const validatorUserBook = (userBook) => {
    
    if(validator.isEmpty(userBook.title.trim())) { 
        Alert('error',"عنوان کتاب درست وارد نشده یا خالی است") 
        return false
    } 
    if(validator.isEmpty(userBook.category)) { 
        Alert('error',"دسته بندی انتخاب نشده") 
        return false   
    } 
    if (validator.isEmpty(userBook.province)) { 
        Alert('error',"محل آگهی انتخاب نشده")
        return false 
    }
    if (validator.isEmpty(userBook.status)) { 
        Alert('error',"وضعیت کتاب انتخاب نشده")
         return false 
    } 
    if (!userBook.chat && !userBook.number) { 
        Alert('error',"حداقل باید یک روش ارتباط رو فعال کنی") 
        return false
    } 
    if (validator.isEmpty(userBook.description.trim())) { 
        Alert('error',"توضیحات درست وارد نشده یا خالی است")
        return false
    }
    if ([userBook.image1, userBook.image2, userBook.image3, userBook.image4, userBook.image5].every(img => img.name === undefined)) {
        Alert('error',"حداقل باید یک تصویر آپلود کنی"); 
        return false
    } 
    return true  
}
const addUserBook = (data) => {
    apiRequests.post('/userBooks',data).then(res => {
            Alert('success','کتاب شما ثبت و بعد از بررسی منتشر خواهد شد.')
            setTimeout(()=>{
                window.location.replace(`${baseURL}/user-dashboard/main-panel`);
            }, 2000)
    }); 
}
const uploadImage = async (image1,image2,image3,image4,image5,data) => {

    await upload(image1).then(res => {
        if(res) {
            data.image1 = res
        }
    })
    await upload(image2).then(res => {
        if(res) {
            data.image2 = res
        }
    })
    await upload(image3).then(res => {
        if(res) {
            data.image3 = res
        }
    })
    await upload(image4).then(res => {
        if(res) {
            data.image4 = res
        }
    })
    await upload(image5).then(res => {
        if(res) {
            data.image5 = res
        }
    })

    addUserBook(data)
    
}
const upload = async (file) => {
    const upload_preset = "user_images"
    const cloud_name = "dt0lzjiwt"
    const api_key = "695583444611436"
    
    if (file.name === undefined) {
      return false;
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset); 
    formData.append("api_key", api_key);
  
    try {
      //send file image to cloudinary
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url;
      }
      
    } catch (error) {
      Alert('error',error)
    }
}


export {validatorUserBook,uploadImage}