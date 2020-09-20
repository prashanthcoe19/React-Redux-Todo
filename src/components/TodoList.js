import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => (
  <div className='todo-list'>
    <ul>
      {props.todos && props.todos.length
        ? props.todos.map((todo, id) => {
            return (
              <Todo
                key={todo.id}
                todo={todo.content}
                delete={props.delete}
                id={todo.id}
              />
            );
          })
        : 'No todos'}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  const { todosByIds } = state || {};
  const todos = todosByIds;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
