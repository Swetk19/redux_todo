import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Todo App
        </h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}