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
        {state.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <form>
        <input
          type='text'
          value={input}
          onChange={handleChange}
        />
      </form>
      <button onClick={() => dispatch({ type: "ADD_TODO", payload: input })}>Add Todo</button>
    </div>
  )
}