import "./App.css";
import Kanban from "./components/main/kanban/Kanban";
import SideBar from "./components/sideBard/SideBar";

function App() {
  return (
    <div className="shadow  flex max-w-full">
      <hr className="absolute h-[2px] bg-border w-[98.9vw] top-[115px] md:top-20" />
      <SideBar />
      <Kanban />
    </div>
  );
}

export default App;
