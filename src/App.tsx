import './App.css'
import { ToDoListItem } from './components/ToDoListItem'

export type Task = {
  id: number,
  title: string,
  isDone: boolean
}

function App() {

  const tasks1: Task[] = [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'REACT', isDone: false},
    { id: 4, title: 'Redux', isDone: false },
  ]

  const tasks2: Task[] = [
    {id: 1, title: 'HELLO WORLD', isDone: true},
    {id: 2, title: 'I am happy', isDone: true},
    {id: 3, title: 'YO', isDone: false},
    { id: 4, title: 'Redux', isDone: false },
  ]

  return (
    <div className='app'>
     <ToDoListItem title={'What to Learn'} tasks={tasks1} date='29.07.2025'/>
     <ToDoListItem title={'Songs'} tasks={tasks2}/>
    </div>
  )
}

export default App
