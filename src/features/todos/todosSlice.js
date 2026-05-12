import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },

    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload)
    },

    editTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload.id)
      if (todo) todo.text = action.payload.text
    },

    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
  },
})

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer