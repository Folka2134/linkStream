import "./App.css";
import ActiveWindow from "./components/ActiveWindow";
import Header from "./components/Header";
import Nav from "./components/Nav";
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
            <div className="">
              <Header />
              <div className="flex h-screen w-screen">
                <Nav />
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
