import { useSelector } from 'react-redux'

function TaskList() {
  const tasks = useSelector(state => state.tasks)
 
  return (
    <div>{tasks.map(task => (
      <div key={task.id}>
        <p>{task.title}</p>
        <p>{task.description}</p>
      </div>
    ))}</div>
  )
}

export default TaskList