import React from 'react';
import AddTodo from '../../../imports/client/containers/add-todo';
import TodoList from '../../../imports/client/components/TodoList';
import Footer from '../../../imports/client/components/Footer';

export default function TodoApp() {
  return (
    <div className="todo-container">
      <AddTodo/>
      <TodoList/>
      <Footer/>
    </div>
  );
}
