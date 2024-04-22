import React from 'react'
import Button from '../Button'

interface IContactProps {
    text: string
    className?: string
}

const Contact = ({ text, className = "my-20" }: IContactProps): React.JSX.Element => {
    return (
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-10 ${className}`}>
            <p className='text-xl font-thin tracking-wider'>{text}</p>
            <div className='w-52'>
                <Button 
                message='Olá, eu gostaria de mais informações sobre a terapia online.'
                text='Saiba mais' />
            </div>
        </div>
    )
}

export default Contact