import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from "@/assets/style/global"


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
  GridLayout
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
      <GridLayout/>
    </ThemeProvider>
  );
}

export default App;
