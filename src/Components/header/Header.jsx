import React from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

function Header() {
  return (
    <header>
      <div className="app-icon"><h2>To Do</h2></div>
      <div className="icon-container">
        <Icon path={mdiMenu} size={1} />
      </div>
    </header>
  );
}

export default Header;
