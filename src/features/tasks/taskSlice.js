import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'Learn React', description: 'task 1', completed: true },
    { id: '2', title: 'Learn Redux', description: 'task 2', completed: false },
    { id: '3', title: 'Learn Redux-ToolKit', description: 'task 3', completed: false },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        },
        updateTask: (state, action) => {
            const { id, title, description } = action.payload
            const taskFound = state.find(task => task.id === id)
            if (taskFound) {
                taskFound.title = title
                taskFound.description = description
            }
        }
    }
})

export const { addTask, deleteTask, updateTask } = taskSlice.actions

export default taskSlice.reducer