import { useState } from 'react'

import './App.css'
import * as React from "react";

interface Todo {
  id: number,
  title: string,
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  // todo validace
  function handleNewTodo(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const id = todos.length + 1
    setTodos([...todos, { id, title: newTodo}])
    setNewTodo('')
  }

  return (
    <>
      <header>
        <form onSubmit={handleNewTodo}>
          {/*// todo input komponenta*/}
          <label>Todo name</label>
          <input
            className="border-2 rounded-md mr-6 p-0.5"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          {/*// todo button komponenta s viditelnym disabled*/}
          <button type="submit" className="border-1 rounded-md p-1">Add</button>
        </form>

      </header>
      <main className="border-2 rounded-md p-6 border-red-300">
        {/*todo todos komponenta*/}
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
