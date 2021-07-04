import { useRouteMatch } from "react-router";
import { useState } from "react";
import { Link, Typography } from "@material-ui/core";


import { data } from './mockData';


const Pokemon = () => {
    const { params } = useRouteMatch<any>();
    const { id } = params;
    const [pokemon, setPokemon] = useState<any>(data);
    const one = pokemon[id]

    const generatePokemonJSX = () => {
        const { name, id, species, height, weight, types,sprites } = one;
        const fullImagUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const toFirstUpperCase = (name: string) => name.charAt(0).toLocaleUpperCase();
        return (
            <>
                <Typography variant="h1">
                    {`${id}.${toFirstUpperCase(name)}`}
                    <img src={fullImagUrl} style={{ width: "300px", height: "300px" }} alt="" />
                </Typography>
                <Typography variant="h3">Pokemon Info</Typography>
                <Typography>
                    <Link href={species.url}>{species.name}</Link>
                </Typography>
                <Typography>Height: {height}</Typography>
                <Typography>Weight: {weight}</Typography>
                {
                    types.map((typeInfo:any)=>{
                        const {type} = typeInfo;
                        const {name} = type;
                        return <Typography key={name}>{`${name}`}</Typography>
                    })
                }
            </>
        )
    }
    return (
        <div>
            {generatePokemonJSX()}
        </div>
    )
}

export default Pokemon;