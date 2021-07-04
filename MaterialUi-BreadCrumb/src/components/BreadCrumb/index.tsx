import { Breadcrumbs, Link,Typography } from '@material-ui/core';
import { useHistory, useLocation,NavLink } from 'react-router-dom';

export const Home = () => {
    return (
        <div style={{ width: "150px", height: "100px", margin: "auto" }}>
            this is home page
            <NavLink to="/">Home</NavLink>
            <br/>
            <NavLink to="/about">about</NavLink>
            <br/>
            <NavLink to="/about/contact">contact</NavLink>
        </div>
    )
}
export const About = () => {
    return (
        <div style={{ width: "150px", height: "100px", margin: "auto" }}>
            this is about page
            <NavLink to="/">Home</NavLink>
            <br/>
            <NavLink to="/about">about</NavLink>
            <br/>
            <NavLink to="/about/contact">contact</NavLink>
        </div>
    )
}
export const Contact = () => {
    return (
        <div style={{ width: "150px", height: "100px", margin: "auto" }}>
            this is a contact page
            <NavLink to="/">Home</NavLink>
            <br/>
            <NavLink to="/about">about</NavLink>
            <br/>
            <NavLink to="/about/contact">contact</NavLink>
        </div>
    )
}

const BreadCrumb = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();
    const pathnames = pathname.split('/').filter(x => x);
    console.log(pathnames)
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                pathnames.length > 0?
                <Link onClick={()=>push("/")}>Home</Link>
                :
                <Typography>Home</Typography>
            }
            {
                pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0,index+1).join("/")}`
                    const isLast = index === pathnames.length - 1;
                    return (
                        isLast
                        ?
                        <Typography key={name}>{name}</Typography>
                        :
                        <Link key={index} onClick={() => push(routeTo)}>{name}</Link>
                    )
                })
            }
        </Breadcrumbs>
    )
}

export default BreadCrumb