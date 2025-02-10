import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { getUserData } from "entities/User"
import { WebhookNotification } from "../../types/message"

export const receiveNotification = createAsyncThunk<WebhookNotification, void, ThunkConfig<string>>(
    'rceiveNotification',
    async (_, thunkAPI) => {
        const {
            rejectWithValue,
            getState,
            extra
        } = thunkAPI

        const userData = getUserData(getState())

        try {
            const response = await extra.api.get(`/waInstance${userData.idInstance}/receiveNotification/${userData.apiTokenInstance}`)

            if (!response.data) {
                return rejectWithValue('No data received');
            }

            return response.data
        } catch (error) {
            rejectWithValue('error')
        }
    },
)