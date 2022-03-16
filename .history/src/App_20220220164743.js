import React, { Component, Fragment } from 'react';
import './App.css';

class App extends React.Component {

render(){
  const name = "Love";
  return (
    <div className='App'>
    <h1> Hello {name}</h1>
    <h2>Good bye</h2>
    </div>
  );
}


}
  
export default App;
