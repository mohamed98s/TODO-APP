import React, { useState } from 'react'

export default function Taskinput({addTask}) {

    const [task, setTask] = useState('');

    // console.log(task);
    function handleInputValue(event){
        setTask(event.target.value)
    }

    function handleAddTask(event){
        event.preventDefault();
        if(task.trim()==='') return;
        addTask(task)
        setTask('')
    }

  return (
    <form className='inputField' onSubmit={handleAddTask}> 
        <input type="text" value={task} placeholder='add task...' 
        onChange={handleInputValue}
        />
        <button>+</button>
    </form>
    )
}
