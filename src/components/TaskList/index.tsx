import Item from "./Item";
import style from './taskList.module.scss';
import { ITask } from "../../types/task";

function TaskList({taskList}: {taskList: ITask[]}) {
  
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