import { SendMessageForm } from "features/SendMessage"
export const Chat = () => {

    return (
        <div className="relative w-full flex-grow bg-green-200 h-screen" >
            <div className="absolute bottom-5 left-0">
                <SendMessageForm />
            </div>
        </div>
    )
}
