import React, { Component } from 'react'

export class Navbar extends Component {
    static defaultProps={
        title: "Github fidddnder",
        icon:"fab fa-github"
      }
    
  render() {
    return (
      <nav className='navbar bg-primary'> 
      <h1>
      <i className/>
      </h1>
       </nav>
    )
  }
}

export default Navbar