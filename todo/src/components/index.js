import React from "react";

import uniqid from 'uniqid';

export const Todo = props => (
  <div
    onClick={() => props.toggle(props.id)}
    className={`todo${props.complete ? " complete" : ""}`}
  >
    <p>{props.value}</p>
    <div className={props.complete ? "far fa-check-square" : "far fa-square"} />
  </div>
);

export const Todos = props =>
  props.todos.map((todo, index) => (
    <Todo
      toggle={props.toggleTodo}
      key={uniqid()}
      id={todo.id}
      value={todo.value}
      complete={todo.completed}
    />
  ));

export class TodoForm extends React.Component {
  state = {
    todo: ""
  };

  handleChange = async e => {
    await this.setState({todo: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.todo);

    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
        <div className="form-field">
          <label>Create New Todo</label>
          <input value={this.state.todo} onChange={this.handleChange} />
        </div>
        <button action='submit'>Create Todo</button>
      </form>
    );
  }
}
