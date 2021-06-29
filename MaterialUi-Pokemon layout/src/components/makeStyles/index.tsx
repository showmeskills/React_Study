import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import {Theme} from "@material-ui/core"

interface Props{
    border: string
    backgroundColor:string
}


const useStyles = makeStyles((theme:Theme)=>({
    buttonStyle:{
        color:"red",
        border:(props:Props)=>props.border,
        backgroundColor:(props:Props)=>props.backgroundColor,
        [theme.breakpoints.down("xl")]:{
            color:"blue",
        },
        [theme.breakpoints.down("md")]:{
            color:"white",
        },
        [theme.breakpoints.down("xs")]:{
            color:"red",
        }
    },
    testStyle:{
        color:"green"
    }
}))


const Hooks = ()=>{
    return (
        <div>
            <Demo 
                border={"1px solid green"}
                backgroundColor = "orange"
            />
        </div>
    )
}

const Demo = (props:any)=>{
    const classes = useStyles(props);

    return (
        <div>
            <Button 
                className={classes.buttonStyle}
                fullWidth
            >Small button</Button>
            <h1 className={classes.testStyle}>this is text</h1>
        </div>
    )
}

export default Hooks;