import { useDispatch } from "react-redux"
import React, { useState } from "react"
import { createChatActions } from "../model/slice/createChatSlice"

export const CreateChatForm = () => {
    const [chatId, setChatId] = useState('')
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
            <button className="px-8 py-2 border mt-5 bg-green-600 text-white" onClick={onClickCreateChat}>
                Создать
            </button>
        </form>
    )
}
