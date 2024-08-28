import { useChat } from "@/hooks/useChat";
import { chats, currentUser, users } from "@/lib/mockData";
import { useEffect, useState } from "react";

const Chats = () => {
  const { setSelectedChatId } = useChat();
  const [userMap, setUserMap] = useState<{
    [key: string]: { username: string; userImage: string };
  }>({});

  useEffect(() => {
    const fetchUserData = async () => {
      // Simulating fetching user data by creating a map from the mock data
      const map: { [key: string]: { username: string; userImage: string } } =
        {};
      users.forEach((user) => {
        // Convert user.id to a string
        map[user.id.toString()] = {
          username: user.userName,
          userImage: user.image,
        };
      });
      setUserMap(map);
    };

    fetchUserData();
  }, []);

  const getChatDisplayData = (chat: any) => {
    if (userMap) {
      // Determine the correct user to display based on whether current user is sender or recipient
      const isSender = chat.senderId === currentUser.id;
      const otherUserId = isSender ? chat.recipientId : chat.senderId;

      return userMap[otherUserId];
    }
    return null;
  };

  return (
    <div className="h-full w-60 rounded-tl-2xl bg-primary p-3">
      <h4 className="mb-2">Chats</h4>
      <ul className="flex flex-col">
        {chats.map((chat) => {
          const chatData = getChatDisplayData(chat);

          return (
            <li
              key={chat.id}
              className="flex h-12 items-center gap-2"
              onClick={() => {
                setSelectedChatId(chat.chatId);
              }}
            >
              {chatData && (
                <div className="flex items-center gap-2">
                  <img
                    src={chatData.userImage}
                    alt={chatData.username}
                    className="h-10 w-10 rounded-full"
                  />
                  <p>{chatData.username}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chats;
