import React, { useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>Introdução ao useState</h2>
      <h3>Contador: { counter }</h3>
      <button 
        type="button"
        onClick={() => setCounter(prevState => prevState +1 )}  
      >
        + 1
      </button>
      <button
        type="button"
        onClick={() => setCounter(counter -1)}  
      >
        - 1
      </button>
    </div>
  );
}

export default Hooks;
