import { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { useRouteMatch,useHistory } from "react-router";
const About = () => <div>About</div>
const Contact = ()=><div>Contact</div>

interface Match{
    page:string
}

const TabsDemo = () => {
    const tabNameToIndex:any = {
        0:"about",
        1:"contact",
    }
    const indexToTabName:any = {
        "about":0,
        "contact":1,
    }
    const {params:{page}} = useRouteMatch<Match>();
    const {push} = useHistory();
    const [seletedTab, setSelectedTab] = useState(indexToTabName[page]);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        push(`/home/${tabNameToIndex[newValue]}`)
        setSelectedTab(newValue)
    }
    return (
        <>
            <AppBar position="static">
                <Tabs value={seletedTab} onChange={handleChange}>
                    <Tab label="About"></Tab>
                    <Tab label="Contact"></Tab>
                </Tabs>
            </AppBar>
            {seletedTab === 0 && <About/>}
            {seletedTab === 1 && <Contact/>}
        </>
    )
}

export default TabsDemo;