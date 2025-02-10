import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { MesagesSchema } from "entities/Message";
import { UserSchema } from "entities/User";
import { AuthByInstanceSchema } from "features/AuthByInstace";
import { CreateChatSchema } from "features/createChat";
import { SendMessageSchema } from "features/SendMessage";

export interface StateSchema {
    user: UserSchema
    authByInstance: AuthByInstanceSchema
    createChat: CreateChatSchema
    message: MesagesSchema
    // Ассинхронные редуссеры
    sendMessage?: SendMessageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg
    state: StateSchema
    rejectValue: T
}