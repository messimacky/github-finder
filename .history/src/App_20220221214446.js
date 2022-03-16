import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import Users from './users/Users';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    axios.get('https://api.github.com/users');
  }

  render() {
    const numbers = [1, 2, 3, 4];
    return (
      <div className='App'>
        <Navbar />
        <div className="container"> <Users /></div>
      </div>
    );
  }


}

export default App;
