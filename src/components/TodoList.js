import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.todos && props.todos.length
      ? props.todos.map((todo, index) => {
          return <Todo key={todo.id} todo={todo.content} />;
        })
      : 'No todos'}
  </ul>
);

const mapStateToProps = (state) => {
  const { ids, todosByIds } = state || {};
  const todos = state.ids.length
    ? ids.map((id) => (todosByIds ? { ...todosByIds[id], id } : null))
    : null;
  return { todos };
};
export default connect(mapStateToProps)(TodoList);
