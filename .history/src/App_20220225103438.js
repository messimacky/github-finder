import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import Users from './users/Users';
import Search from './users/Search';
import './App.css';


class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID
  //   }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  //Search Github users
  searchUsers = async text => {
    this.setState({ loading: true })

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

  };

  //Clear users from state

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const numbers = [1, 2, 3, 4];
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }


}

export default App;
