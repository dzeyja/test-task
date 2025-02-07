import { Sidebar } from "widgets/Sidebar"
import { AppRoutes } from "app/Providers/RouteProvider"

const App = () => {
    return (
        <div className="bg-green-600 h-24">
            <div className="max-w-7xl p-6 mx-auto z-10 flex ">
                <Sidebar />
                <div className="w-full flex-grow ">
                    <AppRoutes />
                </div>
            </div>
        </div>
    )
}

export default App