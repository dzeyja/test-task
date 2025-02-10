import { Message } from "../../model/types/message"
import { format } from 'date-fns'

interface MessageItemProps {
    message: Message
}

export const MessageItem = ({ message }: MessageItemProps) => {
    const isMyMessage = message.sender === 'me'

    const time = format(new Date(Number(message.timestamp)), "HH:mm");

    return (
        <div className={`px-4 py-2 rounded-xl mb-2 max-w-fit break-words flex flex-col gap-1 ${
            isMyMessage ? 'bg-blue-200 self-end ml-auto text-right' : 'bg-gray-200 self-start mr-auto text-left'
        }`} >
            {message.text}
            <span className="text-xs">{time}</span>
        </div>
    )
}
