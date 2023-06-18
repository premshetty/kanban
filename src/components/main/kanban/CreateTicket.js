import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import person2Img from "../../../images/inviteuser2.png";
import person3Img from "../../../images/inviteuser3.png";
import person4Img from "../../../images/inviteuser4.png";
import person1Img from "../../../images/inviteuser1.png";
function ModalForm({ data, closeModal }) {
  const [Task, setTask] = useState("");
  const [Priority, setPriority] = useState("Low");
  const [Due_Date, setDueDate] = useState("");
  const [contentText, setContentText] = useState("");
  const [contentImg, setContentImg] = useState("");
  const [isShowContentImg, setIsShowContentImg] = useState(false);

  const handleIsShowContentImgChange = (e) => {
    setIsShowContentImg(e.target.checked);
  };
  const submitHandler = () => {
    const imageList = [person1Img, person2Img, person3Img, person4Img];
    const randomNumGenareator = () => {
      let res;
      let randomNumber1 = Math.floor(Math.random() * 4);
      let randomNumber2 = Math.floor(Math.random() * 4);

      // Ensure both numbers are unique
      while (randomNumber2 === randomNumber1) {
        randomNumber2 = Math.floor(Math.random() * 4);
      }
      res = { randomNumber1, randomNumber2 };
      return res;
    };
    const randomNumbers = randomNumGenareator();
    const list =
      JSON.parse(localStorage.getItem("ticketTracker")) ||
      JSON.parse(localStorage.getItem("tickets"));

    const newTodo = {
      id: uuidv4(),
      title: Task,
      Task,
      Priority,
      Due_Date,
      contentText,
      contentImg: [contentImg],
      userImages: [
        imageList[randomNumbers.randomNumber1],
        imageList[randomNumbers.randomNumber2],
      ],
      isShowContentImg,
    };
    console.log(list);
    for (const property in list) {
      console.log(property);
      if (list[property].title === "To-do") {
        list[property].items = [...list[property].items, newTodo];
      }
    }
    console.log(list);
    localStorage.setItem("ticketTracker", JSON.stringify(list));
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000] bg-opacity-60 z-50">
      <div className="bg-[white]  w-full text-sidebartext md:w-auto p-6 rounded shadow-2xl">
        <h1 className="text-sidebartext text-3xl font-bold font-sans">
          Create a New Task{" "}
        </h1>
        <p className="mb-2  px-2 h-11 grid grid-cols-2 w-auto md:w-96 items-center gap-3">
          <span className="font-bold">Task:</span>
          <input
            className="placeholder:text-[#787486] bg-transparent outline-none h-full"
            type="text"
            placeholder="Task Name"
            value={Task}
            onChange={(e) => setTask(e.target.value)}
          />
        </p>
        <p className="mb-2  px-2 h-11 grid grid-cols-2 w-auto md:w-96 items-center gap-3">
          <span className="font-bold">Priority:</span>
          <select
            className="text-sidebartext  outline-none h-full bg-white"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </p>
        <p className="mb-2  px-2 h-11 grid grid-cols-2 w-auto md:w-96 items-center gap-3">
          <span className="font-bold">Due Date:</span>
          <input
            className="placeholder:text-[#787486] bg-transparent outline-none h-full"
            type="date"
            value={Due_Date}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </p>
        <p className="mb-2  px-2 h-11 grid grid-cols-2 w-auto md:w-96 items-center gap-3">
          <span className="font-bold">Content:</span>
          <textarea
            className="placeholder:text-[#787486] bg-transparent outline-none h-full"
            value={contentText}
            placeholder="Enter the Description"
            onChange={(e) => setContentText(e.target.value)}
          />
        </p>
        <p className="mb-2  px-2 h-11 grid grid-cols-2 w-auto md:w-96 items-center gap-3">
          <span className="font-bold">Image URL:</span>
          <input
            className="placeholder:text-[#787486] bg-transparent outline-none h-full"
            type="text"
            placeholder="Image Url"
            value={contentImg}
            onChange={(e) => setContentImg(e.target.value)}
          />
        </p>
        <div className="flex items-center mt-4">
          <input
            className="placeholder:text-[#787486] bg-transparent outline-none h-full"
            type="checkbox"
            checked={isShowContentImg}
            onChange={handleIsShowContentImgChange}
          />
          <span className="ml-2">Show Content Images</span>
        </div>

        <div className="flex justify-around mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
