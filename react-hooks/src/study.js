import React, { useContext } from "react";
import myContext from "./context/myContext";

function StudyHooks(){
  const { stateA, setStateA, stateB, setStateB } = useContext(myContext) 
  return(    
    <div>
      <h2>useContext</h2>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <div>
        <button
          type="button"
          onClick={() => setStateA('Melhor time do mundo')}
        >
          Flamengo
        </button>
        <button
          type="button"
          onClick={() => setStateB('Hexa 2022')}
        >
          Brasil
        </button>
      </div>
    </div>
  )
}

export default StudyHooks;