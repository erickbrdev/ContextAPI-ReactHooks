import React from 'react';
import Provider from './context/MyContext';
import './App.css';
import Component1 from './components/component1';

class App extends React.Component {
  render(){
    return(
      <div>
        <Provider>
          <h1>App</h1>
          <Component1 />
        </Provider>       
      </div>
    )
  }
}

export default App;
