import { useState } from 'react'

import './App.css'

interface Todo {
  id: number,
  title: string,
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(newTodo: string) {
    const id = todos.length + 1
    setTodos([...todos, { id, title: newTodo}])
  }

  return (
    <>
      <header>
        <input
          className="border-2 rounded-md mr-6 p-0.5"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="border-1 rounded-md p-1" onClick={() => handleNewTodo(newTodo)}>Add</button>
      </header>
      <main>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </main>

    </>
  )
}

export default App
