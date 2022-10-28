import React from 'react'
import { createContext } from 'react'

export const myContext = createContext({})

class Provider extends React.Component {

  state = {
    money: 1500
  }

  handleClick = () => {
    this.setState((prevState) => ({
      money: prevState.money - 100
    }))
  }

  render(){
    const contextValue = {
      ...this.state,
      handleClick: this.handleClick
    }
    return(
      <myContext.Provider value={ contextValue }>
        {this.props.children}
      </myContext.Provider>
    )
  }
}

export default Provider;
