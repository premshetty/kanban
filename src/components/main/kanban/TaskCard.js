import React from "react";
import { Draggable } from "react-beautiful-dnd";
import messageIcon from "../../../images/message.svg";
const TaskCard = ({ item, index, columnName }) => {
  return (
    <div className="relative">
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="flex justify-start items-center rounded-xl bg-white  mt-4 p-5"
          >
            <div className="flex flex-col w-80 min-w-[320px]">
              {columnName === "Done" ? (
                <div className="bg-[#83C29D] bg-opacity-20 text-xs text-[#68B266] w-fit px-[6px] font-semibold py-1">
                  Completed
                </div>
              ) : (
                <div className="bg-[#DFA874] bg-opacity-20 text-xs text-[#D58D49] w-fit px-[6px] font-semibold py-1">
                  {item.Priority}
                </div>
              )}
              <p className="text-heading font-bold text-lg"> {item.title} </p>
              {item.isShowContentImg ? (
                <div className="flex gap-2 overflow-scroll md:overflow-hidden max-w-[230px] md:w-auto">
                  {item.contentImg.map((img, index) => (
                    <img
                      key={index}
                      className="rounded-md object-cover flex-grow h-[100px]  min-w-[45%]"
                      src={img}
                      alt=""
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-sidebartext font-medium">
                  {item.Task}
                </p>
              )}

              <div className="flex justify-between mt-5 max-w-[270px] md:w-auto">
                <div className="flex flex-row-reverse relative h-5 max-w-[140px] min-w-[50px]">
                  {item.userImages.map((img, index) => (
                    <img
                      key={index}
                      className={`absolute cursor-pointer h-5 w-5 top-0 
                    ${
                      index === 0
                        ? "left-0"
                        : index === 1
                        ? "left-4"
                        : index === 2
                        ? "left-8"
                        : index === 3
                        ? "left-12"
                        : ""
                    }`}
                      src={img}
                      alt=""
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <img src={messageIcon} className="h-5" alt="" />
                    <p className="text-sidebartext whitespace-nowrap text-xs">
                      14 comments
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <img src={messageIcon} className="h-5" alt="" />
                    <p className="text-sidebartext whitespace-nowrap text-xs">
                      14 files
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default TaskCard;

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
