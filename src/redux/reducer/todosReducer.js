import { ADD_TODO } from '../actions';

const initialState = {
  todos: ['play Football', 'Learn Code'],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.content],
      };
    default:
      return state;
  }
};

export default todosReducer;
