import Card from "../Card"
import { IconCheck2, IconDocs, IconLike, IconWhatsapp } from "../Auxiliary/Icons"
import SideProgress from "../Auxiliary/SideProgress"

const Steps = (): React.JSX.Element => {
  return (
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
  )
}

export default Steps