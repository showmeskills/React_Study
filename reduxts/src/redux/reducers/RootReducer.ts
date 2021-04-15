import {combineReducers} from 'redux';
import pokemoneReducer from './PokemonReducer'
const RootReducer = combineReducers({
    pokemon:pokemoneReducer,
});

export default RootReducer;