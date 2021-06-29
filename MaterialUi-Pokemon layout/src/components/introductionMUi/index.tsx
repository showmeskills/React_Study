import { Button, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider,makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";


//customized primary and secondary color
const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: purple
    }
})

const useStyles = makeStyles({
    root:{
        fontStyle:"oblique",
        color:"red",
        width:"100%",
        height:"100px"
    }   
})


const Introduction = () => {
    const classes =useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Typography color="primary" variant="h3">Typography</Typography>
            <Button
                className={classes.root}
                variant="outlined"
                color="secondary"
            >this is the first button </Button>
        </ThemeProvider>
    )
}

export default Introduction;