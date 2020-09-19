import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const Todo = ({ todo, id, dispatch }) => {
  return (
    <li style={{ listStyle: 'none' }}>
      {todo}{' '}
      <span>
        <button onClick={() => dispatch(deleteTodo(id))}>delete Todo</button>
      </span>
    </li>
  );
};

export default connect()(Todo);
