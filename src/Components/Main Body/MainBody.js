import React from "react";
import NoteFormat from "./NoteFormat";
import "./MainBody.css";

function MainBody(props) {
  function DeleteHandler(enteredTask) {
    const taskData = {
      ...enteredTask,
    };
    props.onDelete(taskData);
  }
  return (
    <div className="tasks">
      {props.Data.map((task) => (
        <NoteFormat key={task.id} title={task.task} Delete={DeleteHandler} />
      ))}
    </div>
  );
}

export default MainBody;
