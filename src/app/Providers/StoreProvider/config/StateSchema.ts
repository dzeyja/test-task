import { AxiosInstance } from "axios";
import { UserSchema } from "entities/User";
import { AuthByInstanceSchema } from "features/AuthByInstace";

export interface StateSchema {
    user: UserSchema
    authByInstance: AuthByInstanceSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg
    state: StateSchema
    rejectValue: T
}