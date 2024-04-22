import { IconArrow, IconChat, IconCheck, IconPlus } from "./Icons"

const SideProgress = (): React.JSX.Element => {
    return (
        <div className="flex flex-col items-center mt-40">

            <div className="border-4 border-blue-400 rounded-full p-2">{IconArrow}</div>
            <div className="w-1 h-72 bg-blue-0"/>
            <div className="border-4 border-blue-400 rounded-full p-2">{IconChat}</div>
            <div className="w-1 h-72 bg-blue-0"/>
            <div className="border-4 border-blue-400 rounded-full p-2">{IconPlus}</div>
            <div className="w-1 h-72 bg-blue-0"/>
            <div className="border-4 border-blue-400 rounded-full p-2">{IconCheck}</div>

        </div>
    )
}

export default SideProgress