import React, { useState } from "react";
import SearchBar from "./SearchBar";
import calenderIcon from "../../images/calender.svg";
import messageIcon from "../../images/messagenav.svg";
import notificationIcon from "../../images/notification.svg";
import downIcon from "../../images/down.svg";
import userImg from "../../images/user.png";
import showImg from "../../images/show.svg";
const NavBar = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const btn = document.getElementById("toggle-btn");

    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      btn.style.display = "none";
    } else {
      sidebar.style.display = "none";
    }
  };

  return (
    <div className="bg-white   flex flex-col-reverse  md:flex-row px-3  md:justify-between md:items-center py-2  md:py-5 md:px-10 md:h-20">
      <SearchBar />
      <div className="flex flex-row justify-between   md:gap-20 items-center">
        <div className="flex gap-2  md:gap-7">
          {
            <img
              src={showImg}
              onClick={toggleSidebar}
              alt=""
              id="toggle-btn"
              className="cursor-pointer block md:hidden"
            />
          }
          <img className="h-4 md:h-6" src={calenderIcon} alt="" />
          <img className="h-4 md:h-6" src={messageIcon} alt="" />
          <img className="h-4 md:h-6" src={notificationIcon} alt="" />
        </div>
        <div className="flex gap-2 md:gap-7">
          <div className="hidden md:flex flex-col items-end">
            <h3 className="text-heading leading-[19px]">Anima Agrawal</h3>
            <p className="text-sidebartext">U.P, India</p>
          </div>
          <img className="w-7 h-7  md:w-10 md:h-10" src={userImg} alt="" />
          <img src={downIcon} className="hidden md:block md:-ml-6" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
