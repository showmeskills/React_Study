import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from "@/assets/style/global"
import {Switch,Route,Redirect} from "react-router-dom";

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
  PokemonPage,
  Pokemon,
  PokemonNotFound
} from "@/components"



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
      <Switch>
        <Route exact path="/" render={()=><PokemonPage/>}></Route>
        <Route exact path="/:id" render={()=><Pokemon/>}></Route>
        
      </Switch>


    </ThemeProvider>
  );
}

export default App;
