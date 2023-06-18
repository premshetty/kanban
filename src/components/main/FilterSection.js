import React from "react";
import filterIcon from "../../images/filter.svg";
import calenderIcon from "../../images/calenderFIlter.svg";
import downIcon from "../../images/down.svg";
import user from "../../images/members.svg";
import listIcon from "../../images/listView.svg";
import shrink from "../../images/shrinkView.svg";

const FilterSection = () => {
  return (
    <div className="flex  flex-col md:flex-row gap-3 justify-between items-center mt-10">
      <div className="flex gap-3">
        <div className="h-10 w-32 border-2 flex gap-3 rounded-md items-center px-3 border-border">
          <img className="h-3" src={filterIcon} alt="" />
          <p type="text" className="text-sidebartext">
            Filter
          </p>
          <img className="h-3" src={downIcon} alt="" />
        </div>
        <div className="h-10 w-32 border-2 flex gap-3 rounded-md items-center px-3 border-border">
          <img className="h-3" src={calenderIcon} alt="" />
          <p type="text" className="text-sidebartext">
            Today
          </p>
          <img className="h-3" src={downIcon} alt="" />
        </div>
      </div>
      <div className="flex gap-3 h-10">
        <div className="h-10 w-24 border-2 flex gap-3 rounded-md items-center px-3 border-border">
          <img className="h-3" src={user} alt="" />
          <p type="text" className="text-sidebartext">
            Share
          </p>
        </div>
        <p className="h-full w-[2px] bg-border"></p>
        <img src={listIcon} alt="" />
        <img src={shrink} className="p-2" alt="" />
      </div>
    </div>
  );
};

export default FilterSection;
