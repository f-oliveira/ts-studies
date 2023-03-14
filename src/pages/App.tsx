import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Timer from '../components/Timer';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [taskList, setTask] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <TaskForm setTask={setTask}/>
      <TaskList taskList={taskList}/>
      <Timer/>
    </div>
  );
}

export default App;
