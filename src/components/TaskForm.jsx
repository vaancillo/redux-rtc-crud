import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'

function TaskForm () {
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
      setTask(tasks.find((task) => task.id === params.id))
    }
  }, [params, tasks])

  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
      <label className='block text-sm font-bold'>Task:</label>
      <input
        type='text'
        name='title'
        onChange={handleInputChange}
        value={task.title}
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
        placeholder='Write a title'
        autoFocus
      />
      <label>
        Description:
        <textarea
          type='text'
          name='description'
          onChange={handleInputChange}
          value={task.description}
          className='w-full p-2 rounded-md bg-zinc-600 mb-2'
          placeholder='Write a description'
        />
      </label>
      <button type='submit' className='bg-indigo-600 px-2 py-1'>Submit</button>
    </form>
  )
}

export default TaskForm
