import React from 'react'
import { IconUser } from './Auxiliary/Icons'

interface ICommentsCardProps {
    name: string
    city: string
    state: string
    text: string
}

export const CommentsCard = ({name, city, state, text}: ICommentsCardProps): React.JSX.Element => {
  return (
    <div className='border border-black/20 rounded-xl h-80 sm:h-60'>
        <div className='flex items-center p-4 gap-x-5 bg-blue-0 rounded-t-lg'>
            <div className='bg-black/10 rounded-full p-3'>{IconUser}</div>
            <div className='flex flex-col'>
                <p className='font-bold'>{name}</p>
                <p className='text-sm text-black/60'>{city} - {state}</p>
            </div>
        </div>
        <div className='p-4 text-black/50 text-center text-sm sm:text-base'>{text}</div>
    </div>
  )
}
