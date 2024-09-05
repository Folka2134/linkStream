import "./App.css";
import ActiveWindow from "./components/ActiveWindow";
import Header from "./components/Header";
import Groups from "./components/Groups";
import { ChatProvider } from "./context/ChatContext";
import { GroupProvider } from "./context/GroupContext";
import { MessageProvider } from "./context/MessageContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <GroupProvider>
      <ChatProvider>
        <UserProvider>
          <MessageProvider>
            <div className="flex h-screen max-h-screen w-screen flex-col">
              <Header />
              <div className="flex flex-grow">
                <Groups />
                <ActiveWindow />
              </div>
            </div>
          </MessageProvider>
        </UserProvider>
      </ChatProvider>
    </GroupProvider>
  );
}

export default App;
