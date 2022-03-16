import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'> 
      {this.props.title}
      <h1>
      <i className="fab fa-github" />
      </h1>
       </nav>
    )
  }
}

export default Navbar