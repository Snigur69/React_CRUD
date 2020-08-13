import React from "react";
import styles from "./list.module.css";
import { NavLink } from "react-router-dom";

const List = (props) => {
    return (
        <div>
            <table border="1px" className={styles.read_table}>
                <thead>
                    <tr>
                        <td>№</td>
                        <td>Название</td>
                        <td>Время</td>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td>{el.title}</td>
                                <td>{el.time}</td>
                                <td>
                                    <NavLink to="/edit">
                                        <button
                                            data-id={el.id}
                                            onClick={props.editTask}
                                        >
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button
                                        data-id={el.id}
                                        onClick={props.removeTask}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default List;
