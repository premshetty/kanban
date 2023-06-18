import React from "react";
import SearchBar from "./SearchBar";
import calenderIcon from "../../images/calender.svg";
import messageIcon from "../../images/messagenav.svg";
import notificationIcon from "../../images/notification.svg";
import downIcon from "../../images/down.svg";
import userImg from "../../images/user.png";
const NavBar = () => {
  return (
    <div className="bg-white  flex justify-between items-center py-5 px-10 h-20">
      <SearchBar />
      <div className="flex justify-between gap-20 items-center">
        <div className="flex gap-7">
          <img className="h-6" src={calenderIcon} alt="" />
          <img className="h-6" src={messageIcon} alt="" />
          <img className="h-6" src={notificationIcon} alt="" />
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col items-end">
            <h3 className="text-heading leading-[19px]">Anima Agrawal</h3>
            <p className="text-sidebartext">U.P, India</p>
          </div>
          <img className="w-10 h-10" src={userImg} alt="" />
          <img src={downIcon} className="-ml-6" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
