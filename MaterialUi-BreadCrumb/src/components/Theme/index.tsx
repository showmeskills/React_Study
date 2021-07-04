import {Button,Typography} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {makeStyles,ThemeProvider,createMuiTheme,Theme,useTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        secondary:green
    }
})

const CustomizedThemeDemo = ()=>{

    return (
        <ThemeProvider theme={theme}>
            <Typography color="primary" variant='h1'>
                there is demo customized theme
            </Typography>
            <Typography color="secondary" variant='h1'>
                there is demo customized theme
            </Typography>
        </ThemeProvider>
    )
}




const useStyles =makeStyles((theme:Theme)=>({
    root:{
        height:"100vh",
        background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    },
    buttonStyle:{
        [theme.breakpoints.between('xs','sm')]:{
            backgroundColor:'purple'
        }
    }
}))


const ThemeDemo = ()=>{
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    return(
        <div className={classes.root}>
            <Button className={classes.buttonStyle} color="primary" variant="contained">
                This is a button
            </Button>
            <Typography variant="h1">
                this is my typography
            </Typography>
            <CustomizedThemeDemo/>
        </div>
    )
}

export default ThemeDemo