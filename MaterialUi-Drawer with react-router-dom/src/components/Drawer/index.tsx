import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
    drawer: {
        width: "160px"
    }
})
export const Home = () => {
    return (
        <div style={{width:"150px",height:"100px",margin:"auto"}}>
            this is home page
        </div>
    )
}
export const About = () => {
    return (
        <div style={{width:"150px",height:"100px",margin:"auto"}}>
            this is about page
        </div>
    )
}
export const Contact = () => {
    return (
        <div style={{width:"150px",height:"100px",margin:"auto"}}>
            this is a contact page
        </div>
    )
}


const DemoDrawer = () => {
    const classes = useStyles();
    const {push} = useHistory();
    const itemsList = [
        {
            text:"Home",
            icon:<InboxIcon/>,
            onClick:()=>push("/")
        },
        {
            text:"About",
            icon:<MailIcon />,
            onClick:()=>push("/about")
        },
        {
            text:"Contact",
            icon:<InboxIcon/>,
            onClick:()=>push("/contact")
        },
    ]
    return (
        <MUIDrawer
            className={classes.drawer}
            variant="permanent"
            open
        >
            <List>
                {itemsList.map((text, index) => (
                    <ListItem 
                        button key={text.text}
                        onClick={text.onClick}
                    >
                        <ListItemIcon>{text.icon}</ListItemIcon>
                        <ListItemText primary={text.text} />
                    </ListItem>
                ))}
            </List>
        </MUIDrawer>

    )
}

export default DemoDrawer;