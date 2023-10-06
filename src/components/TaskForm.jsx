import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch()

  const handleInputChange = e => {

    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addTask({
      ...task,
      id: uuid()
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder="title" onChange={handleInputChange}/>
      <textarea name="description" placeholder="description" onChange={handleInputChange}></textarea>
      <button className='btn btn-primary'>Save</button>
    </form>
  )
}

export default TaskForm