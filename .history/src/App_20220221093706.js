import React, { Component, Fragment } from 'react';
import './App.css';

class App extends React.Component {

render(){
  const name = "John";
  const loading=true;
  if(loading)
  {
    return <h4> Loading.....</h4>
  }
 return (
    <div className='App'>
    <h1> Hello {name}</h1>
    </div>
  );
}


}
  
export default App;
