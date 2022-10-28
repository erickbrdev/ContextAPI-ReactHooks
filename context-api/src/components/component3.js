import React from 'react';
import Component4 from './component4';


class Component3 extends React.Component {
  render(){
    return(
      <div>
        <h1>Component3</h1>
        <Component4 />
      </div>
    )
  }
}

export default Component3;
