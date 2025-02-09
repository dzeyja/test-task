import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAuthByInstaceApiToken, getAuthByInstaceIdInstace } from "../selectors/AuthByInstaceSelectors"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { userActions } from "entities/User"
import { User } from "entities/User/model/types/user"
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localStorage/localStorage"

export const authByInstance = createAsyncThunk<{stateInstance: string}, void, ThunkConfig<string>>(
    'authByInstance',
    async (_, thunkAPI) => {
        const {
            rejectWithValue,
            getState,
            extra
        } = thunkAPI

        const idInstance = getAuthByInstaceIdInstace(getState())
        const apiTokenInstance = getAuthByInstaceApiToken(getState())

        try {
            const response = await extra.api.get(`/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
            const authData: User = {
                idInstance,
                apiTokenInstance
            }
            thunkAPI.dispatch(userActions.setAuthData(authData))
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(authData))

            return response.data
        } catch (error) {
            rejectWithValue('error')
        }
    },
)