import { getSendMessageChatId, getSendMessageMessage } from "features/SendMessage/model/selectors/SendMessageSelectors"
import { sendMessage } from "../../model/services/sendMessage"
import { sendMessageActions } from "../../model/slice/sendMessageSlice"
import React, { memo, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"

export interface SendMessageFormProps {
    chatId: string
}

const SendMessageForm = memo(({chatId}: SendMessageFormProps) => {
    const dispatch = useDispatch()
    const message = useSelector(getSendMessageMessage)

    const changeHandlerMessage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(sendMessageActions.setMessage(e.target.value))
    }, [dispatch])

    const onClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        dispatch(sendMessage({ chatId, message }))
    }, [chatId, message, dispatch])

    return (
        <div className="relative w-full">
            <input 
                value={message} 
                placeholder="Напишите сообщение"
                onChange={changeHandlerMessage} 
                className="p-6 pr-20 rounded-lg border w-full" 
                type="text" 
            />
            <Button 
                onClick={onClickHandler}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
                Отправить
            </Button>
        </div>
    )
})

export default SendMessageForm
