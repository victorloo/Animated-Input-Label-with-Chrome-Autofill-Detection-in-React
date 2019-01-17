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
    const { value, hide } = this.state;
    const hideLabel = hide || value;

    return (
      <div className="App">
        <label className="input_container">
          <span className={`label ${hideLabel ? 'hide' : ''}`}>Email</span>
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
