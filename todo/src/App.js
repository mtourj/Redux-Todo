import React from "react";
import "./App.css";

import { Todos, TodoForm } from "./components";

import { connect } from "react-redux";

import { toggleTodo, addTodo, deleteTodo } from "./actions";

import { Route, NavLink } from "react-router-dom";

const App = propsFromState => {
  const showContextMenu = e => {

  }

  return (
    <div className="App">
      <div className="App-header">
        <NavLink exact to='/' activeClassName="blue">Todos</NavLink>
        <NavLink to='/add' activeClassName='blue'>New Todo</NavLink>
      </div>
      <Route
        exact
        path="/"
        render={props => (
          <Todos
            {...props}
            deleteTodo={propsFromState.deleteTodo}
            todos={propsFromState.todos}
            toggleTodo={propsFromState.toggleTodo}
          />
        )}
      />
      <Route path="/add" render={props => <TodoForm {...props} addTodo={propsFromState.addTodo} />} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo, addTodo, deleteTodo }
)(App);
