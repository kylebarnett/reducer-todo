import React, { useReducer } from 'react';
import { newTodos, initialState } from '../reducers/TodoReducer';

export default function Todo(props) {
  const [state, dispatch] = useReducer(newTodos, initialState)

  const handleChange = todo => {
    dispatch({ type: 'TOGGLE-TODO', id: todo.id })
  }
  return (
    <div className={`todo${props.todo.completed ? " complete" : ""}`} onClick={() => {
      props.toggleTodo(props.todo)
    }}>
      {props.todo.item}
    </div>
  )
}