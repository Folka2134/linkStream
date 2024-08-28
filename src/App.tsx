import "./App.css";
import ActiveWindow from "./components/ActiveWindow";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { ChatProvider } from "./context/ChatContext";
import { GroupProvider } from "./context/GroupContext";

function App() {
  return (
    <GroupProvider>
      <ChatProvider>
        <div className="">
          <Header />
          <div className="flex h-screen w-screen">
            <Nav />
            <ActiveWindow />
          </div>
        </div>
      </ChatProvider>
    </GroupProvider>
  );
}

export default App;
