import React, { useEffect, useState } from "react";

const ProjectList = ({ activeList, setActiveList }) => {
  const [projectList, setProjectList] = useState([]);
  const list = localStorage.getItem("projectList");
  console.log({
    list,
    projectList,
    isequal: list === JSON.stringify(projectList),
  });
  useEffect(() => {
    console.log({
      len: projectList.length > 0,
      isequal: list !== JSON.stringify(projectList),
    });

    setProjectList(JSON.parse(list));
  }, [activeList]);

  return (
    <div className="flex flex-col gap-4 mt-3">
      {projectList?.map((item) => (
        <div
          onClick={() => setActiveList(item)}
          className={`flex rounded-md px-3 items-center cursor-pointer justify-between ${
            activeList === item && "bg-green-700"
          } bg-opacity-20 h-10`}
        >
          <div className="flex gap-2 items-center">
            <div className={`h-3 w-3 rounded-full bg-green-700`}></div>
            <h2
              className={`text-base w-28 whitespace-nowrap text-ellipsis overflow-hidden`}
            >
              {" "}
              {item}
            </h2>
          </div>
          {activeList === item && (
            <div className="font-bold text-xl -mt-2">...</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
