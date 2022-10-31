import React, { useState } from "react";
import myContext from "./myContext";

function Provider({ children }) {
  const [stateA, setStateA] = useState('Flamengo')
  const [stateB, setStateB] = useState('Brasil')

  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <myContext.Provider value= {contextValue}>
      {children}
    </myContext.Provider>
  )
}

export default Provider;
