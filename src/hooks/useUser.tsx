import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
};
