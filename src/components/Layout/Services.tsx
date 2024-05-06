import Card from "../Card"
import { IconHeart, IconWindow, IconUsers } from "../Auxiliary/Icons"
import { useEffect, useState } from "react";


const Services = (): React.JSX.Element => {
    const [clients, setClients] = useState(0);
    const [hour, setHour] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (clients < 100) {
                setClients(clients + 1);
            }
        }, 10);
        return () => clearInterval(interval);
    }, [clients]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (hour < 1800) {
                setHour(hour + 1);
            }
        }, 1);
        return () => clearInterval(interval);
    }, [hour]);

    return (
        <section className='flex w-full sm:w-3/5 md:w-[90%]'>
            <div
                id='servicos'
                className='mx-auto flex flex-col sm:flex-row gap-0 sm:gap-20 md:flex-wrap md:gap-10 md:justify-center'>
                <Card
                    aos='fade-up'
                    text={`Transformamos vidas: mais de ${clients} clientes atendidos com sucesso em 2023, totalizando mais de ${hour} horas de sessões de terapia online.`}
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
    )
}

export default Services