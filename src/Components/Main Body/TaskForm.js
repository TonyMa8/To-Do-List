import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm(props) {
  const [Task, setTask] = useState("");

  function taskChangeHandler(event) {
    setTask(event.target.value);
    console.log(Task);
  }

  function submitHandler(event) {
    event.preventDefault(); // makes the website not reload on submit
    const taskData = {
      task: Task,
      id: Math.random().toString,
    };
    props.onFormSubmition(taskData);
    setTask("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="wraper">
        <div className="objects">
          <label className="title">Task: </label>
        </div>
        <div className="objects">
          <input type="text" value={Task} onChange={taskChangeHandler} />
        </div>
        <div className="objects">
          <button type="submit">Add Task</button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
