import React, { Component, memo } from 'react'

class ChildComponent extends Component {
  render() {
    console.log("sup");
    return (
      <div>ChildComponent</div>
    )
  }
}
export default memo(ChildComponent)