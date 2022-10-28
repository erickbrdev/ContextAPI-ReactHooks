import React from 'react';
import { myContext } from '../context/MyContext';
class Component4 extends React.Component { 

  render(){   
    const { money, handleClick } = this.context    
    return(
      <div>        
        <h1>{`Acessando o context através do meu componente 4 
        Money:${money}`}</h1>          
        <button
          onClick={() => handleClick()}
        >Gastar money
        </button> 
      </div>
    )
  }
}

Component4.contextType = myContext
export default Component4;
