import Link from 'next/link'
import React from 'react'

interface IOptionsProps {
  text: string | any
  className?: string
  href?: string
}

const Options = ({ text, className, href }: IOptionsProps): React.JSX.Element => {
  return (
    href ? (
      <li className={`
      text-green-50 hover:text-green-200 
      hover:font-bold transition-all duration-500 
      hover:animate-pulse p-2`
      }>
        <Link href={href} target='_blank' >
          {text}
        </Link>
      </li>
    ) :
      (
        <li className={`text-green-50 hover:text-green-200 hover:font-bold transition-all duration-500 hover:animate-pulse w-32 ${className}`}>{text}</li>
      )
  )
}

export default Options