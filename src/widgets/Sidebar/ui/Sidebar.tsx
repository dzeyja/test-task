import { AuthByInstaceForm } from "features/AuthByInstace";
import { CreateChatForm, getCreateChats } from "features/createChat";
import { memo, useCallback, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Modal } from "shared/ui/Modal/Modal";

export const Sidebar = memo(() => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenChat, setIsOpenChat] = useState(false)
    const chats = useSelector(getCreateChats)

    const navigate = useNavigate()

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [isOpen])

    const handleOpenChat = useCallback(() => {
        setIsOpenChat(true)
    }, [isOpenChat])

    const handleCloseChat = useCallback(() => {
        setIsOpenChat(false)
    }, [isOpenChat])

    const onClickLink = useCallback((chatId) => {
        navigate(`/chat/${chatId}`)
    }, [navigate])

    return (
        <div className='border w-80 h-screen bg-white shadow-xl'>
            <div className="w-full mb-10 p-6 flex justify-between items-center">
                <div className="text-3xl font-bold">
                    Чаты
                </div>
                <div className="flex items-center gap-2">
                    <IoCreateOutline onClick={handleOpenChat} className="text-3xl cursor-pointer"/>
                    <CiLogin onClick={handleOpen} className="text-3xl cursor-pointer"/>
                </div>
            </div>
            <div className="h-full overflow-auto">
                {chats.length > 0 ? (
                    chats.map((chat) => (
                        <div key={chat.chatId} onClick={() => onClickLink(chat.chatId)} className="w-2xl border p-3 flex gap-2 cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-red border">
                            </div>
                            <div className="text-xl">
                                {chat.chatId}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl font-medium">
                        У вас пока нету чатов
                    </div>
                )} 
            </div>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <AuthByInstaceForm />
            </Modal>
            <Modal isOpen={isOpenChat} onClose={handleCloseChat}>
                <CreateChatForm />
            </Modal>
        </div>
    )
})
