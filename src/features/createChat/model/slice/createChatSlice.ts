import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat, CreateChatSchema } from '../types/CreateChatSchema';

const initialState: CreateChatSchema = {
    chats: []
};

export const createChatSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addChat: (state, action: PayloadAction<Chat>) => {
            state.chats.push(action.payload)
        }
    },
});

export const { actions: createChatActions } = createChatSlice;
export const { reducer: createChatReducer } = createChatSlice;