import axios from "axios"
import { getUserData } from "entities/User"
import { SendMessageForm } from "features/SendMessage"
import { useState } from "react"
import { useSelector } from "react-redux"


export const Chat = () => {

    return (
        <div className="relative w-full flex-grow bg-green-200">
            <div className="absolute bottom-5 left-0">
                <SendMessageForm />
            </div>
        </div>
    )
}
