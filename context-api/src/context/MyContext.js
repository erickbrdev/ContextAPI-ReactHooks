import React from 'react'
import { createContext } from 'react'

export const myContext = createContext({})

class Provider extends React.Component {

  state = {
    money: 1500
  }

  handleClick = () => {
    const { money } = this.state
    this.setState((prevState) => ({
      money: prevState.money - 100
    }))

    if(money <= 0) {
      this.setState({
        money: 0
      }) 
      if(money <= 0) {
        return alert('Saldo indisponível')
      }       
    } 
  }
    
  handleClickDeposit = () => {
    this.setState((prevState) => ({
      money: prevState.money + 100
    }))
  }

  render(){
    const contextValue = {
      ...this.state,
      handleClick: this.handleClick,
      handleClickDeposit :this.handleClickDeposit
    }
    return(
      <myContext.Provider value={ contextValue }>
        {this.props.children}
      </myContext.Provider>
    )
  }
}

export default Provider;
