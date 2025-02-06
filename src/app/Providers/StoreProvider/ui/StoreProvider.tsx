import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { ReactNode } from "react"

interface StoreProviderProps {
    children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    const store = createReduxStore()

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
