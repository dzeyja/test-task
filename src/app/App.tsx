import { Sidebar } from "widgets/Sidebar"
import { AppRoutes } from "app/Providers/RouteProvider"
import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "entities/User"

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [])

    return (
        <div className="bg-primary h-24">
            <div className="max-w-7xl p-6 mx-auto z-10 flex">
                <Sidebar />
                <Suspense fallback="...">
                    <div className="ml-80 w-[calc(100vw-20rem)] h-screen">
                        <AppRoutes />
                    </div>
                </Suspense>
            </div>
        </div>
    )
}

export default App