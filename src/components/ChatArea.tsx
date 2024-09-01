import { useMessage } from "@/hooks/useMessage";
import { useUser } from "@/hooks/useUser";

const ChatArea = ({ selectedChatId }: any) => {
  const { userMap } = useUser();
  const { messageMap } = useMessage();

  // loop over messages and appending to messages array
  const messages: any[] = [];
  for (const key in messageMap) {
    if (key === selectedChatId) {
      messages.push(...messageMap[key]);
    }
  }

  console.log(messages);

  return (
    <div>
      <h4>Chat Area</h4>

      {/* // loop over messages and display content in order of timestamp */}
      {messages
        .sort((a, b) => a.timestamp - b.timestamp)
        .map((message) => {
          const user = userMap[message.userId];
          return (
            <div key={message.id} className="flex gap-2">
              <img
                src={user.userImage}
                alt={user.userName}
                className="h-8 w-8 rounded-full"
              />
              <div>
                <p>{user.userName}</p>
                <p>{message.content}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ChatArea;
