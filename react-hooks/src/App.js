import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>Introdução ao useState</h2>
      <h3>Contador: { counter }</h3>
      <button 
        type="button"
        onClick={() => setCounter(counter +1 )}  
      >
        Adicionar
      </button>
      <button
        type="button"
        onClick={() => setCounter(counter -1)}  
      >
        Diminuir
      </button>
    </div>
  );
}

export default App;
