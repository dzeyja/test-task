import { AxiosInstance } from "axios";
import { UserSchema } from "entities/User";
import { AuthByInstanceSchema } from "features/AuthByInstace";
import { CreateChatSchema } from "features/createChat";
import { SendMessageSchema } from "features/SendMessage";

export interface StateSchema {
    user: UserSchema
    authByInstance: AuthByInstanceSchema
    sendMessage: SendMessageSchema
    createChat: CreateChatSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg
    state: StateSchema
    rejectValue: T
}