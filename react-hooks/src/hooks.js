import React, { useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2> useState</h2>
      <p>Contador: { counter }</p>
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
