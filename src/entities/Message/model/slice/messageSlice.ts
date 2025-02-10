import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MesagesSchema } from '../types/MessageSchema';
import { receiveNotification } from '../services/receiveNotification/receiveNotification';
import { sendMessage } from 'features/SendMessage/model/services/sendMessage';
import { Message } from '../types/message';

const initialState: MesagesSchema = {
    isLoading: false,
    messages: [],
    error: undefined
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder 
            .addCase(receiveNotification.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            }) 
            .addCase(receiveNotification.fulfilled, (state, action) => {
                const data = action.payload;

                if (!data || !data.body) return;

                const textMessage = data.body.messageData?.textMessageData?.textMessage || "";
                if (!textMessage) return;

                const newMessage: Message = {
                    id: data.body.idMessage,
                    chatId: data.body.senderData.chatId,
                    sender: "other",
                    text: textMessage,
                    timestamp: Date.now(),
                    receiptId: data.receiptId, 
                };
                
                state.messages.push(newMessage)
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                const { chatId, message } = action.meta.arg;
                
                const newMessage: Message = {
                    id: `${Date.now()}`,
                    chatId,
                    sender: "me",
                    text: message,
                    timestamp: Date.now(),
                };

                state.messages.push(newMessage)
            })
        }
});

export const { actions: messageActions } = messageSlice;
export const { reducer: messageReducer } = messageSlice;