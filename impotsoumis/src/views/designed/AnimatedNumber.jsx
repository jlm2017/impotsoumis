import React, { Component } from 'react';

class AnimatedNumber extends Component {
  static defaultProps = {
    format: (val) => val
  }

  constructor(props) {
    super(props);
    this.state= {
      number: this.props.value
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      cancelAnimationFrame(this.state.loop);
      this.setState({
        loop: requestAnimationFrame(this.animationLoop.bind(this))
      });
    }
  }

  animationLoop() {
    if (this.state.number === this.props.value) {
      cancelAnimationFrame(this.state.loop);
    } else {
      this.setState({
        number: this.getNextState(),
        loop: requestAnimationFrame(this.animationLoop.bind(this))
      });
    }
  }

  getNextState() {
    let nextState;
    for(var i = 100000000; i >= 1; i /= 10) {
      if (this.props.value >= this.state.number + i) {
        nextState = this.state.number + i;
        break;
      } else if (this.props.value <= this.state.number - i) {
        nextState = this.state.number - i;
        break;
      }
    }
    return nextState;
  }

  render() {
    return (
      <span>{this.props.format(this.state.number)}</span>
    );
  }
}

export default AnimatedNumber;
