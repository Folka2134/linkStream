import { messages } from "@/lib/mockData";
import { createContext, useState, useEffect } from "react";

// Define the message interface
export interface Message {
  id: string;
  chatId: string;
  userId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
}

// Define the MessageMap type
type MessageMap = {
  [key: string]: Message[];
};

// Create the MessageContext with a default empty map and status
export const MessageContext = createContext<{ messageMap: MessageMap }>({
  messageMap: {},
});

export const MessageProvider = ({ children }: any) => {
  const [messageMap, setMessageMap] = useState<MessageMap>({});

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Use proper typing with reduce to create messageMap
        const messageMap = messages.reduce<MessageMap>((map, message) => {
          if (map[message.chatId]) {
            map[message.chatId] = [message, ...map[message.chatId]];
          } else {
            map[message.chatId] = [message];
          }
          return map;
        }, {});

        // Set the messageMap state with the reduced map
        setMessageMap(messageMap);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <MessageContext.Provider value={{ messageMap }}>
      {children}
    </MessageContext.Provider>
  );
};
