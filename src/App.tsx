import "./App.css";
import ActiveWindow from "./components/ActiveWindow";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { GroupProvider } from "./context/GroupContext";

function App() {
  return (
    <GroupProvider>
      <div className="">
        <Header />
        <div className="flex h-screen w-screen">
          <Nav />
          <ActiveWindow />
        </div>
      </div>
    </GroupProvider>
  );
}

export default App;
