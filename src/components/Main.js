import React from "react";
import styles from "./ReadOrDelete.module.css";
import AddOrEdit from "./AddOrEdit";
import ReadOrDelete from "./ReadOrDelete";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { id: 1, title: "Задание 1", time: "9:00" },
                { id: 2, title: "Задание 2", time: "10:00" },
                { id: 3, title: "Задание 3", time: "11:00" },
            ],
            title: "",
            time: "",
            listCount: 3,
            changeId: 0,
        };
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.removeCurrentTask = this.removeCurrentTask.bind(this);
        this.editCurrentTask = this.editCurrentTask.bind(this);
        this.submitTaskEditing = this.submitTaskEditing.bind(this);
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleTimeChange(e) {
        this.setState({ time: e.target.value });
    }
    handleAddTask() {
        let newTask = {
            id: this.state.listCount + 1,
            title: this.state.title,
            time: this.state.time,
        };
        this.setState({
            list: [...this.state.list, newTask],
            title: "",
            time: "",
            listCount: this.state.listCount + 1,
        });
    }

    removeCurrentTask(e) {
        let newList = [...this.state.list];
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].id == e.target.attributes["data-id"].value) {
                newList.splice(i, 1);
            }
        }

        this.setState({ list: newList });
    }

    editCurrentTask(e) {
        this.setState({ changeId: e.target.attributes["data-id"].value });

        for (let i = 0; i < this.state.list.length; i++) {
            if (e.target.attributes["data-id"].value == this.state.list[i].id) {
                this.setState({
                    title: this.state.list[i].title,
                    time: this.state.list[i].time,
                });
            }
        }
    }
    submitTaskEditing(e) {
        let newList = [...this.state.list];
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.changeId == this.state.list[i].id) {
                newList[i].title = this.state.title;
                newList[i].time = this.state.time;
            }
        }
        this.setState({
            list: newList,
            title: "",
            time: "",
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/add">
                            <AddOrEdit
                                type="ADD"
                                state={this.state}
                                titleChange={this.handleTitleChange}
                                timeChange={this.handleTimeChange}
                                addTask={this.handleAddTask}
                            />
                        </Route>
                        <Route path="/edit">
                            <AddOrEdit
                                type="EDIT"
                                state={this.state}
                                titleChange={this.handleTitleChange}
                                timeChange={this.handleTimeChange}
                                addTask={this.submitTaskEditing}
                            />
                        </Route>
                        <Route path="/">
                            <ReadOrDelete
                                state={this.state}
                                removeCurrentTask={this.removeCurrentTask}
                                editCurrentTask={this.editCurrentTask}
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Main;
