import { Typography } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import { makeStyles, Theme, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//customized default colors
const theme = createMuiTheme({
    palette: {
        primary: purple,
    },
    typography:{
        fontFamily:"Arial",
        "h1":{
            fontSize:"12rem",
        }
    }
})


//re-customized gutterButtom and parapgraph attributes
const useStyles = makeStyles((theme: Theme) => ({
    gutterBottom: {
        marginButtom: "0.6rem",
    },
}))


const Typo = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Typography
                align="center"
                color="primary"
                variant="h1"
                //gutterBottom={true} //底部有margin 尺寸大一些
                // noWrap 变...
                //paragraph={true} 底部有margin 尺寸小一些
                variantMapping={{
                    h1: "div"
                }}
                className={classes.gutterBottom}
            >
                Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!
            </Typography>
        </ThemeProvider>
    )
}

export default Typo;