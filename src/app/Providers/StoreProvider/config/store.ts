import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema, ThunkExtraArg } from "./StateSchema"
import { userReducer } from "entities/User"
import { AuthByInstanceimportReducer } from "features/AuthByInstace"
import { $api } from "shared/api/api"
import { createChatReducer } from "features/createChat"
import { createReducerManager } from "./reduceeManager"
import { messageReducer } from "entities/Message"



export function createReduxStore(asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootState: ReducersMapObject<StateSchema> = {
        user: userReducer,
        authByInstance: AuthByInstanceimportReducer,
        createChat: createChatReducer,
        message: messageReducer,
        ...asyncReducers
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