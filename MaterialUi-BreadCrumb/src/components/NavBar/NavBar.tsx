
import { Theme, makeStyles } from "@material-ui/core/styles"
import {useTheme } from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core"
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "500px",
        height: "500px",
        [theme.breakpoints.between('lg', 'xl')]: {
            backgroundColor: "blue"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            backgroundColor: "purple"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            backgroundColor: "pink"
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            backgroundColor: "black"
        }
    }
}))

const NavBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery('960px');
    console.log(isMatch)
    return (
        <div className={classes.root} >

        </div>
    )
}

export default NavBar;