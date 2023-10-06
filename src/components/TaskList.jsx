import { useSelector } from 'react-redux'

function TaskList() {
  const tasks = useSelector(state => state.tasks)
  console.log(tasks)
  
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