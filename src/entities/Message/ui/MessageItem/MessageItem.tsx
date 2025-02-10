import { Message } from "../../model/types/message"

interface MessageItemProps {
    message: Message
}

export const MessageItem = ({ message }: MessageItemProps) => {
    const isMyMessage = message.sender === 'me'

    return (
        <div className={`px-4 py-2 rounded-xl bg-white text-right mb-2 max-w-xs break-words ${
            isMyMessage ? 'ml-auto text-right' : 'mr-auto text-left'
        }`} >
            {message.text}
        </div>
    )
}
