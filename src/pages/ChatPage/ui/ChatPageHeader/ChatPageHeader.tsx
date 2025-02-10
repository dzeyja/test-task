import { memo } from "react"

interface ChatPageHeader {
    chatId: string
}

export const ChatPageHeader = memo(({ chatId }: ChatPageHeader) => {

    return (
        <div className="p-4 bg-gray-100 w-full flex gap-2 items-center">
            <div className="w-12 h-12 rounded-full bg-red border bg-white">
            </div>
            {chatId}
        </div>
    )
})
