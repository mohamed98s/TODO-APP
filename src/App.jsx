import { useState, useEffect } from "react";
import Taskinput from "./componants/Taskinput";
import Taskitem from "./componants/Taskitem";
import uuid from "react-uuid";
import States from "./componants/States";

function App() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setToDoList(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDoList));
  }, [toDoList]);

  function addTask(taskName) {
    const newTask = {
      taskName,
      checked: false,
      taskId: uuid(),
    };
    setToDoList([...toDoList, newTask]);
    // localStorage.setItem('list', toDoList)

  }
  
  // if(localStorage.getItem('list'))
  // {
  // const x = localStorage.getItem('list')
  // console.log(x);

  // }


  function deleteTask(deleteTaskId) {
    setToDoList(toDoList.filter((task) => task.taskId !== deleteTaskId));
  }

  function toggleTask(taskId) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskId === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  }

  console.log(toDoList);

  return (
    <>
      <div className="container">
        <h1>Task master</h1>

        <Taskinput addTask={addTask}></Taskinput>

        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <Taskitem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
            ))}
          </ul>

          {toDoList.length === 0 ? (
            <p className="notify">You're Done!</p>
          ) : null}
        </div>
      </div>
      <States toDoList={toDoList} />
    </>
  );
}

export default App;
