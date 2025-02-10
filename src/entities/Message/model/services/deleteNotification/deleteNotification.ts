import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { getUserData } from "entities/User"

export const deleteNotification = createAsyncThunk<
  { result: boolean; reason: string },
  number,
  ThunkConfig<string>
>(
  "deleteNotification",
  async (receiptId, thunkAPI) => {
    const { rejectWithValue, getState, extra } = thunkAPI;

    const userData = getUserData(getState());

    try {
      const response = await extra.api.delete(
        `/waInstance${userData.idInstance}/deleteNotification/${userData.apiTokenInstance}/${receiptId}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("Ошибка удаления уведомления");
    }
  }
);
