import React from "react";
import inviteICon from "../../images/invite.svg";
import editICon from "../../images/edit.svg";
import linkICon from "../../images/link.svg";
import person1Img from "../../images/inviteuser1.png";
import person2Img from "../../images/inviteuser2.png";
import person3Img from "../../images/inviteuser3.png";
import person4Img from "../../images/inviteuser4.png";
import Kanban from "./kanban/Kanban";
import NavBar from "../nav/NavBar";
import DetailsSection from "./DetailsSection";

const Hero = () => {
  return (
    <div className="flex-grow max-w-full">
      <NavBar />
      <div className="p-3  md:p-10 bg-[#ffffff]">
        <DetailsSection />
        <Kanban />
      </div>
    </div>
  );
};

export default Hero;
