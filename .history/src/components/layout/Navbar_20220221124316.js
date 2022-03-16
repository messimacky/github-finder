import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'> 
      <h1>
      <i className="fab fa-github" />
      {this.props.title}
      {this.props.children}
      </h1>
       </nav>
    )
  }
}

export default Navbar