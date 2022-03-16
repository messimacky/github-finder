import React, { Component, Fragment } from 'react';
import './App.css';

class App extends React.Component {

render(){
  const name = "Lovfffve";
if(name.length>=5)
{
return "Great namae";
}else{
  return "change name";
}
  return (
    <div className='App'>
    <h1> Hello {name}</h1>
    </div>
  );
}


}
  
export default App;
