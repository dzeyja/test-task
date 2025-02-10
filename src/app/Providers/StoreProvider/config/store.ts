import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema, ThunkExtraArg } from "./StateSchema"
import { userReducer } from "entities/User"
import { AuthByInstanceimportReducer } from "features/AuthByInstace"
import { $api } from "shared/api/api"
import { sendMessageReducer } from "features/SendMessage"
import { createChatReducer } from "features/createChat"
import { messageReducer } from "entities/Message"
import { createReducerManager } from "./reduceeManager"

export function createReduxStore() {
    const rootState: ReducersMapObject<StateSchema> = {
        user: userReducer,
        authByInstance: AuthByInstanceimportReducer,
        sendMessage: sendMessageReducer,
        createChat: createChatReducer,
        message: messageReducer
    }

    const reducerManager = createReducerManager(rootState)

    const extraArg: ThunkExtraArg = {
        api: $api
    }
    
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            },
        }),
    })

    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'] 