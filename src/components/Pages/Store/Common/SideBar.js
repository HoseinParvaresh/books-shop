import React,{useState} from 'react'
import ProductCategory from './ProductCategory'
import ToggleBox from '../SecondHandBooks/ToggleBox'

export default function SideBar(Props) {

    const [categoryFilterBox,setCategoryFilterBox] = useState('')
    const [categoryFilterIcon,setCategoryFilterIcon] = useState('rotate-180')

    const categoryFilterHandler = () => {
        categoryFilterBox ?
        setCategoryFilterBox('') :
        setCategoryFilterBox('h-17')
    
        categoryFilterIcon ? 
        setCategoryFilterIcon('') :
        setCategoryFilterIcon('rotate-180')
    }

  return (
    <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
        {/* SearchBox & Toggle Box Container & Category Filter */}
        <form id="archive_filters" className="space-y-6">
            {/* <!-- SearchBox --> */}
            <div className="h-17 bg-primary-light dark:bg-primary-dark rounded-xl p-4 md:p-5">
                <div className="flex justify-between gap-x-6 h-full text-slate-500 dark:text-primary-light">
                    <input type="text"  name="s" className="md:font-Dana placeholder-slate-500 bg-transparent flex-grow outline-none" placeholder="جستجو بین کتاب ها"/>
                    <button type="submit">
                        <svg className="w-7 h-7">
                            <use href="#magnifying-glass"></use>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Toggle Box */}
            <div className='hidden md:block space-y-6'>
                {
                    Props.toggleBox && 
                    <ToggleBox items={Props.toggleBox}/>
                }
            </div>
            {/* <!-- Category Filter --> */}
            <div className={`bg-primary-light dark:bg-primary-dark rounded-xl p-5 hidden md:block overflow-hidden ${categoryFilterBox}`} id="category-collapse">
                {/* title & button */}
                <div onClick={categoryFilterHandler} className="flex items-center justify-between mb-5 pb-5 border-b border-b-neutral-200/60 dark:border-b-white/10 cursor-pointer">
                    {/* title */}
                    <div className="flex items-center gap-x-2 font-DanaBold">
                        <svg className="w-7 h-7">
                            <use href="#folder-open"></use>
                        </svg>
                        {Props.toggleBox ? 'دسته بندی کتاب ها' : 'دسته بندی استان ها'}						
                    </div>
                    {/* button */}
                    <button type="button" data-collapse="#category-collapse" data-height="h-17">
                        <svg className={`w-5.5 h-5.5 ${categoryFilterIcon}`}>
                            <use href="#chevron-down"></use>
                        </svg>
                    </button>
                </div>
                {/* Product Category */}
                <div className="space-y-4.5">
                    <ProductCategory items={Props.categoryList}/>
                </div>
            </div>
        </form>
    </aside>
  )
}
