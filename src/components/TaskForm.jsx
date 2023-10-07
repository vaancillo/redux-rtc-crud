import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addTask, updateTask} from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector((state) => state.tasks)

  const handleInputChange = e => {

    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (params.id) {
      dispatch(updateTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
    }

    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks])

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder="title" onChange={handleInputChange} value={task.title}/>
      <textarea name="description" placeholder="description" onChange={handleInputChange} value={task.description}></textarea>
      <button className='btn btn-primary'>Save</button>
    </form>
  )
}

export default TaskForm