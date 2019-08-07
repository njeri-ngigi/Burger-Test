import React, { Component } from 'react';

import Filler from '../components/filler';

import '../../index.css';

export default class Burger extends Component {
  constructor(props) {
    super(props);
    this.fillerColors = {
      meat: 'brown',
      cheese: 'red',
      lettuce: 'green',
    }

    this.state = {
      meat: 1,
      cheese: 0,
      lettuce: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  fillerItems() {
    const colorArray = Object.entries(this.state);
    // let v = [['meat', 1], ['cheese', 4]]
    return [colorArray.map(([key, value]) => Array(value).fill(<Filler color={this.fillerColors[key]}/>))]
  }

  handleClick (event) {
    const { name } = event.target;
    const newValue = this.state[name] + 1;
    this.setState({ [name]: newValue })
  }
  addButtons() {
    return [['meat', 'cheese', 'lettuce'].map((item) => <button name={item} onClick={this.handleClick}>{item}</button>)]
  }

  render() {
    return (
      <div className="burger">
        <div className="buns">Top Bun</div>
        {this.fillerItems()}
        <div className="buns">Bottom Bun</div>
        {this.addButtons()}
      </div>
    )
  }

}
