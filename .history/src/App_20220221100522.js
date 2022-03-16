import React, { Component, Fragment } from 'react';
import './App.css';

class App extends React.Component {

render(){
  const name = null;
  const loading=false;
  const showName=true;

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
