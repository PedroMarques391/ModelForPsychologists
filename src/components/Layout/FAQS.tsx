import FAQ from "../Auxiliary/FAQ"

const FAQS = (): React.JSX.Element => {
    return (
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
    )
}

export default FAQS