import { memo } from "react"

interface ChatPageHeader {
    chatId: string
}

export const ChatPageHeader = memo(({ chatId }: ChatPageHeader) => {

    return (
        <div className="p-6 bg-gray-400 w-full">
            {chatId}
        </div>
    )
})
