import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Content from "./Content"
import Header from "./header";

const useStyles = makeStyles({
    root: {
        backgroundColor: "purple",
    }
})

const UIDesign = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
        >
            <Grid item>
                <Header/>
            </Grid>
            <Grid
                item
                container
            >
                <Grid item xs={false} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <Content/>
                </Grid>
                <Grid item xs={false} sm={2}></Grid>
            </Grid>
        </Grid>
    )
}

export default UIDesign;