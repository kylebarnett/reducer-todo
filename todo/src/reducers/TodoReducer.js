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
      // return state.map(todo => {
      //   if (todo.id === action.id) {
      //     return { ...todo, completed: true }
      //   } else {
      //     return todo
      //   }
      // })
      // return {
      //   ...state,
      //   completed: !state.completed
      // }
    case "DELETE_TODO":
      // return [
      //   ...state,
      //   {
      //     item: "",
      //     completed: !state.completed
      //   }
      // ]
    default:
      return state
  }
}