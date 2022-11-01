import React, { useEffect, useState } from 'react';
import useImagPoke from './hooks/useImgPoke';
import Squirtle from './components/BestPokemon';
import './App.css';

function App() { 

  const ENDPOINT = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  const [pokemons, setPokemons] = useState([])
  const [bestPokemon, setBestPokemon] = useState(false)

  useEffect(() => {
    const fetchPokeApi = async () => {      
      const {results} = await fetch(ENDPOINT).then((result) => result.json())
      setPokemons(results)
    };
    fetchPokeApi();
  }, [])

  const [setPokeUrl, pokeImg] = useImagPoke()

  return(
    <div className='container-pokemons'>
      <img 
        width={200}
        alt='Pokemon'
        src={pokeImg}
      />
      <br/>
      <button
        type='button'
        onClick={ () => setBestPokemon(!bestPokemon) }
        className='button-poke'
      >
        Qual é o melhor pokémon?
      </button>
      { bestPokemon && <Squirtle /> }
      <ul className='poke-list'>
        {
          pokemons.map((item, index) => {
            return (
              <li 
                key={index}
                onClick={() => setPokeUrl(item.url)}                
              >
                {item.name}
              </li>
            )
          })
        }
      </ul>          
    </div>
  )  
}

export default App;
