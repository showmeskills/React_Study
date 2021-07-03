import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "./mockData";
const useStyles = makeStyles((theme) => ({
    pokadexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    },
    cardMedia: {
        margin: "auto",
    },
    cardContent: {
        textAlign: "center"
    }
}))


const Pokemon = () => {
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState(data);
    const {push} = useHistory();
    const toFirstCharUpperCase = (name:string)=>`${name.slice(0,1).toLocaleUpperCase()}${name.slice(1,name.length)}`;
    const getPokemanCard = (pokemon: any) => {
        const { id, name } = pokemon;
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
            <Grid
                item
                xs={12}
                sm={4}
                key={pokemon.id}
            >
                <Card onClick={()=>push(`/${id}`)}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={sprite}
                        style={{ width: "130px", height: "130px" }}
                    >
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            {`${id}.${toFirstCharUpperCase(name)}`}
                        </Typography>
                    </CardContent>
            </Card>
            </Grid >
        )
    }
return (
    <>
        <AppBar position="static">
            <Toolbar>

            </Toolbar>
        </AppBar>
        {
            pokemonData ? (
                <Grid
                    className={classes.pokadexContainer}
                    container
                    spacing={3}
                >
                    {
                        Object.values(pokemonData).map(pokemon => getPokemanCard(pokemon))
                    }
                </Grid>
            )
                : (
                    <CircularProgress />
                )
        }
    </>
)
}

export default Pokemon;