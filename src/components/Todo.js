import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const Todo = ({ todo, id, dispatch }) => {
  return (
    <li style={{ listStyle: 'none' }}>
      {todo}{' '}
      <button class='delete-button' onClick={() => dispatch(deleteTodo(id))}>
        <i class='fa fa-close'></i>
      </button>
    </li>
  );
};

export default connect()(Todo);
