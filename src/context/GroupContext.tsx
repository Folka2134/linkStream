import { ReactNode, createContext, useState } from "react";

export interface GroupContextInterface {
  selectedGroup: String;
  setSelectedGroup: React.Dispatch<React.SetStateAction<String>>;
}

export const GroupContext = createContext<GroupContextInterface | undefined>(
  undefined,
);

export const GroupProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGroup, setSelectedGroup] = useState<String>("Direct Messages");

  return (
    <GroupContext.Provider value={{ selectedGroup, setSelectedGroup }}>
      {children}
    </GroupContext.Provider>
  );
};
