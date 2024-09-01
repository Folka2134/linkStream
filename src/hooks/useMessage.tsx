import { MessageContext } from "@/context/MessageContext";
import { useContext } from "react";

export const useMessage = () => {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
};
