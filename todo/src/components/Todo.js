import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class Todo extends React.Component {
  state = {
    newTodo: ""
  };
  handleChange = e => {
    e.preventDefault();
    // console.log(e);
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <h2>{todo}</h2>
        ))}

        <div>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder="...todo"
          />
        </div>
        <button onClick={this.handleSubmit}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //   console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(Todo);
