import { SendMessageForm } from "features/SendMessage"
import { memo } from "react"

interface ChatProps {
    chatId: string
}

export const Chat = memo(({ chatId }: ChatProps) => {

    return (
            <div className="p-8 w-full bg-green-200 h-4/5 flex flex-col justify-end ">
                <SendMessageForm chatId={chatId} />
            </div>
    )
})
