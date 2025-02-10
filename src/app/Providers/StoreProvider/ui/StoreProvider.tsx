import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { ReactNode } from "react"
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "../config/StateSchema"

interface StoreProviderProps {
    children?: ReactNode
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, asyncReducers }: StoreProviderProps) => {
    const store = createReduxStore(asyncReducers as ReducersMapObject<StateSchema>)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
