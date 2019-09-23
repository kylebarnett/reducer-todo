import React, { useState, useReducer } from 'react';
import { newTodos, initialState } from '../reducers/TodoReducer';
import Todo from './Todo';

export default function TodoForm() {
  const [input, setInput] = useState("")
  const [state, dispatch] = useReducer(newTodos, initialState)
  console.log(state)

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <div>
      <div>
        {state.todos.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({ type: "ADD_TODO", payload: input })
        setInput("")
      }}>
        <input
          type='text'
          value={input}
          onChange={handleChange}
        />
      </form>
      <button>Add Todo</button>
      <button onClick={() => dispatch({ type: "DELETE_TODO" })}>Remove Todo</button>
    </div>
  )
}