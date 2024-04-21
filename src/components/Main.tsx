import Image from 'next/image'
import React from 'react'
import Photo from "../../public/images/photo.jpg"
import talk from "../../public/images/talk.png"
import Button from './Button'
import Card from './Card'
import { IconCheck2, IconDocs, IconHeart, IconLike, IconUsers, IconWhatsapp, IconWindow } from './Icons'
import Options from './Options'
import SideProgress from './SideProgress'
import Carrossel from './Carrossel'
import FAQ from './FAQ'
import Contact from './Contact'

const Main = (): React.JSX.Element => {
    return (
        <section
            id='inicio'
            className='flex flex-col items-center justify-center mt-16 sm:mt-0'>
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
            <section className='flex w-full sm:w-3/5 md:w-[90%]'>
                <div
                    id='servicos'
                    className='mx-auto flex flex-col sm:flex-row gap-0 sm:gap-20 md:flex-wrap md:gap-10 md:justify-center'>
                    <Card
                        aos='fade-up'
                        text={"Transformamos vidas: mais de 100 clientes atendidos com sucesso em 2023, totalizando mais de 1800 sessões de terapia online."}
                        icon={IconHeart}
                    />
                    <Card
                        aos="fade-down"
                        text={"Especialista em Psicologia clínica. Minha atuação principal é na área de saúde mental infantil e adolescente."}
                        icon={IconWindow}
                    />
                    <Card
                        aos='fade-up'
                        text={"Recentemente contribuí para o campo da psicologia através da publicação de 6 artigos científicos."}
                        icon={IconUsers}
                    />
                </div>
            </section>

            <Contact text="Comece a mudança dentro de você" />

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

            <section className='w-full mt-10'>
                <div className="relative lg:h-auto md:h-[900px] bg-white overflow-hidden">
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <div className="absolute inset-0 bg-blue-0 transform skew-y-12 sm:skew-y-6">
                        </div>
                    </div>
                    <div className="relative z-10 p-8 w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10">
                        <div
                            id='sobre'
                            className='w-full lg:w-1/2'>
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

            <section className='w-full sm:w-4/5 flex justify-center gap-x-7'>
                <div>
                    <SideProgress />
                </div>
                <div className='w-3/5 md:w-4/5 lg:w-3/5'>
                    <Card
                        icon={IconWhatsapp(65)}
                        head='Entre em contato'
                        text='Coleta de dados do cliente, via Whatsapp.' />
                    <Card
                        icon={IconDocs}
                        head='Como funciona a terapia online?'
                        text='Apresentação da terapia online, e agendamento da sessão com a profissional.' />
                    <Card
                        icon={IconCheck2}
                        head='Agende seu primeiro atendimento!'
                        text='Confirme a sessão e horário, fazendo o pagamento.' />
                    <Card
                        icon={IconLike}
                        head='Sessão confirmada!'
                        text='Terapia online na plataforma Google Meet.' />
                </div>
            </section>

            <Contact text="Comece a mudança dentro de você" />

            <section className='w-11/12 md:w-4/5 lg:w-3/5'>
                <h1 className='text-3xl mb-10 tracking-widest font-bold text-black/60 text-center font-serif'>Depoimentos</h1>
                <Carrossel />
            </section>

            <section className='w-11/12 md:w-4/5 lg:w-3/5 mt-72'>
                <h1 className='text-xl sm:text-3xl my-10 sm:mb-10 tracking-widest font-bold text-black/60 text-center font-serif'>
                    Perguntas Frequentes (FAQ)
                </h1>
                <div className='flex flex-col gap-y-5 transition-all ease-out'>
                    <FAQ
                        title='O que esperar da terapia?'
                        body='Depende da abordagem com que o profissional trabalha. Na Terapia Comportamental, o que se espera é um processo ativo de autodescoberta, aceitação e mudança. Terapeuta e paciente se envolvem em um compromisso ativo para que o paciente construa uma vida alinhada com a a que gostaria de viver, o que pode envolve o tratamento de Transtornos Psiquiátricos, a resolução de problemas cotidianos de vida ou o desenvolvimento dos recursos necessários para a promoção das mudanças desejadas. Naturalmente o processo pode ser desconfortável em alguns momentos, especialmente quando assuntos delicados ou partes dolorosas da história do paciente são abordados. Mas o profissional é especialmente treinado para caminhar junto ao paciente e ajuda-lo a passar por este desconforto.'
                    />

                    <FAQ
                        title='Quanto tempo dura o tratamento psicológico?'
                        body='Na psicoterapia lidamos com sentimentos, emoções e pensamentos que são aprendidos ao longo da construção de cada indivíduo. Para que haja uma mudança de hábitos efetiva, é importante compreender que o tratamento psicológico leva um tempo particular para cada caso. Isso não significa que não se possa recolher efeitos positivos em um prazo mais curto.'
                    />

                    <FAQ
                        title='O que é um psicólogo?'
                        body='O Psicólogo é um profissional formado em Psicologia, um curso superior com duração de cinco anos. Na graduação ele aprende uma série de teorias que buscam explicar o comportamento humano, do normal ao patológico.
                        A graduação em Psicologia é uma formação que não acaba com a conclusão do curso. Cabe a cada psicólogo se especializar através de cursos adicionais.'
                    />

                    <FAQ
                        title='O que é uma abordagem na psicologia?'
                        body='O método de trabalho do Psicólogo é sua abordagem. Uma abordagem diz respeito à visão de mundo do psicólogo, aos conceitos que ele utiliza para compreender o comportamento humano, à sua forma de conduzir a sessão de terapia e ao tipo de intervenção que utiliza. Cada abordagem o orienta em todas estas dimensões e, em geral, existem diferenças significativas na forma com que profissionais de diferentes abordagens interpretam o comportamento e intervém sobre ele.
                        Nos meus atendimentos, aplico a Análise do Comportamento e as Terapias Contextuais – ambas pautadas em evidências científicas.'
                    />
                </div>
            </section>


            <Contact text={"Dê o primeiro passo"} className='my-10' />


        </section>
    )
}

export default Main