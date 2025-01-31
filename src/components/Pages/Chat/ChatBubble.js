import React from 'react'
import { calcMessageSendTime } from '../../Utils/helperFunction';

export default function ChatBubble(Props) {
    
  return (
    Props.userId == Props.sender_id ? 
    (  
        <div className="flex items-start gap-2.5">
            <img className="w-8 h-8 rounded-full" src="https://secure.gravatar.com/avatar/2df798968271838f06093bd52185c318?s=96&d=mm&r=g" alt="image"/>
            <div className="flex flex-col gap-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">{Props.sender_id == Props.participants[0].id ? Props.participants[0].name : Props.participants[1].name}</span>
                </div>
                <div className="flex max-w-72 md:max-w-96 flex-col leading-1.5 px-4 py-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">{Props.content}</p>
                </div>
                <span className="text-xs mr-2 font-normal text-gray-500 dark:text-gray-400">{calcMessageSendTime(Props.timestamp)}</span>
            </div>
        </div>
    )
    :
    (
        <div className="flex items-start gap-2.5" dir='ltr'>
            <img className="w-8 h-8 rounded-full" src="https://secure.gravatar.com/avatar/2df798968271838f06093bd52185c318?s=96&d=mm&r=g" alt="image"/>
            <div className="flex flex-col gap-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">{Props.sender_id == Props.participants[0].id ? Props.participants[0].name : Props.participants[1].name}</span>
                </div>
                <div className="flex flex-col max-w-72 md:max-w-96 leading-1.5 px-4 py-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">{Props.content}</p>
                </div>
                <span className="text-xs ml-2 font-normal text-gray-500 dark:text-gray-400">{calcMessageSendTime(Props.timestamp)}</span>
            </div>
        </div>
    )
  )
}
