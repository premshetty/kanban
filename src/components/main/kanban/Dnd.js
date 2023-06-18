import React, { useState } from "react";
import { processList } from "./kanbanData";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import addIcon from "../../../images/addTicket.svg";

const TaskList = ({ columnId, children }) => (
  <div className="min-h-100px flex flex-col bg-[#F5F5F5] min-w-341px rounded-lg p-4 mr-8">
    <Droppable droppableId={columnId}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

const Kanban = () => {
  const [columns, setColumns] = useState(processList);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <div className="flex mt-10">
        <div className="grid  grid-cols-3  overflow-x-auto">
          {processList.map((column) => (
            <TaskList key={column.id} columnId={column.id}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: column.color }}
                  ></div>
                  <div className="flex gap-2 items-center py-1 px-4 rounded-lg self-start">
                    <p>{column.title}</p>
                    <div className="h-5 w-5 bg-border text-[#625F6D] flex items-center justify-center rounded-full text-xs">
                      4
                    </div>
                  </div>
                </div>
                {column.title === "To-do" && <img src={addIcon} alt="" />}
              </div>
              <div
                className="h-[3px] mt-2 w-full"
                style={{ backgroundColor: column.color }}
              ></div>
              {column.items.map((item, index) => (
                <TaskCard key={item.id} item={item} index={index} />
              ))}
            </TaskList>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Kanban;
