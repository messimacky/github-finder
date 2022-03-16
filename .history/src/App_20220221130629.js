import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends React.Component {
  static defaultProps={
    title: "Github fidddnder",
    icon:"fab fa-github"
  }

render(){
 return (
    <div className='App'>
   <Navbar title="Github finder"  icon ="fab fa-github" />
  
    </div>
  );
}


}
  
export default App;
