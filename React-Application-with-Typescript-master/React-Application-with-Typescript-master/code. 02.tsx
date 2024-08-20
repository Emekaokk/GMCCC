import React, { Component } from 'react';

// Define state interface to specify the type of state
interface CounterState {
  count: number; // Count state is of type number
}

// Class component Counter extending React.Component with generic type specified as CounterState
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0 // Initial state of count is 0
  };

  // Increment method to update count state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method to render the component
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
