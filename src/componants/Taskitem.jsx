import React from "react";
import { MdDeleteSweep } from "react-icons/md";


export default function Taskitem({ task, deleteTask, toggleTask }) {
    
  return (
    <li className="items">
         
      <div className={`layer ${task.checked ? 'w100': ''}`}></div>

      <div className="items-text">
        <input
          type="checkbox"
          defaultChecked={task.checked}
          onClick={() => toggleTask(task.taskId)}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => deleteTask(task.taskId)}
      ></MdDeleteSweep>
    </li>
  );
}
