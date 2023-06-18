import React, { useEffect, useState } from "react";
import { columnsFromBackend } from "./kanbanData";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import addIcon from "../../../images/addTicket.svg";

const Kanban = () => {
  const [columns, setColumns] = useState(false);

  const storedData = localStorage.getItem("ticketTracker");
  useEffect(() => {
    if (!columns) {
      const parsedData = storedData
        ? JSON.parse(storedData)
        : columnsFromBackend();
      setColumns(parsedData);
    } else {
      localStorage.setItem("ticketTracker", JSON.stringify(columns));
    }
  }, [columns, storedData]);

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
      <div className="flex  gap-4 mt-10 w-full overflow-scroll md:overflow-hidden lg:justify-around">
        {Object.entries(columns).map(([columnId, column], index) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided, snapshot) => (
              <div
                className="min-h-100px max-w-[350px] flex flex-col bg-gray-200 min-w-[341px] rounded-lg p-5 "
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: column.color }}
                    ></div>
                    <div className="flex gap-2 items-center py-1 px-4 rounded-lg self-start">
                      <p>{column.title}</p>
                      <div className="h-5 w-5 bg-border text-[#625F6D] flex items-center justify-center rounded-full text-xs">
                        {column.items.length}
                      </div>
                    </div>
                  </div>
                  {column.title === "To-do" && <img src={addIcon} alt="" />}
                </div>
                <div
                  className="h-[3px] mt-2 w-full"
                  style={{
                    backgroundColor:
                      column.title !== "Done" ? column.color : "#8BC48A",
                  }}
                ></div>
                {column.items.map((item, index) => (
                  <div>
                    <TaskCard
                      key={item}
                      item={item}
                      index={index}
                      columnName={column.title}
                    />
                  </div>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
