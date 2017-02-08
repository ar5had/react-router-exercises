import React from 'react'

export default React.createClass({
  render() {
    return <div>
      <h2>Username: {this.props.params.username}</h2>
      <h2>Project: {this.props.params.project}</h2>
    </div>
  }
})
