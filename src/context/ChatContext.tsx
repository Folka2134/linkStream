import { ReactNode, createContext, useState } from "react";

export interface ChatContextInterface {
  selectedChatId: String | null;
  setSelectedChatId: React.Dispatch<React.SetStateAction<String | null>>;
}

export const ChatContext = createContext<ChatContextInterface | undefined>(
  undefined,
);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChatId, setSelectedChatId] = useState<String | null>(null);

  return (
    <ChatContext.Provider value={{ selectedChatId, setSelectedChatId }}>
      {children}
    </ChatContext.Provider>
  );
};
