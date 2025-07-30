import type { Task } from "../App";

type Props = {
    title: string,
    tasks: Task[],
    date?: string
}

export const ToDoListItem = ({title, tasks, date}: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
      {tasks.map((el) => {
        return (
            <li>
              <input type="checkbox" checked={el.isDone} /> <span>{el.title}</span>
            </li>
        )
      })}
      </ul>
      {/* <ul>
        <li>
          <input type="checkbox" checked={tasks[0].isDone} /> <span>{tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[1].isDone} /> <span>{tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[2].isDone} /> <span>{tasks[2].title}</span>
        </li>
      </ul> */}
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>{date}</div>
    </div>
  );
};
