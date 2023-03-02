import React from "react";
import Item from "./Item";
import style from './taskList.module.scss';

function TaskList() {
  const taskList = [{
    task: 'React',
    time: '01:00:00'
  }, {
    task: 'JavaScript',
    time: '02:00:00'
  }, {
    task: 'TypeScript',
    time: '02:00:00'
  }]
  
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {taskList.map((item,index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default TaskList;