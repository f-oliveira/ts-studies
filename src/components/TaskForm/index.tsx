import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./form.module.scss";

class TaskForm extends React.Component<{
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    task: "",
    time: "00:00"
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTask(oldTasks => [...oldTasks, { ...this.state }])
    this.setState({
      task: "",
      time: "00:00"
    })
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Add new task
          </label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.task}
            onChange={event => this.setState({ ...this.state, task: event.target.value })}
            placeholder="What do you want to study"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="time">
            Time
          </label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            value={this.state.time}
            onChange={event => this.setState({ ...this.state, time: event.target.value })}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>
          Adicionar
        </Button>
      </form>
    )
  }
}

export default TaskForm;