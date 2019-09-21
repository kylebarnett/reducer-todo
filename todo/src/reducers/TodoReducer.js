export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
},
{
  item: 'Learn React',
  completed: false,
  id: 22
}
]

export const newTodos = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }]
    default:
      return state
  }
}