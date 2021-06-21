import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline} from '@material-ui/core';
import {theme} from "@/assets/style/global"


import {Introduction,UIDesign} from "@/components"



function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
        {/* <Introduction/> */}
        <UIDesign/>
    </ThemeProvider>
  );
}

export default App;
