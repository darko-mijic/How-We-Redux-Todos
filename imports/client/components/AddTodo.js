import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {

  createTodo(event) {
    event.preventDefault();
    const todoText = this.refs.todoText.value.trim();
    if(todoText){
      debugger;
      this.props.onAddTodo(todoText);
    }
  }

  render() {
    return (
      <form onSubmit={this.createTodo.bind(this)}>
        <input ref='todoText'/>
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default AddTodo;