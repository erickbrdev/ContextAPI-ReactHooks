import React, { useEffect } from "react";

export default function Squirtle(){

  useEffect(() => {
    return () =>  console.log('Squirtle') 
  },[])

  return(
    <div>
      <img
        src="https://miro.medium.com/max/1400/0*FZOouzTOzPLTXpqC.jpg"
        alt="Pokemon Squirtle"
        width={250}
        className='best-pokemon'
      />
    </div>
  )
}