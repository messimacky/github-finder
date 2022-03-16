import React, { Component, Fragment } from 'react';
import './App.css';

class App extends React.Component {

render(){
  const name = "Love";
  const foo= ()=>"Bar";
  return (
    <div className='App'>
    <h1> Hello {foo()}</h1>
    </div>
  );
}


}
  
export default App;
