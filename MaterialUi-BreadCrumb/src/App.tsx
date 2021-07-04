import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from "@/assets/style/global"
// import {Switch,Route,Redirect} from "react-router-dom";

import {
  // Introduction,
  // UIDesign,
  // DemoMakeStyles,
  // Hooks,
  // Typo,
  // ThemeDemo,
  // PaperDemo,
  // // NavBar,
  // DarkMode
  // Templates
  // GridLayout,
  // CardDemo,
  //TableDemo
  // PokemonPage,
  // Pokemon,
  // PokemonNotFound,
  // TabsDemo
  // TableAndPagination
  // DemoDrawer,
  BreadCrumb
} from "@/components"
 import {Home,About,Contact} from "@/components/BreadCrumb"

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Introduction/> */}
      {/* <UIDesign/> */}
      {/* <Hooks/> */}
      {/* <ThemeDemo /> */}
      {/* <PaperDemo/> */}
      {/* <NavBar/> */}
      {/* <DarkMode/> */}
      {/* <Templates/> */}
      {/* <GridLayout/> */}
      {/* <CardDemo/> */}
      {/* <TableDemo/> */}
      {/* <Switch>
        <Route exact path="/" render={()=><PokemonPage/>}></Route>
        <Route exact path="/:id" render={()=><Pokemon/>}></Route>
      </Switch> */}
      {/* <Switch>
        <Route exact path="/home/:page" render={()=><TabsDemo/>}/>
        <Redirect to="/home/about" from="/home"/>
      </Switch>
       */}
      {/* <TableAndPagination/> */}
      {/* <DemoDrawer/>
       <Switch>
          <Route exact path="/" render={()=><Home/>}></Route>
          <Route exact path="/about" render={()=><About/>}></Route>
          <Route exact path="/contact" render={()=><Contact/>}></Route>
       </Switch> */}
       <BreadCrumb/>

       <Switch>
          <Route exact path="/" render={()=><Home/>}></Route>
          <Route exact path="/about" render={()=><About/>}></Route>
          <Route exact path="/about/contact" render={()=><Contact/>}></Route>
       </Switch>
    </ThemeProvider>
  );
}

export default App;
