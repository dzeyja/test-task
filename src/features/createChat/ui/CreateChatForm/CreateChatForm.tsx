import { useDispatch } from "react-redux"
import React, { memo, useState } from "react"
import { createChatActions } from "../../model/slice/createChatSlice"
import { Button } from "shared/ui/Button/Button"

const CreateChatForm = memo(() => {
    const [chatId, setChatId] = useState('@c.us')
    const dispatch = useDispatch()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatId(e.target.value)
    }

    const onClickCreateChat = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        dispatch(createChatActions.addChat({chatId}))
    }

    return (
        <form className='flex flex-col'>
            <div className="text-xl text-center mb-5">
                Создать чат
            </div>
            <input className="p-2 rounded-lg w-80 mb-5 border-2" placeholder="Номер телефона" value={chatId} onChange={changeHandler}/>
            <Button onClick={onClickCreateChat}>
                Создать
            </Button>
        </form>
    )
})

export default CreateChatForm