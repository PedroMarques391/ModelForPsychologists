import React, { useState, useEffect } from 'react'
import { IconArrowLeft, IconArrowRight } from './Auxiliary/Icons'
import { CommentsCard } from './CommentsCard'

const Carrossel = (): React.JSX.Element => {
    const cards = [
        {
            comment: <CommentsCard
                    name="João Silva"
                    city="São Paulo"
                    state="SP"
                    text='"Minha experiência com a Dra. Ana foi transformadora. Ela demonstrou empatia genuína desde o primeiro momento e me fez sentir ouvido e compreendido. Sua abordagem profissional e conhecimento especializado me deram as ferramentas necessárias para lidar com minhas dificuldades. Estou extremamente grato por sua orientação e recomendo seus serviços a todos." '
                />
        },
        {
            comment: <CommentsCard
                    name="Anna Clara"
                    city="Salvador"
                    state="BA"
                    text='Eu não poderia estar mais grato pela orientação da Dra. Ana. Sua compreensão profunda e sua capacidade de criar um espaço seguro e acolhedor me permitiram explorar questões difíceis com confiança e clareza. Sua abordagem centrada no cliente e sua dedicação ao meu bem-estar foram fundamentais para o meu progresso. Recomendo-a sem reservas a qualquer pessoa que esteja procurando por apoio emocional e orientação." '
                />
        },
        {
            comment: <CommentsCard
                    name="Maria Santos"
                    city="Rio de Janeiro"
                    state="RJ"
                    text='"Dra. Ana é uma profissional excepcional. Sua calma e gentileza me deixaram à vontade desde o início, e sua compreensão profunda das questões que enfrento me fez sentir que estou no caminho certo para a melhoria. Suas habilidades terapêuticas são verdadeiramente notáveis, e estou ansioso para continuar meu progresso com ela."'
                />
        },
        {
            comment: <CommentsCard
                    name="Pedro Oliveira"
                    city="Belo Horizonte"
                    state="MG"
                    text='"Estou muito satisfeito com minha consulta com a Dra. Ana. Ela é incrivelmente perspicaz e capaz de fornecer insights profundos que me ajudaram a entender melhor a mim mesmo e minhas circunstâncias. Sua abordagem compassiva e apoio contínuo têm sido inestimáveis para mim. Recomendo seus serviços a qualquer pessoa que esteja em busca de crescimento pessoal e autoconhecimento."'
                />
        },
        {
            comment: <CommentsCard
                    name="Lucas Lima"
                    city="Brasília"
                    state="DF"
                    text='"Dra. Ana é uma terapeuta incrível. Sua atenção cuidadosa aos detalhes e sua capacidade de escuta ativa me ajudaram a me sentir compreendido e apoiado. Sua orientação e insights têm sido inestimáveis para mim enquanto navego pelos desafios da vida. Estou muito grato por tê-la como minha terapeuta e não poderia recomendar seus serviços o suficiente."'
                />
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const prevSlide = () => {
       const isFirstSlide = currentIndex === 0
       const newIndex = isFirstSlide ? cards.length - 1 : currentIndex - 1
       setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === cards.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
     }

    
     useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlide();
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, [currentIndex]);


  return (
    <div className='m-auto relative group'>
        {cards.map((card, index) => (
                <div 
                    key={index} 
                    className={`absolute top-0 left-0 w-full h-full rounded-2xl transition-all duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} ${index === currentIndex ? 'visible' : 'invisible'}`}
                    style={{ visibility: index === currentIndex ? 'visible' : 'hidden' }}
                >
                    {card.comment}
                </div>
            ))}
        <div 
        onClick={prevSlide}
        className='hidden group-hover:block absolute top-[140px] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>{IconArrowLeft}</div>
        <div 
        onClick={nextSlide}
        className='hidden group-hover:block absolute top-[140px] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>{IconArrowRight}</div>
    </div>
  )
}

export default Carrossel