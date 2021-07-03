import { Grid } from "@material-ui/core";

import SimpleCard from "./Card";
const CardResponsiveLayout = () => {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            spacing={3}
        >
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
            >
                <SimpleCard />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
            >
                <SimpleCard />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
            >
                <SimpleCard />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
            >
                <SimpleCard />
            </Grid>
        </Grid>
    )
}
export default CardResponsiveLayout