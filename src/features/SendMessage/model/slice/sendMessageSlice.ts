import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SendMessageSchema } from '../types/SendMessageSchema';

const initialState: SendMessageSchema = {
   chatId: '',
   message: '',
   isLoading: false
};

export const SendMessageSlice = createSlice({
    name: 'sendMessage',
    initialState,
    reducers: {
        setChatId: (state, action: PayloadAction<string>) => {
            state.chatId = action.payload
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        }
    },
});

export const { actions: sendMessageActions } = SendMessageSlice;
export const { reducer: sendMessageReducer } = SendMessageSlice;