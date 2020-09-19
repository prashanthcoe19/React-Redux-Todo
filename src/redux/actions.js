import uuid from 'react-uuid';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      content,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
