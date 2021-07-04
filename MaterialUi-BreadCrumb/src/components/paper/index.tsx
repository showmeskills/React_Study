import { Paper, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
    palette:{
        type:"dark"
    }
})

const PaperDemo = () => {

    return (
        <ThemeProvider theme={theme}>
            <Paper
                component="div"
                elevation={3}
                square={false}
            >
                <Typography
                    variant="h6"
                >This is my typography</Typography>
            </Paper>
        </ThemeProvider>
    )
}

export default PaperDemo;