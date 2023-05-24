import React, { useState } from "react";
import "./NoteFormat.css";

function NoteFormat(props) {
  const [task, setTask] = useState(props.title);

  function onDelete() {
    // makes the website not reload on submit
    const taskData = {
      task: task,
      id: Math.random().toString(),
    };
    props.Delete(taskData);
  }

  return (
    <div className="new-task">
      <div>
        <h1>{task}</h1>
      </div>
      <div>
        <button onClick={onDelete}>Remove</button>
      </div>
    </div>
  );
}

export default NoteFormat;
