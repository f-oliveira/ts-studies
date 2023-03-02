import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Timer from '../components/Timer';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <TaskForm/>
      <TaskList/>
      <Timer/>
    </div>
  );
}

export default App;
