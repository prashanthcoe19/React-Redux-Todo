import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>React Redux Todo</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
