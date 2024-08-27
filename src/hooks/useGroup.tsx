import { GroupContext, GroupContextInterface } from "@/context/GroupContext";
import { useContext } from "react";

export const useGroup = (): GroupContextInterface => {
  const context = useContext(GroupContext);

  if (!context) {
    throw new Error("useGroup must be used within a GroupProvider");
  }

  return context;
};
