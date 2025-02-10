import { memo } from "react"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Button } from "shared/ui/Button/Button"

const NotFoundPage = memo(() => {

    return (
        <div className="w-full bg-green-300 h-screen flex flex-col gap-5 justify-center items-center shadow-xl p-8">
            <div className="text-center text-5xl text-red-600">
                Страница не найдена!
            </div>
            <Link to={RoutePath.main}>
                <Button>
                    Вернутся на главную
                </Button>
            </Link>
        </div>
    )
})

export default NotFoundPage
