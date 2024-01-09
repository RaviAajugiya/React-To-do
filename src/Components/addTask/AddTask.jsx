import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { useDispatch } from "react-redux";

function AddTask() {

  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [first, setFirst] = useState(second)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      title: task.value,
      description: description.value,
      priority: priority.value,
      date: date.value,
    };    
    console.log(todo);
  }
  
  return (
    <>
      <div className="addTask">
        <div className="addTask-btn">
          <Icon path={mdiPlus} size={1} />
          <span>Add Task</span>
        </div>
        <div className="add-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input name="task" type="text" placeholder="Task Name" />
            <input name="description" type="text" placeholder="Description" />
            <select name="priority" id="">
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
            <input name="date" type="date" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;
