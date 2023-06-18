import { useEffect, useState } from "react";
import "./App.css";
import Kanban from "./components/main/kanban/Kanban";
import SideBar from "./components/sideBard/SideBar";

function App() {
  const projectlistData = [
    "Mobile App",
    "Website Redesign",
    "Design System",
    "Wireframes",
  ];
  const [projectList, setProjectList] = useState([]);
  const [activeProjectList, setActiveProjectList] = useState("Mobile App");
  const list = JSON.parse(localStorage.getItem("projectList"));
  useEffect(() => {
    if (list?.length > 0) {
      const list = JSON.parse(localStorage.getItem("projectList"));
      setProjectList(list);
      setActiveProjectList(list[0]);
    } else {
      localStorage.setItem("projectList", JSON.stringify(projectlistData));
    }
  }, []);
  const handleSaveClick = ({ prevName, newName }) => {
    setActiveProjectList(newName);
    const index = list.indexOf(prevName);
    console.log(index);
    if (index !== -1) {
      list[index] = newName;
    }

    console.log(list); // Output: [1, 2, 6, 4, 5]
    localStorage.setItem("projectList", JSON.stringify(list));
  };
  return (
    <div className="shadow  flex max-w-full">
      <hr className="absolute h-[2px] bg-border w-[98.9vw] top-[115px] md:top-20" />
      <SideBar
        activeProjectList={activeProjectList}
        setActiveProjectList={setActiveProjectList}
      />
      <Kanban
        activeProjectList={activeProjectList}
        handleSaveClick={handleSaveClick}
      />
    </div>
  );
}

export default App;
