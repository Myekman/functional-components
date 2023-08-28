import React, { Component } from 'react'

export class EventClass extends Component {
  clickHandeler() {
    console.log("is clicked");
}
  render() {
    return (
      <div>
        <button onClick = {this.clickHandeler}>click me - class component</button>
      </div>
    )
  }
}

export default EventClass