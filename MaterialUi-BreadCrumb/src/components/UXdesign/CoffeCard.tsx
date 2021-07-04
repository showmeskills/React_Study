import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button, Avatar, IconButton, CardMedia } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { red } from "@material-ui/core/colors";
import { PropsWithChildren } from "react";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: red[500],
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});
interface CoffeeCar {
    avatarSrc: string;
    title: string;
    subtitle: string;
    description?: string;
    imgSrc?: string;
}
const CoffeeCard = (props: PropsWithChildren<CoffeeCar>) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { avatarSrc, title, subtitle, description, imgSrc } = props;
    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={avatarSrc}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                style={{height:"150px"}}
                className={classes.media}
                image={imgSrc}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy now</Button>
                <Button size="small">offer</Button>
            </CardActions>
        </Card>
    )
}


export default CoffeeCard;