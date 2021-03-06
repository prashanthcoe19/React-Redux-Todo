import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

class AddTodo extends Component {
  state = {
    input: ' ',
  };

  updateInput = (input) => {
    this.setState({ input });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: ' ' });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            paceholder='Add Todo'
            value={this.state.input}
            onChange={(e) => this.updateInput(e.target.value)}
          />
        </form>
        <button class='add-button'>Add Todo</button>
      </React.Fragment>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
