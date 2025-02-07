import { StateSchema } from "app/Providers/StoreProvider";

export const getAuthByInstaceIdInstace = (state: StateSchema) => state.authByInstance.idInstance
export const getAuthByInstaceApiToken = (state: StateSchema) => state.authByInstance.apiTokenInstance
export const getAuthByInstaceError = (state: StateSchema) => state.authByInstance?.error
export const getAuthByInstaceIsLoadin = (state: StateSchema) => state.authByInstance.isLoading

