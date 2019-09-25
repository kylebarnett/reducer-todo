export const initialState = {
  todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn React',
    completed: false,
    id: 22
  }]
}

export const newTodos = (state, action) => {
  let newTodo = {
    item: action.payload,
    completed: false,
    id: Date.now()
  }
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo
          }
        })
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
    default:
      return state
  }
}