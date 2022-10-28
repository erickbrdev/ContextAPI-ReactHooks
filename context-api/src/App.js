import React from 'react';
import './App.css';
import Component1 from './components/component1';

class App extends React.Component {
  render(){
    return(
      <div>
        <h1>App</h1>
        <Component1 />
      </div>
    )
  }
}

export default App;
