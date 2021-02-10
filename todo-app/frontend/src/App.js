import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'

const App = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(async () => {
    const res = await getTodos()
    setTodos(res)
  }, [])

  const addTodo = async () => {
    console.log('adding todo')
    await axios.post('api/todos', {
      todo: todo
    })
    setTodos(await getTodos())
  }

  const getTodos = async () => {
    const response = await axios.get('api/todos')
    console.log("Got response", response)
    return response.data.todos
  }

  return (
    <div>
      <img src="api/images" style={{ width: '500px', height: '500px' }} />
      <br />
      <input onChange={e => setTodo(e.target.value)} type="text" maxLength="140" />
      <button onClick={e => addTodo()}>Add TODO</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;