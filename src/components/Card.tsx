import React, { ReactNode } from 'react'

interface ICardProps {
  text: string
  icon: ReactNode
  head?: string
  aos?: string
}

const Card = ({ text, icon, head, aos = "fade-up" }: ICardProps): React.JSX.Element => {
  return (
    head ? (
      <div
        data-aos={aos}
        data-aos-mirror="true"
        data-aos-duration="1000"
        data-aos-once="false"
        className='flex flex-col items-center mt-20 bg-white w-full rounded-lg gap-y-6 shadow-2xl shadow-black'>
        <div className='mt-10'>{icon}</div>
        <h1 className='text-sm sm:text-2xl tracking-widest text-center'>{head}</h1>
        <div className='p-5 text-center flex justify-center text-gray-400 items-center text-xs sm:text-xl'>{text}</div>
      </div>
    ) : (
      <div
        data-aos={aos}
        data-aos-mirror="true"
        data-aos-duration="1000"
        data-aos-once="false"
        className='flex flex-col items-center mt-20'>
        <div className='mb-10'>{icon}</div>
        <div className='bg-blue-0 w-80 h-64 p-5 text-center flex justify-center items-center text-lg rounded-lg hover:animate-bounce transition-all'>{text}</div>
      </div>
    )
  )
}

export default Card