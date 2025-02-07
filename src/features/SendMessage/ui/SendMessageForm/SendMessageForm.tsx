import { getSendMessageChatId, getSendMessageMessage } from "features/SendMessage/model/selectors/SendMessageSelectors"
import { sendMessage } from "../../model/services/sendMessage"
import { sendMessageActions } from "../../model/slice/sendMessageSlice"
import React, { memo, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

export const SendMessageForm = memo(() => {
    const dispatch = useDispatch()
    const chatId = useSelector(getSendMessageChatId)
    const message = useSelector(getSendMessageMessage)

    const changeHandlerChatId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(sendMessageActions.setChatId(e.target.value))
    }, [dispatch])
    
    const changeHandlerMessage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(sendMessageActions.setMessage(e.target.value))
    }, [dispatch])

    const onClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        dispatch(sendMessage({ chatId, message }))
    }, [chatId, message, dispatch])

    return (
        <div className="flex flex-col gap-2">
            <input value={chatId} onChange={changeHandlerChatId} className="p-6 rounded-lg border mb-4" type="text" />
            <input value={message} onChange={changeHandlerMessage} className="p-6 rounded-lg border mb-4" type="text" />
            <button onClick={onClickHandler} className="p-6 border">
                Отправить
            </button>
        </div>
    )
})
