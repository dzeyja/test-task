import { Chat } from "widgets/Chat"
import { Sidebar } from "widgets/Sidebar"

const App = () => {
    return (
        <div className="bg-green-600 h-24">
            <div className="max-w-7xl p-6 mx-auto z-10 flex ">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default App