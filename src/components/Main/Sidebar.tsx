import React from 'react'
import { IconClose } from '../Auxiliary/Icons'
import Options from '../Options'

interface ISidebarProps {
    handleOpen: () => void
}

const Sidebar = ({ handleOpen }: ISidebarProps): React.JSX.Element => {
    return (
        <aside className='w-full h-screen bg-blue-0'>
            <div onClick={handleOpen} className='flex justify-end items-center pt-4 pr-5'>
                {IconClose}
            </div>
            <ul className='flex flex-col items-center justify-center text-xl text-center h-screen gap-y-7'>
                <Options
                    text='Início'
                    id='inicio' />
                <Options
                    id='servicos'
                    text='Serviços' />
                <Options
                    id='sobre'
                    text='Sobre mim' />
            </ul>
        </aside>
    )
}

export default Sidebar