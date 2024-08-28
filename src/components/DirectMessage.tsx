import FriendsList from "./FriendsList";
import Chats from "./Chats";
import { useChat } from "@/hooks/useChat";
import ChatArea from "./ChatArea";

const DirectMessage = () => {
  const { selectedChatId } = useChat();
  // console.log(selectedChatId);

  return (
    <div className="flex h-full">
      <Chats />
      {selectedChatId ? (
        <ChatArea selectedChatId={selectedChatId} />
      ) : (
        <FriendsList />
      )}
    </div>
  );
};

export default DirectMessage;
