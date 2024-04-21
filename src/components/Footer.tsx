import React from 'react'
import Logo from './Logo'
import Options from './Options'
import { IconFacebook, IconInstagram, IconLinkedin } from './Icons'

const Footer = (): React.JSX.Element => {
    return (
        <footer className=' bg-black/60 flex flex-col sm:flex-row justify-center items-center w-full'>
            <div className='w-full md:w-1/2 lg:w-2/5 flex justify-center'>
                <Logo className='sm:text-2xl' />
            </div>
            <div className='w-full md:w-1/2 lg:w-3/5 flex flex-col lg:flex-row justify-around items-center gap-x-5'>
                <div className='flex flex-col text-blue-100 mt-10 lg:mt-0'>
                    <h1 className='text-xl mb-5 tracking-widest font-bold text-center font-serif'>Redes Sociais</h1>
                    <ul className='flex gap-5'>
                        <Options
                            text={IconFacebook("50")}
                            href='https://www.facebook.com' />
                        <Options
                            text={IconInstagram("50")}
                            href='https://www.instagram.com' />
                        <Options
                            text={IconLinkedin("50")}
                            href='https://www.linkedIn' />
                    </ul>
                   
                </div>
                <div className='text-blue-100 text-center lg:text-left my-5'>
                    <div className='font-serif'>
                        <h1 className='text-xl mb-5 tracking-widest font-bold'>Horário de Funcionamento</h1>
                        <p>Segunda a Sexta: 08h às 20h</p>
                    </div>
                    <div className='flex flex-col gap-y-3 font-serif mt-5'>
                        <p className='text-xl'>Contato</p>
                        <p className='text-lg'>(99) 99999-9999</p>
                        <p className='text-lg'>São Paulo, SP.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer