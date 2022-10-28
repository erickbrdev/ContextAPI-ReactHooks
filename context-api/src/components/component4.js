import React from 'react';
import { myContext } from '../context/MyContext'

class Component4 extends React.Component { 

  render(){        
    return(
      <div>
        <h1>Component4</h1>           
      </div>
    )
  }
}

Component4.contextType = myContext
export default Component4;
