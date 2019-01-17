import React, { Component, createRef } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: '',
  };

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <label className="input_container">
          <span className="label">Email</span>
          <input
            className="input"
            value={value}
            name="email"
            onChange={event => this.setState({ value: event.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default App;
