import { memo } from "react"

const HomePage = memo(() => {
    return (
        <div className="w-full bg-green-300 h-screen flex justify-center items-center shadow-xl p-8">
            <div className="text-center text-5xl text-white">
                Green API Отправляй и получай сообщения
            </div>
        </div>
    )
})

export default HomePage
