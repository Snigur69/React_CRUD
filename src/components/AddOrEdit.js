import React from "react";
import { NavLink } from "react-router-dom";

const AddOrEdit = (props) => {
    return (
        <div>
            <h1>{props.type}</h1>
            <label>Название:</label>
            <br />

            <input
                onChange={props.titleChange}
                value={props.state.title}
                placeholder="Enter the title"
            />
            <br />
            <label>Время:</label>
            <br />
            <input
                onChange={props.timeChange}
                value={props.state.time}
                placeholder="Enter the time"
            />
            <br />
            <br />

            <NavLink to="/">
                <button onClick={props.addTask}>Add new Task</button>
            </NavLink>
        </div>
    );
};

export default AddOrEdit;
