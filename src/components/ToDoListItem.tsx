import type {Task} from "../App";
import {Button} from "./Button.tsx";

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
                <input/>
                <Button title={'+'} />
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map((el) => {
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
            </div>
            <div>{date}</div>
        </div>
    );
};
