import React, { Component } from 'react'
import { randomColorGenerator} from './randomColorGenerator'

class Child extends Component {
  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: "#FFF"}}
        onClick={this.props.handleColorChange}
      ></div>
    )
  }
}

export default Child
