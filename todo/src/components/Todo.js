import React, { useReducer } from 'react';
import { newTodos, initialState } from '../reducers/TodoReducer';

export default function Todo(props) {
  const [state, dispatch] = useReducer(newTodos, initialState)
  return (
    <div>
      {props.todo.item}
    </div>
  )
}