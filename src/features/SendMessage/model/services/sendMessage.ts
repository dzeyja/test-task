import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { getUserData } from "entities/User"
import { sendMessageActions } from "../slice/sendMessageSlice"

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
            extra,
            dispatch
        } = thunkAPI

        const userData = getUserData(getState())

        try {
            const response = await extra.api.post(`/waInstance${userData.idInstance}/sendMessage/${userData.apiTokenInstance}`, {
                chatId: chatId,
                message
            })

            dispatch(sendMessageActions.setMessage(''))

            return response.data
        } catch (error) {
            rejectWithValue('error')
        }
    },
)