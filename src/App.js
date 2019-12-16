import React, { Component } from 'react';
import Highscore from './Highscore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      overTen: false
    }
  }

  handleUpClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDownClick = () => {
    this.setState({ count: this.state.count - 1 })
  }

  onReset = () => {
    this.setState({
      count: 0,
      overTen: false
    })
  }

  componentDidUpdate(props, state) {
    if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
      this.setState({ overTen: true })
      console.log('updating count over ten')
    }

  }

  render() {
    const { count, overTen } = this.state;
    const { handleUpClick, handleDownClick, onReset } = this;
    return (
      <div>
        <h1>Button clicked {count} times</h1>
        <Highscore
          overTen={overTen}
          onReset={onReset} />
        <button onClick={() => handleUpClick()}>Click Up</button>
        <button onClick={() => handleDownClick()}>Click Down</button>
      </div>
    )
  }
}

export default App;