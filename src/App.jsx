import './App.css'
import { useSelector } from 'react-redux'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const taskState = useSelector(state => state.tasks)
  console.log(taskState)

  return (
    <div className='App'>
      <h1>hello world</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
