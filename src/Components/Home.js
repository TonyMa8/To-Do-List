import React, { useState } from "react";
import MainBody from "./Main Body/MainBody";
import TaskForm from "./Main Body/TaskForm";

const INITIAL_TASKS = [
  {
    id: "e1",
    task: "Clean Room",
  },
  {
    id: "e2",
    task: "Do Dishes",
  },
  {
    id: "e3",
    task: "Read",
  },
];

function Home(props) {
  const [Tasks, setTasks] = useState(INITIAL_TASKS);

  function saveFormSubmition(enteredTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, enteredTask];
    });
    console.log(Tasks);
  }

  function DeleteHandler(enteredTask) {
    setTasks((prevTasks) => {
      return prevTasks.filter((item) => item.task !== enteredTask.task);
    });
  }
  return (
    <div>
      <TaskForm onFormSubmition={saveFormSubmition} />;
      <MainBody Data={Tasks} onDelete={DeleteHandler} />;
    </div>
  );
}

export default Home;
