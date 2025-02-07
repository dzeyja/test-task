import { StateSchema } from "app/Providers/StoreProvider";

export const getSendMessageChatId = (state: StateSchema) => state.sendMessage.chatId
export const getSendMessageMessage = (state: StateSchema) => state.sendMessage.message
export const getSenMessageIsLoading = (state: StateSchema) => state.sendMessage.isLoading