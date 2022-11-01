import React, { useEffect, useState } from "react";

export default function useImagPoke(){
  
  const [ pokeUrl, setPokeUrl ] = useState('https://pokeapi.co/api/v2/pokemon/1/');
  const [ pokeImg, setPokeImg ] = useState('');

  useEffect(() => {
    const fetchImgPoke = async () => {
      const {sprites: {front_default : imagePoke}} = await fetch(pokeUrl).then((result) => result.json())
      setPokeImg(imagePoke);
    };
    fetchImgPoke();
  }, [pokeUrl])  
  return [setPokeUrl, pokeImg]  
}