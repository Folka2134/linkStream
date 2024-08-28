import { ReactNode, createContext, useState } from "react";

export interface ChatContextInterface {
  selectedChatId: Number | null;
  setSelectedChatId: React.Dispatch<React.SetStateAction<Number | null>>;
}

export const ChatContext = createContext<ChatContextInterface | undefined>(
  undefined,
);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChatId, setSelectedChatId] = useState<Number | null>(null);

  return (
    <ChatContext.Provider value={{ selectedChatId, setSelectedChatId }}>
      {children}
    </ChatContext.Provider>
  );
};
