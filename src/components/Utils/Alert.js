import toast from "react-hot-toast"

export default function Alert(order,text) {
  return toast.custom(() => (
    <div
    className={`bg-white dark:bg-[#242a38] border-b-3 ${order == 'error' ? 'border-red-500' : 'border-primary'} shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden`}
  >
      {/* icon & text */}
      <div className="flex items-start p-4">
      {/* icon */}
        <div className="flex-shrink-0 pt-0.5 pl-3">
          <svg className={`size-11 ${order == 'error' ? 'text-red-500' : 'text-primary'}`}>
            <use href={`${order == 'error' ? '#x-circle' : '#check-circle' }`}></use>
          </svg>
        </div>
        {/* text */}
        <div className="ml-3 flex-1">
          <p className="text-base font-DanaBold text-gray-900 dark:text-primary-light">
            {order == 'error' ? 'خطا' : 'موفق'}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            {text}
          </p>
        </div>
      </div>
  </div>
  ))
}