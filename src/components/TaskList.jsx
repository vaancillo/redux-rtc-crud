import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

function TaskList() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
 
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <div>{tasks.map(task => (
      <div key={task.id}>
        <p>{task.title}</p>
        <p>{task.description}</p>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    ))}</div>
  )
}

export default TaskList