import React from "react";
import ideaImg from "../../images/idea.svg";
const WriteMessage = () => {
  return (
    <div className="bg-[#5030E5] bg-opacity-10 rounded-2xl flex flex-col items-center pt-12 gap-6 mt-10 relative">
      <img src={ideaImg} className="absolute -top-10 left-12" alt="" />
      <h3 className="font-medium">Thoughts Time</h3>
      <p className=" text-center text-xs px-6">
        {" "}
        We don’t have any notice for you, till then you can share your thoughts
        with your peers.
      </p>
      <button className="font-medium bg-white h-10 w-40 mb-4 rounded-[6px]">
        Write a message
      </button>
    </div>
  );
};

export default WriteMessage;
