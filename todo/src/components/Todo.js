import React, { useReducer } from 'react';
import { newTodos, initialState } from '../reducers/TodoReducer';

export default function Todo(props) {
  const [state, dispatch] = useReducer(newTodos, initialState)

  const handleChange = todo => {
    dispatch({ type: 'TOGGLE-TODO', id: todo.id })
  }
  return (
    <div>
      {props.todo.item}
      <input
        type="checkbox"
      />
    </div>
  )
}