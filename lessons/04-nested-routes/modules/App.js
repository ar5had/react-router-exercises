import React from 'react'
import { Navlink } from './Navlink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Navlink to="/about">About</Navlink></li>
          <li><Navlink to="/repos">Repos</Navlink></li>
        </ul>
         {this.props.children}
      </div>
    )
  }
})
