import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        // addTask: (state, action) => {
        //     state.push(action.payload)
        // },
        // removeTask: (state, action) => {
        //     return state.filter(task => task.id !== action.payload.id)
        // },
        // updateTask: (state, action) => {
        //     return state.map(task => {
        //         if (task.id === action.payload.id) {
        //             return {
        //                 ...task,
        //                 ...action.payload
        //             }
        //         }
        //         return task
        //     })
        // }
    }
})

export default taskSlice.reducer