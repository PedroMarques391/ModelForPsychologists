import Link from 'next/link'
import React from 'react'

interface IOptionsProps {
  text: string | any
  className?: string
  href?: string
  id?: string
}

const Options = ({ text, className, href, id }: IOptionsProps): React.JSX.Element => {
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
        <li
          className={`text-green-50 hover:text-green-200 hover:font-bold transition-all duration-500 hover:animate-pulse w-32 ${className}`}>
          <a href={`#${id}`}>{text}</a>
        </li>
      )
  )
}

export default Options