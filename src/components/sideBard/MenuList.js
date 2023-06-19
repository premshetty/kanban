import React from "react";
import homeIcon from "../../images/home.svg";
import messageIcon from "../../images/message.svg";
import taskIcon from "../../images/task.svg";
import memberIcon from "../../images/members.svg";
import settingsIcon from "../../images/settings.svg";

const MenuList = () => {
  const menuList = [
    {
      name: "Home",
      icon: homeIcon,
    },
    {
      name: "Messages",
      icon: messageIcon,
    },
    {
      name: "Tasks",
      icon: taskIcon,
    },
    {
      name: "Members",
      icon: memberIcon,
    },
    {
      name: "Settings",
      icon: settingsIcon,
    },
  ];
  return (
    <div className="mt-12 md:mt-8 flex flex-col gap-6">
      {menuList.map((item) => {
        return (
          <div className="flex gap-4 items-center cursor-pointer group-[list]:">
            <img src={item.icon} alt="" />
            <p className="text-sidebartext text-base group-[list]:hover:underline underline-offset-2">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
