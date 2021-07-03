import {Grid,Typography,Button,Paper,Switch} from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import {ThemeProvider,createMuiTheme} from "@material-ui/core/styles"
import {useState} from "react";

const DarkMode = ()=>{
    const [darkMode,setDarkMode] = useState(false);
    const theme = createMuiTheme({
        palette:{
            type:darkMode?"dark":"light",
            primary:darkMode?green:purple
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{height:"100vh"}}>
                <Grid
                    container
                    direction="column"
                >   
                    <Typography variant="h1">This is My app!</Typography>
                    <Button variant="contained" color="primary">
                        This is a button
                    </Button>
                    <Button variant="contained" color="secondary">
                        This is another button
                    </Button>
                    <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default DarkMode;