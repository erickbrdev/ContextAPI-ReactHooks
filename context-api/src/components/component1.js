import React from 'react';
import Component2 from './component2';
import { myContext } from '../context/MyContext';

class Component1 extends React.Component {
  render(){  
    return(
      <div>      
        <h1>Component1</h1>
        <Component2 />
      </div>
    )
  }
}

Component1.contextType = myContext
export default Component1;
