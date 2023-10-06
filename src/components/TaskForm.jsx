import { useState } from 'react'

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleInputChange = e => {

    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(task)
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