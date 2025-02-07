import { StateSchema } from "app/Providers/StoreProvider";

export const getUserData = (state: StateSchema) => state.user.authData
export const getUserIsAuth = (state: StateSchema) => state.user.isAuth