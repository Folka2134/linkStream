import { useChat } from "@/hooks/useChat";
import { useUser } from "@/hooks/useUser";
import { chats, currentUser } from "@/lib/mockData";

const Chats = () => {
  const { setSelectedChatId } = useChat();
  const { userMap, setSelectedUserId } = useUser();

  const getChatMemberId = (chat: any) => {
    return chat.members.find((member: string) => member !== currentUser.id);
  };

  const handleChatClick = (chat: any) => {
    setSelectedChatId(chat.chatId);
    setSelectedUserId(getChatMemberId(chat));
  };
  const getChatDisplayData = (chat: any) => {
    if (userMap) {
      const chatMemberId = getChatMemberId(chat);
      return userMap[chatMemberId];
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
                handleChatClick(chat);
              }}
            >
              {chatData && (
                <div className="flex items-center gap-2">
                  <img
                    src={chatData.userImage}
                    alt={chatData.userName}
                    className="h-10 w-10 rounded-full"
                  />
                  <p>{chatData.userName}</p>
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

// const [userMap, setUserMap] = useState<{
//   [key: string]: { userName: string; userImage: string };
// }>({});

// useEffect(() => {
//   const fetchUserData = async () => {
//     // Simulating fetching user data by creating a map from the mock data
//     const map: { [key: string]: { userName: string; userImage: string } } =
//       {};
//     users.forEach((user) => {
//       // Convert user.id to a string
//       map[user.id] = {
//         userName: user.userName,
//         userImage: user.userImage,
//       };
//     });
//     setUserMap(map);
//   };

//   fetchUserData();
// }, []);
