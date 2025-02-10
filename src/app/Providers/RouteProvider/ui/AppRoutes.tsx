import { memo, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRoutes = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({path, element}) => {
                return <Route key={path} path={path} element={element}/>
            })}
        </Routes>
    )
}

export default memo(AppRoutes)
