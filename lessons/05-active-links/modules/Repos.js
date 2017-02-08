import React from 'react'

export default React.createClass({
  render() {
    return <div>
      <h2>Username: {this.props.param.username}</h2>
      <h2>Project: {this.props.param.project}</h2>
    </div>
  }
})
