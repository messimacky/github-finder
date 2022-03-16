import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends React.Component {
  
render(){
  const numbers=[1, 2, 3, 4];
 return (
    <div className='App'>
   <Navbar title ={numbers}/>
  
    </div>
  );
}


}
  
export default App;
