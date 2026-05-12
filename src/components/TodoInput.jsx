import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'

export default function TodoInput() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (!text.trim()) return
    dispatch(addTodo(text.trim()))
    setText('')
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        placeholder="Enter your todos..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        onClick={handleAdd}
        className="bg-teal-400 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition-colors"
      >
        Add
      </button>
    </div>
  )
}