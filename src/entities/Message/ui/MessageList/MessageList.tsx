import { Message } from "../../model/types/message"
import { memo } from "react"
import { MessageItem } from "../MessageItem/MessageItem"

interface MessageListProps {
    messages: Message[]
}

export const MessageList = memo(({ messages }: MessageListProps) => {
    return (
        <div className="flex flex-col">
            {messages.map((message, index) => (
                <MessageItem message={message} key={index} />
            ))}
        </div>
    )
})
