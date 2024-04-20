import React, { useState } from 'react'
import { IconArrowDown, IconArrowUp } from './Icons'

interface IFAQProps {
    title: string
    body: string
}

const FAQ = ({title, body}: IFAQProps): React.JSX.Element => {
    const [showBody, setShowBody] = useState(false)

    const handleShowBody = () => {
        setShowBody(!showBody);
    }
  return (
    <section>
        <div 
        onClick={handleShowBody}
        className='flex justify-between items-center text-lg sm:text-2xl font-bold text-black/60 font-serif bg-blue-0 p-3'>
            {title}
            {!showBody ? IconArrowDown : IconArrowUp}
        </div>
        <div className={`
        text-black/70 tracking-wider p-5 text-sm sm:text-base
        overflow-hidden transition-all duration-500 ease-in-out
        ${showBody ? 'max-h-full' : 'max-h-0 py-0'}`}>
            {body}
        </div>
        <div className='w-full h-1 bg-gray-200'></div>
    </section>
  )
}

export default FAQ