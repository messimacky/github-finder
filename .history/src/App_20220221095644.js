import React, { Component, Fragment } from 'react';
import './App.css';

class App extends React.Component {

render(){
  const name = "John";
  const loading=true;
  const showName=false;

 return (
    <div className='App'>
    {loading ? (
      <h4> Loading...</h4> 
 ) : (
      <h1> Hello {showName && name}</h1>
 )}

  
    </div>
  );
}


}
  
export default App;
