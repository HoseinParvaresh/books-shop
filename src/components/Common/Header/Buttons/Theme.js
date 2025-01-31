import React,{useState,useEffect}from 'react'

export default function Theme() {

    const [themeIcon,setThemeIcon] = useState('#moon')

    const changeTheme = () => {
        if(localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
            setThemeIcon('#moon')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
            setThemeIcon('#sun')
        }
    }

    useEffect(() => {
        if(localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setThemeIcon('#sun')
          } else {
            document.documentElement.classList.remove('dark')
            setThemeIcon('#moon')
          }
      }, []);

  return (
    <button type='button' onClick={changeTheme} className="button-lg md:button-xl md:w-14 only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
        <svg className="size-5.5 md:size-6">
            <use href={themeIcon}></use>
        </svg>
    </button>
  )
}
