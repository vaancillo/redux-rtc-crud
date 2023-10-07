import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

function TaskList() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
 
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <div>
      <header>
        <h1>Task {tasks.length}</h1>
        <Link to='/create-task'>
          Create task
        </Link>
      </header>
      <div>{tasks.map(task => (
        <div key={task.id}>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}</div>
    </div>
  )
}

export default TaskList