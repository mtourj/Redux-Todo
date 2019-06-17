// Import actions types here
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';

import uniqid from 'uniqid';

const initialState = {
  todos: [ {
    id: uniqid(),
    value: "Walk the dog.",
    completed: true
  } ]
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case TOGGLE_TODO:
      const newTodos = Array.from(state.todos);
      const index = newTodos.findIndex(el => el.id === action.payload);
      const targetTodo = newTodos[index];
      targetTodo.completed = !targetTodo.completed;
      newTodos[index] = targetTodo;
      return {
        todos: newTodos
      }
    default:
      return state;
  }
}