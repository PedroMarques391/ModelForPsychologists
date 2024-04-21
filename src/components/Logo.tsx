import React from 'react'

interface ILogoProps {
  className?: string
}

const Logo = ({ className }: ILogoProps): React.JSX.Element => {
  return (
    <div className={
      `text-green-50 text-base sm:text-lg tracking-wider 
      sm:tracking-widest font-mono leading-6 sm:leading-5 py-4`
    }>
      <a href="#inicio">
        <p className={className}>Dr. Anna Beatriz Mendes</p>
        <div className='flex'>
          <div className='border-green-0 border-2 mr-10' />
          <p>Psicologia clínica</p>
        </div>
      </a>
    </div>
  )
}

export default Logo