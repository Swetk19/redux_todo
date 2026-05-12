import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '../features/todos/todosSlice'

export default function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, text: editText.trim() }))
    }
    setIsEditing(false)
  }

  return (
    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg mb-2 bg-white shadow-sm">
      
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="w-4 h-4 accent-blue-500 cursor-pointer"
      />

      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={e => setEditText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSave()}
            className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            onClick={handleSave}
            className="text-green-600 text-sm font-medium hover:text-green-700"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="text-gray-400 text-sm hover:text-gray-600"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
            {todo.text}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 text-sm hover:text-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-500 text-sm hover:text-red-600"
          >
            Delete
          </button>
        </>
      )}
    </div>
  )
}