import { Chat } from "widgets/Chat";
import { ChatPageHeader } from "../ChatPageHeader/ChatPageHeader";
import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteNotification, messageReducer, receiveNotification } from "entities/Message";
import { StateSchema } from "app/Providers/StoreProvider";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { sendMessageReducer } from "features/SendMessage";

const reducers: ReducersList = {
  sendMessage: sendMessageReducer
} 

const ChatPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const messages = useSelector((state: StateSchema) =>
    state?.message?.messages.filter((message) => message.chatId === id)
  );
  const dispatch = useAppDispatch();

  if (!id) {
    return null;
  }

  useEffect(() => {
    const fetchMessages = async () => {
      const action = await dispatch(receiveNotification());
  
      if (!receiveNotification.fulfilled.match(action)) return;
  
      const message = action.payload;
  
      if (!message || typeof message !== "object" || !("receiptId" in message)) return;
  
      try {
        await dispatch(deleteNotification(message.receiptId)).unwrap();
      } catch (error) {
        console.error("Ошибка при удалении уведомления:", error);
      }
    };
  
    const intervalId = setInterval(fetchMessages, 5000);
  
    return () => clearInterval(intervalId);
  }, [dispatch, id]); 
  
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className="shadow-xl h-screen flex flex-col flex-grow w-full">
        <ChatPageHeader chatId={id} />
        <Chat messages={messages} chatId={id} />
      </div>
    </DynamicModuleLoader>
  );
});


export default ChatPage