import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import Hideimg from "../../images/hide.svg";
import addSquare from "../../images/addSquare.svg";

import MenuList from "./MenuList";
import ProjectList from "./ProjectList";
import WriteMessage from "./WriteMessage";
const projectlist = [
  "Mobile App",
  "Website Redesign",
  "Design System",
  "Wireframes",
];
const SideBar = () => {
  const [activeProjectList, setActiveProjectList] = useState(projectlist[0]);
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const btn = document.getElementById("toggle-btn");
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
    } else {
      sidebar.style.display = "none";
      btn.style.display = "block";
    }
  };
  return (
    <div
      id="sidebar"
      className="bg-white w-60 rounded-l-3xl min-w-[240px] hidden lg:block  min-h-screen border-r-2 border-border px-4"
    >
      <div className="flex items-center justify-between h-20">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="" />
          <p className="text-heading font-bold font-sans ">Project M.</p>
        </div>
        <img
          src={Hideimg}
          onClick={toggleSidebar}
          alt=""
          className="cursor-pointer"
        />
      </div>
      <MenuList />
      <hr className=" h-[2px] bg-border  mt-5" />
      <div className="flex items-center justify-between mt-5">
        <p className="text-sidebartext font-bold font-sans ">MY PROJECTS</p>
        <img src={addSquare} alt="" className="cursor-pointer" />
      </div>
      <ProjectList
        projectlist={projectlist}
        activeList={activeProjectList}
        setActiveList={setActiveProjectList}
      />
      <WriteMessage />
    </div>
  );
};

export default SideBar;
