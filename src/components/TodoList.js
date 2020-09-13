import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.todos.length
      ? props.todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })
      : 'No todos'}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
export default connect(mapStateToProps)(TodoList);
