import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"

export function createReduxStore() {
    const rootState: ReducersMapObject<StateSchema> = {
        
    }
    
    const store = configureStore({
        reducer: rootState
    })

    return store
}