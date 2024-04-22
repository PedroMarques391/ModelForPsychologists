import Image from 'next/image'
import React from 'react'
import Photo from "../../../public/images/photo.jpg"

const About = (): React.JSX.Element => {
    return (<section className='w-full mt-10'>
        <div className="relative lg:h-auto md:h-[900px] bg-white overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-blue-0 transform skew-y-12 sm:skew-y-6">
                </div>
            </div>
            <div
                id='sobre'
                className="relative z-10 p-8 w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10">
                <div className='w-full lg:w-1/2'>
                    <h1 className='block lg:hidden tracking-widest text-2xl font-medium pb-10 text-center'>Quem sou eu?</h1>
                    <Image
                        src={Photo}
                        alt='Foto de capa da página'
                        width={800}
                        height={800}
                        priority
                        className='rounded-full'
                    />
                </div>

                <div className='w-full lg:w-1/2'>
                    <h1 className='hidden lg:block text-3xl mb-10 tracking-widest font-bold text-black/60 font-serif'>Quem sou eu?</h1>
                    <div className='font-medium flex flex-col gap-6 text-base tracking-wide text-center'>
                        <p>
                            Meu nome é Dra. Ana Beatriz Mendes e sou uma psicóloga clínica apaixonada pelo desenvolvimento humano. Tive o privilégio de estagiar em instituições públicas como o CAPS e o CREAS, experiências que enriqueceram minha prática clínica e me permitiram construir uma base teórica sólida e diferenciada.
                        </p>

                        <p>
                            Minha abordagem terapêutica é fortemente influenciada pela psicologia analítico-comportamental e pelas terapias contextuais, fundamentadas em evidências científicas. Acredito firmemente que essa base sólida garante uma maior eficácia no tratamento e melhores resultados para meus pacientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About