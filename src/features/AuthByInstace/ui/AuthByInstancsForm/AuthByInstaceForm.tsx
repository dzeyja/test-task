import { AuthByInstanceimportActions } from "../../model/slice/AuthByInstanceSlice"
import { getAuthByInstaceApiToken, getAuthByInstaceError, getAuthByInstaceIdInstace } from "../../model/selectors/AuthByInstaceSelectors"
import { useDispatch, useSelector } from "react-redux"
import { ChangeEvent, memo } from "react"
import { authByInstance } from "../../model/services/AuthByInstanceThunk"
import { Button } from "shared/ui/Button/Button"

const AuthByInstaceForm = memo(() => {
    const dispatch = useDispatch()
    const idInstance = useSelector(getAuthByInstaceIdInstace)
    const apiToken = useSelector(getAuthByInstaceApiToken)
    const error = useSelector(getAuthByInstaceError)

    const changeHandlerIdInstance = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(AuthByInstanceimportActions.setIdInstance(e.target.value))
    }

    const changeHandlerApiToken = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(AuthByInstanceimportActions.setApiTokenInstace(e.target.value))
    }

    const onAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(authByInstance())
    }

    return (
        <form className='flex flex-col'>
            {error && (
                <div className="text-lg text-red-600">
                    {error}
                </div>
            )}
            <div className="text-xl text-center mb-5">
                Аторизоватся
            </div>
            <input className="p-2 rounded-lg w-80 mb-5 border-2" placeholder="Id Instance" value={idInstance} onChange={changeHandlerIdInstance}/>
            <input className="p-2 rounded-lg w-lg border-2" placeholder="Api token" value={apiToken} onChange={changeHandlerApiToken}/>
            <Button onClick={onAuth} className="mt-5">
                Авторизоватся
            </Button>
        </form>
    )
})

export default AuthByInstaceForm
