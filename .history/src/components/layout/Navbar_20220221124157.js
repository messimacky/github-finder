import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'> 
      <h1>
      <i className="fab fa-github" />
      </h1>
      {this.props.title}
       </nav>
    )
  }
}

export default Navbar