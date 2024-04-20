import React, { useState } from 'react'
import { IconBar, IconWhatsapp } from './Icons'
import Sidebar from './Sidebar'
import Options from './Options'
import Logo from './Logo'
import Button from './Button'
import Progress from './Progress'

const Topbar = (): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className={`sm:hidden w-1/2 fixed top-0 z-50 transition-all duration-1000 ease-in-out ${!isOpen ? "-right-[400px]" : "right-0"}`}>
                <Sidebar handleOpen={handleOpen} />
            </nav>
            <nav className='bg-blue-0 flex w-full sm:h-16 justify-between gap-5 pr-0 sm:pr-10 sticky z-40 top-0'>
                <Progress/>
                <section className='flex items-center justify-center pl-10'>
                    <Logo />
                </section>
                <section className='flex justify-center items-center'>
                    <ul className='hidden sm:flex justify-center items-center gap-10 text-black text-lg'>
                        <Options text='Início' />
                        <Options text='Serviços' />
                        <Options text='Sobre mim' />
                    </ul>
                    <div className='hidden sm:block'>
                         <Button 
                         message='Olá, como faço para marcar uma consulta?'
                         text='Fale comigo'/>
                    </div>
                       
                    <div onClick={handleOpen} className='flex sm:hidden items-center justify-end mr-5'>
                        {IconBar}
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Topbar