import React from "react";
import List from "./List";
import { NavLink } from "react-router-dom";

const ReadOrDelete = (props) => {
    return (
        <div>
            <h1>READ / DELETE</h1>
            <List
                list={props.state.list}
                removeTask={props.removeCurrentTask}
                editTask={props.editCurrentTask}
            />
            <br />
            <NavLink to="/add">
                <button>Add New Task</button>
            </NavLink>
        </div>
    );
};

export default ReadOrDelete;
