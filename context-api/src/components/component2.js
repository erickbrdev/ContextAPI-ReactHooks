import React from 'react';
import Component3 from './component3';


class Component2 extends React.Component {
  render(){
    return(
      <div>
        <h1>Component2</h1>
        <Component3 />
      </div>
    )
  }
}

export default Component2;
