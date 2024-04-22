import Image from "next/image"
import Options from "../Options"
import talk from "../../../public/images/talk.png"

const Benefits = (): React.JSX.Element => {
    return (
        <section className='w-4/5 lg:w-full xl:w-4/5 flex flex-col items-center px-2'>
            <h1 className='text-3xl mb-10 tracking-widest font-bold text-black/60 text-center font-serif'>Benefícios da Terapia</h1>
            <div className='w-full flex md:flex-col lg:flex-row justify-center items-center gap-10'>
                <div className='hidden w-1/2 md:block md:w-full lg:w-1/2'>
                    <Image
                        src={talk}
                        alt='Foto duas pessoas conversando'
                        width={900}
                        height={900}
                        priority
                    />
                </div>
                <div className='w-full lg:w-1/2 xl: md:w-full flex justify-center items-center'>
                    <ul className='flex flex-col gap-y-16 md:mt-5 items-start'>
                        <div className='flex gap-5 items-center'>
                            <p className='w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-0'></p>
                            <Options
                                text='Ampliar auto conhecimento'
                                className='text-slate-950 w-auto hover:text-slate-950 hover:font-normal text-sm sm:text-normal md:text-xl text-left md:text-center'
                            />
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-0'></p>
                            <Options
                                text='Desenvolver habilidades de enfrentamento'
                                className='text-slate-950 w-auto hover:text-slate-950 hover:font-normal text-sm sm:text-normal md:text-xl text-left md:text-center'
                            />
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-0'></p>
                            <Options
                                text='Ajudar no processo da tomada de decissão'
                                className='text-slate-950 w-auto hover:text-slate-950 hover:font-normal text-sm sm:text-normal md:text-xl text-left md:text-center'
                            />
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-0'></p>
                            <Options
                                text='Indentificar e modificar comportamentos disfuncionais'
                                className='text-slate-950 w-auto hover:text-slate-950 hover:font-normal text-sm sm:text-normal md:text-xl text-left md:text-center'
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Benefits