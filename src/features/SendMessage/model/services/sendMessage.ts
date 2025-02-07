import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { getUserData } from "entities/User"

interface SendMessageArg {
    chatId: string
    message: string
}

export const sendMessage = createAsyncThunk<void, SendMessageArg, ThunkConfig<string>>(
    'sendMessage',
    async ({ chatId, message }, thunkAPI) => {
        const {
            rejectWithValue,
            getState,
            extra
        } = thunkAPI

        const userData = getUserData(getState())

        try {
            const response = await extra.api.post(`/waInstance${userData.idInstance}/sendMessage/${userData.apiTokenInstance}`, {
                chatId: `${chatId}@c.us`,
                message
            })
            
            return response.data
        } catch (error) {
            rejectWithValue('error')
        }
    },
)