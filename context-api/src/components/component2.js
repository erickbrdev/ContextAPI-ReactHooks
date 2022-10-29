import React from 'react';
import Component3 from './component3';
import { myContext } from '../context/MyContext';

class Component2 extends React.Component {
  render(){
    const { handleClickDeposit } = this.context    
    return(
      <div>
        <h1>Componente 2 recebendo o estado e podendo alterar depositando + 100r$</h1>        
        <button
          type='button'
          onClick={() => handleClickDeposit()}
        >Depositar</button>
        <Component3 />
      </div>
    )
  }
}

Component2.contextType = myContext;
export default Component2;
