import Carrossel from "../Carrossel"


const Depositions = (): React.JSX.Element => {
    return (
        <section className='w-11/12 md:w-4/5 lg:w-3/5'>
            <h1 className='text-3xl mb-10 tracking-widest font-bold text-black/60 text-center font-serif'>Depoimentos</h1>
            <Carrossel />
        </section>
    )
}

export default Depositions