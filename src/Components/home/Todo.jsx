import React from "react";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiCalendarBlankOutline } from "@mdi/js";

function Todo({id, title, date, label}) { 

  return (
    <>
      <div className="todo">
        <div>
          <div className="todo-text">
            <div className="todo-icon-container">
              <input type="checkbox" name="" id={id} />
              <label htmlFor={id}>{title}</label>
            </div>
            <Icon path={mdiChevronRight} size={1} />
          </div>
          <div className="todo-information">
            <div>
              <Icon path={mdiCalendarBlankOutline} size={0.8} />
              <span>{date}</span>
            </div>
            <div className="todo-label">
              <span className="label-color"></span>
              <span>{label}</span>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Todo;
