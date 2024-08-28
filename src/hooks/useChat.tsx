import { ChatContext, ChatContextInterface } from "@/context/ChatContext";
import { useContext } from "react";

export const useChat = (): ChatContextInterface => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
};
