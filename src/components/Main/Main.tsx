import React from 'react'
import Contact from '../Auxiliary/Contact'
import Home from '../Layout/Home'
import Services from '../Layout/Services'
import Benefits from '../Layout/Benefits'
import About from '../Layout/About'
import Steps from '../Layout/Steps'
import Depositions from '../Layout/Depositions'
import FAQS from '../Layout/FAQS'

const Main = (): React.JSX.Element => {
    return (
        <main
            id='inicio'
            className='flex flex-col items-center justify-center mt-16 sm:mt-0'>
            <Home />
            <Services />
            <Contact text="Comece a mudança dentro de você" />
            <Benefits />
            <About />
            <Steps />
            <Contact text="Comece a mudança dentro de você" />
            <Depositions />
            <FAQS />
            <Contact text={"Dê o primeiro passo"} className='my-10' />
        </main>
    )
}

export default Main