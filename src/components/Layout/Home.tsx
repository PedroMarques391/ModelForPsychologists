import Image from "next/image"
import Button from "../Button"
import React from "react"
import Photo from "../../../public/images/photo.jpg"


const Home = (): React.JSX.Element => {
  return (
    <section className='flex w-4/5 flex-col lg:flex-row items-center mt-10'>
                <div className='w-full lg:w-1/2 flex justify-center order-2 lg:order-1'>
                    <div className='w-full sm:w-1/2 flex flex-col justify-center items-center font-mono mt-5 sm:mt-0'>
                        <h1 className='text-3xl mb-8 font-bold'>Ana Beatriz Mendes</h1>
                        <h2 className='w-60 text-lg md:text-xl text-center'>Psicóloga especialista em <span className='font-bold'>Psicologia Clínica</span></h2>
                        <div className='animate-line bg-blue-0 h-0.5 mb-2'></div>
                        <div className='animate-line2 bg-blue-0 h-0.5 mb-8'></div>
                        <p className='text-2xl pb-5'>Sessão 100% online</p>
                        <div className='w-1/2'>
                            <Button
                                message='Olá, eu gostaria de mais informações sobre a terapia online.'
                                text='Saiba mais!' />
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2'>
                    <Image
                        src={Photo}
                        alt='Foto de capa da página'
                        width={800}
                        height={800}
                        priority
                    />
                </div>
            </section>
  )
}

export default Home