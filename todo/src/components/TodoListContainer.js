import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };

export default connect(mapStateToProps, {
    
  })(TodoList);
  