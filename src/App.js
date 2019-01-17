import React, { Component, createRef } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: '',
    hide: false,
  };

  handleAutoFill = event => {
    this.setState({
      hide: event.animationName === 'onAutoFillStart',
    });
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
            onAnimationStart={this.handleAutoFill}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default App;
