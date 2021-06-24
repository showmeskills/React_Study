import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from "@/assets/style/global"


import {
  Introduction,
  UIDesign,
  DemoMakeStyles,
  Hooks,
  Typo,
  ThemeDemo,
  PaperDemo,
  NavBar
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
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;
