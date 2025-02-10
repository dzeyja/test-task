export interface Message {
    id: string;
    chatId: string;
    sender: "me" | "other";
    text: string;
    timestamp: number;
    receiptId?: number; 
}

export interface WebhookNotification {
    receiptId: number;
    body: {
      typeWebhook: string;
      instanceData: {
        idInstance: number;
        wid: string;
        typeInstance: string;
      };
      timestamp: number;
      idMessage: string;
      senderData: {
        chatId: string;
        chatName: string;
        sender: string;
        senderName: string;
        senderContactName: string;
      };
      messageData: {
        typeMessage: string;
        textMessageData: {
          textMessage: string;
        };
      };
    };
}
  