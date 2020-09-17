import { ADD_TODO } from '../actions';

const initialState = {
  ids: [],
  todosByIds: {},
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        ids: [...state.ids, id],
        todosByIds: { ...state.todosByIds, [id]: { content } },
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
