import { ADD_TODO, DELETE_TODO } from '../actions';

const initialState = {
  todosByIds: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        todosByIds: [
          ...state.todosByIds,
          {
            content: content,
            id: id,
          },
        ],
      };
    }
    case DELETE_TODO: {
      return {
        todosByIds: state.todosByIds.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
