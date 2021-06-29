
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);
/*
    Grid => responsive layout
        container
        item
            => xs,sm,md,lg,xl,
            => xs:0,sm:600,md:960,lg:1280,xl:1920
            => xs={6} means 600>size>0, it will stand six Girds
            => sm={6} means 960>size>600, it will stand six Girds
            => md={6} means 1280>size>960, it will stand six Girds
            => lg={6} means 1920>size>1280, it will stand six Girds
            => xl={6} means size>1920, it will stand six Girds
            => every level there are totally 12 grids item;
        direction = "column/row"
        alignItems
        justifyContent

*/


const GridLayout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} container>
                    <Grid item xs={2}>
                        Welcome,Terry
                    </Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={2}>Logout</Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={6}>
                        Just seventeen, she already feels like she’s suffocating. Since her mother’s death, her father’s basically checked out, so she’s stuck raising her brothers by herself out in the New Mexico scrub. All Kate wants is a little distraction from the same-ole, same-ole that is her life.
                    </Grid>
                    <Grid item xs={6}>
                        Just seventeen, she already feels like she’s suffocating. Since her mother’s death, her father’s basically checked out, so she’s stuck raising her brothers by herself out in the New Mexico scrub. All Kate wants is a little distraction from the same-ole, same-ole that is her life.
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default GridLayout;