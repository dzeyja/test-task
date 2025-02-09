import { Chat } from "widgets/Chat"
import { ChatPageHeader } from "../ChatPageHeader/ChatPageHeader"
import { memo } from "react"
import { useParams } from "react-router-dom"

export const ChatPage = memo(() => {
    const { id } = useParams<{ id:string }>()

    if(!id) {
        return null
    }

    return (
        <div className="shadow-xl h-full">
            <ChatPageHeader chatId={id}/>
            <Chat chatId={id}/>
        </div>
    )
})
