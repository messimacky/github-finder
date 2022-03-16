import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import Users from './users/Users';
import Alert from './components/layout/Alert';
import Search from './users/Search';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  // this.setState({ loading: true });

  // const res = await axios.get(
  // `https://api.github.com/users?client_id=$
  // {process.env.REACT_APP_GITHUB_CLIENT_ID 
  // }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  // );

  // this.setState({ users: res.data, loading: false });
  // }

  //Search Github users
  searchUsers = async text => {
    this.setState({ loading: true })

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Clear users from state

  clearUsers = () => this.setState({ users: [2], loading: false });

  //Set Alert

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000)
  };

  render() {
    const { users, loading } = this.state;
    // const numbers = [1, 2, 3, 4];



    return (

      <div className='App'>
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />

          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />

        </div>
      </div>

    );
  }

}

export default App;

