import React, { Component, createRef } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: '',
    hide: false,
    focus: false,
  };

  handleAutoFill = event => {
    this.setState({
      hide: event.animationName === 'onAutoFillStart',
    });
  };

  render() {
    const { value, hide, focus } = this.state;
    const hideLabel = hide || focus || value;

    return (
      <div className="App">
        <label className="input_container">
          <span className={`label ${hideLabel ? 'hide' : ''}`}>Email</span>
          <input
            className="input"
            value={value}
            name="email"
            onAnimationStart={this.handleAutoFill}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default App;
