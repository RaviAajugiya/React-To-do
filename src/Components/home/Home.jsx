import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import AddTask from "../addTask/AddTask";
import Icon from '@mdi/react';
import { mdiOrderBoolAscendingVariant } from '@mdi/js';


function Home() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div className="home">
      <div className="filter-group">
        <ul>
          <li>All Task</li>
          <li>Completed</li>
          <li>Pending</li>
        </ul>
      </div>
<Icon path={mdiOrderBoolAscendingVariant} size={1} />

      {todos.map((todo) => (
        <Todo id={todo.id} title={todo.title} date={todo.date} label={todo.label}/>
      ))}

      <AddTask/>
    </div>
  );
}

export default Home;
