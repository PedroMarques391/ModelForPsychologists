import { IconWhatsapp } from "./Auxiliary/Icons"

interface IButtonProps {
    text: string
    message: string
}

const Button = ({ text, message }: IButtonProps): React.JSX.Element => {
    const handleClick = () => {
        const sendMessage = message;
        const number = 99999999999;
        const url = `https://api.whatsapp.com/send?1=pt_BR&phone=${number}&text=${sendMessage}`;
        window.open(url, '_blank');
    }
    return (
        <div
            onClick={handleClick}
            className='flex justify-center items-center p-2 rounded-full gap-1 bg-green-0 text-green-700 hover:bg-green-700 hover:text-green-0 transition-all duration-700 ease-in-out'>
            <span>{IconWhatsapp()}</span>
            <span>{text}</span>
        </div>
    )
}

export default Button