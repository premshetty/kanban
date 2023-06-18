import React, { useEffect, useState } from "react";
import { columnsFromBackend } from "./kanbanData";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import addIcon from "../../../images/addTicket.svg";
import FilterSection from "../FilterSection";
import NavBar from "../../nav/NavBar";
import DetailsSection from "../DetailsSection";
import ModalForm from "./CreateTicket";

const Kanban = ({ activeProjectList, handleSaveClick }) => {
  const [heading, setHeading] = useState("");
  const [columns, setColumns] = useState(false);
  const [filterValue, setFilterValue] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const storedData = localStorage.getItem("ticketTracker");
  useEffect(() => {
    if (!columns) {
      const parsedData = storedData
        ? JSON.parse(storedData)
        : columnsFromBackend();
      setColumns(parsedData);
    } else {
    }
  }, [columns]);

  useEffect(() => {
    setHeading(activeProjectList);
  }, [activeProjectList]);

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
      const cols = {
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      };
      setColumns(cols);
      localStorage.setItem("ticketTracker", JSON.stringify(cols));
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      const cols = {
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      };
      setColumns(cols);
      localStorage.setItem("ticketTracker", JSON.stringify(cols));
    }
  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilterValue(value);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const filterTasksByPriority = (tasks) => {
    if (filterValue === "All") {
      return tasks;
    } else {
      return tasks.filter((task) => task.Priority === filterValue);
    }
  };

  const filterTasksBySearchTerm = (tasks) => {
    return tasks.filter((task) => {
      const taskTitle = task.title.toLowerCase() || "";
      const taskTask = task.Task.toLowerCase() || "";
      const searchTermLower = searchTerm.toLowerCase() || "";
      return (
        taskTitle.includes(searchTermLower) ||
        taskTask.includes(searchTermLower)
      );
    });
  };

  return (
    <div className="flex-grow max-w-full">
      <NavBar searchHandler={handleSearch} />
      {showModal && <ModalForm closeModal={closeModal} />}
      <div className="p-3  md:p-10 bg-[#ffffff]">
        <DetailsSection
          activeProjectList={heading}
          handleSaveClick={handleSaveClick}
        />
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <div className="mt-10 max-w-full md:-mr-14 overflow-scroll md:overflow-hidden">
            <FilterSection filterChangeHandler={handleFilterChange} />
            <div className="flex gap-4 lg:justify-around">
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
                              {
                                filterTasksByPriority(
                                  filterTasksBySearchTerm(column.items)
                                )?.length
                              }
                            </div>
                          </div>
                        </div>
                        {column.title === "To-do" && (
                          <img
                            onClick={openModal}
                            className="cursor-pointer"
                            src={addIcon}
                            alt=""
                          />
                        )}
                      </div>
                      <div
                        className="h-[3px] mt-2 w-full"
                        style={{
                          backgroundColor:
                            column.title !== "Done" ? column.color : "#8BC48A",
                        }}
                      ></div>
                      {filterTasksByPriority(
                        filterTasksBySearchTerm(column.items)
                      ).map((item, index) => (
                        <div key={item.id}>
                          <TaskCard
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
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
