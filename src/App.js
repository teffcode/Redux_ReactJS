import React, { Component } from 'react';
import './App.css';

const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

class App extends Component {

  state = counter(undefined, {});

  dispatch(action) {
    this.setState(prevState => counter(prevState, action));
  }

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div >
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default App;
