import useReadingProgress from '@/hooks/useReadingProgress'
import React from 'react'

const Progress = (): React.JSX.Element => {
    const completion = useReadingProgress()
  return (
        <span 
        style={{transform: `translateX(${completion - 100}%)`}}
        className='bg-blue-400 h-1 w-full absolute bottom-0'
        
    />
  )
}

export default Progress