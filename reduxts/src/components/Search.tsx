import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { RootStore } from '../redux/Store';
import {GetPokemon} from '../redux/actions/PokemonActions'
const App:React.FC = ()=>{
    const dispatch = useDispatch();
    const [pokemonName,setPokemonName] = useState("")
    const pokemonState = useSelector((state:RootStore)=>state.pokemon)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>setPokemonName(event.target.value)
    const handleSubmit = ()=>dispatch(GetPokemon(pokemonName));
    console.log(pokemonState)
    return (
        <>
            <h1>Redux TS within a Demo </h1> 
            <div>
                <input type="text" onChange={handleChange}/>
                <button onClick={handleSubmit}>Search</button>
                <div>
                    {
                        pokemonState.pokemon&&
                        <div>
                            <img src={pokemonState.pokemon.sprites.front_default} alt=""/>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default App;