import { useMessage } from "@/hooks/useMessage";
import { useUser } from "@/hooks/useUser";

const ChatArea = ({ selectedChatId }: any) => {
  const { userMap, selectedUserId } = useUser();
  const { messageMap } = useMessage();

  // loop over messages and appending to messages array
  const messages: any[] = [];
  for (const key in messageMap) {
    if (key === selectedChatId) {
      messages.push(...messageMap[key]);
    }
  }

  let selectedUser = userMap[selectedUserId!];

  return (
    <div className="w-full">
      <div className="flex h-12 items-center bg-primary">
        <h4>{selectedUser.userName}</h4>
      </div>

      <div className="flex flex-col gap-3 p-3">
        {/* // loop over messages and display content in order of timestamp */}
        {messages
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message) => {
            const user = userMap[message.userId];
            return (
              <div key={message.id} className="flex gap-3">
                <img
                  src={user.userImage}
                  alt={user.userName}
                  className="h-8 w-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <p>{user.userName}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">
                        {
                          // display date of message
                          new Date(message.timestamp).toLocaleString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "numeric",
                          })
                        }
                      </span>
                      <span className="text-xs">
                        {
                          // display time of message
                          new Date(message.timestamp).toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                          })
                        }
                      </span>
                    </div>
                  </div>
                  <p>{message.content}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChatArea;
