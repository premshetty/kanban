import { v4 as uuidv4 } from "uuid";
import person2Img from "../../../images/inviteuser2.png";
import person3Img from "../../../images/inviteuser3.png";
import person4Img from "../../../images/inviteuser4.png";
import person1Img from "../../../images/inviteuser1.png";

export const data = [
  {
    id: "1",
    title: "Task 1",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "Low",
    Due_Date: "20-Jun-2023",
    contentText:
      "Brainstorming brings team members' diverse experience into play.",
    contentImg: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    userImages: [person1Img, person4Img],
    isShowContentImg: true,
  },
  {
    id: "2",
    title: "Task 2",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "Medium",
    Due_Date: "21-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: ["https://picsum.photos/200/300"],
    userImages: [person2Img, person3Img],
    isShowContentImg: false,
  },
  {
    id: "3",
    title: "Task 3",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "High",
    Due_Date: "22-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    userImages: [person1Img, person2Img],
    isShowContentImg: true,
  },
  {
    id: "4",
    title: "Task 4",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "Low",
    Due_Date: "23-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: [],
    userImages: [person3Img, person4Img],
    isShowContentImg: false,
  },
  {
    id: "5",
    title: "Task 5",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "Medium",
    Due_Date: "24-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    userImages: [person1Img],
    isShowContentImg: true,
  },
  {
    id: "6",
    title: "Task 6",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "High",
    Due_Date: "25-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    userImages: [person2Img, person3Img, person4Img],
    isShowContentImg: true,
  },
  {
    id: "7",
    title: "Task 7",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "Low",
    Due_Date: "26-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    userImages: [person1Img, person4Img],
    isShowContentImg: true,
  },
  {
    id: "8",
    title: "Task 8",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "Medium",
    Due_Date: "27-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: [],
    userImages: [person2Img],
    isShowContentImg: false,
  },
  {
    id: "9",
    title: "Task 9",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "High",
    Due_Date: "28-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    userImages: [person3Img, person4Img],
    isShowContentImg: true,
  },
  {
    id: "10",
    title: "Task 10",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Priority: "Low",
    Due_Date: "29-Jun-2023",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentImg: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    userImages: [person1Img, person2Img, person3Img, person4Img],
    isShowContentImg: true,
  },
];

export const columnsFromBackend = () => {
  const columns = {
    [uuidv4()]: {
      title: "To-do",
      items: [...data],
      color: "#5030E5",
    },
    [uuidv4()]: {
      title: "In Progress",
      items: [],
      color: "#FFA500",
    },
    [uuidv4()]: {
      title: "Done",
      items: [],
      color: "#76A5EA",
    },
  };
  localStorage.setItem("tickets", JSON.stringify(columns));
  localStorage.setItem("ticketTracker", JSON.stringify(columns));

  return columns;
};
