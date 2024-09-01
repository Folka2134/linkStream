import { users } from "@/lib/mockData";
import { createContext, useState, useEffect } from "react";

export interface UserContextInterface {
  userMap: UserMap;
  status: String;
  selectedUserId: String | null;
  setSelectedUserId: Function;
}

export interface User {
  id: string;
  userName: string;
  userImage: string;
  status: string;
}

// Define the UserMap type
type UserMap = {
  [key: string]: User;
};

// Create the UserContext with a default empty map and status
export const UserContext = createContext<UserContextInterface | undefined>(
  undefined,
);

export const UserProvider = ({ children }: any) => {
  const [userMap, setUserMap] = useState<UserMap>({});
  const [status, setStatus] = useState("idle");
  const [selectedUserId, setSelectedUserId] = useState<String | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setStatus("loading");

      try {
        // Use proper typing with reduce to create userMap
        const usersMap = users.reduce<UserMap>((map, user) => {
          map[user.id] = user;
          return map;
        }, {});

        // Set the userMap state with the reduced map
        setUserMap(usersMap);
        setStatus("succeeded");
      } catch (error) {
        setStatus("failed");
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{ userMap, status, selectedUserId, setSelectedUserId }}
    >
      {children}
    </UserContext.Provider>
  );
};
