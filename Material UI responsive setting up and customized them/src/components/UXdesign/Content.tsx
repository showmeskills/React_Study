import { Grid } from "@material-ui/core";
import CoffeeCard from "./CoffeCard";
import logo from "@/assets/logo192.png";
import img from "@/assets/logo512.png";
const Content = ()=>{

    return (
        <Grid 
            container
            spacing={4}
        >
            <Grid item xs={12} sm={4}>
                <CoffeeCard
                    title={"Hamilton Beach Flexbrew"}
                    subtitle={"89.99"}
                    avatarSrc={logo}
                    description="wo cao ni mabi "
                    imgSrc={img}
                />
            </Grid>
        </Grid>
    )
}

export default Content;