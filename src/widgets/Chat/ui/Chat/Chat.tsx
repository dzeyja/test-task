import { Message, MessageList } from "entities/Message"
import { SendMessageForm } from "features/SendMessage"
import { memo, Suspense } from "react"

interface ChatProps {
    chatId: string
    messages: Message[]
}

export const Chat = memo(({ chatId, messages }: ChatProps) => {

    return (
        <div className="p-8 w-full h-full bg-green-200  flex flex-col justify-end ">
            <div className="overflow-auto">
                <MessageList messages={messages} />
            </div>
            <Suspense fallback='...'>
                <SendMessageForm chatId={chatId} />
            </Suspense>
        </div>
    )
})
