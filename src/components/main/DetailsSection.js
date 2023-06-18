import React from "react";
import inviteICon from "../../images/invite.svg";
import editICon from "../../images/edit.svg";
import linkICon from "../../images/link.svg";
import person1Img from "../../images/inviteuser1.png";
import person2Img from "../../images/inviteuser2.png";
import person3Img from "../../images/inviteuser3.png";
import person4Img from "../../images/inviteuser4.png";
import Kanban from "./kanban/Kanban";
const DetailsSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
      <div className="flex gap-4 items-center">
        <h1 className="text-2xl md:text-5xl  font-normal">Mobile App</h1>
        <img className="mt-3 cursor-pointer" src={editICon} alt="" />
        <img className="mt-3 cursor-pointer" src={linkICon} alt="" />
      </div>

      <div>
        <div className="flex  items-center gap-2">
          {" "}
          <img className="cursor-pointer" src={inviteICon} alt="" />
          <p className="text-[#5030E5] ">invite</p>
          <div className="flex flex-row-reverse relative h-10 w-36">
            <img
              className="absolute cursor-pointer h-9 w-9 top-0 left-0"
              src={person1Img}
              alt=""
            />
            <img
              className="absolute cursor-pointer h-9 w-9 top-0 left-7"
              src={person2Img}
              alt=""
            />
            <img
              className="absolute cursor-pointer h-9 w-9 top-0 left-14"
              src={person3Img}
              alt=""
            />
            <img
              className="absolute cursor-pointer h-9 w-9 top-0 left-20"
              src={person4Img}
              alt=""
            />
            <div className="absolute cursor-pointer h-9 w-9 top-0 left-28 bg-[#F4D7DA] flex justify-center items-center text-[#D25B68] rounded-full">
              +2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
