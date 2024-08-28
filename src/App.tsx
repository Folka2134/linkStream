import "./App.css";
import ActiveWindow from "./components/ActiveWindow";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { ChatProvider } from "./context/ChatContext";
import { GroupProvider } from "./context/GroupContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <GroupProvider>
      <ChatProvider>
        <UserProvider>
          <div className="">
            <Header />
            <div className="flex h-screen w-screen">
              <Nav />
              <ActiveWindow />
            </div>
          </div>
        </UserProvider>
      </ChatProvider>
    </GroupProvider>
  );
}

export default App;
