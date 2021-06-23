import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#fff',
                    "& #root": {
                        height: "9000px",
                        width: "100%",
                        overflow: "hidden",
                    }
                },
            },
        },
    },
});

