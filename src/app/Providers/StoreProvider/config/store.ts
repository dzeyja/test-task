import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema, ThunkExtraArg } from "./StateSchema"
import { userReducer } from "entities/User"
import { AuthByInstanceimportReducer } from "features/AuthByInstace"
import { $api } from "shared/api/api"
import { sendMessageReducer } from "features/SendMessage"

export function createReduxStore() {
    const rootState: ReducersMapObject<StateSchema> = {
        user: userReducer,
        authByInstance: AuthByInstanceimportReducer,
        sendMessage: sendMessageReducer
    }

    const extraArg: ThunkExtraArg = {
        api: $api
    }
    
    const store = configureStore({
        reducer: rootState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            },
        }),
    })

    return store
}