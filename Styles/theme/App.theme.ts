import { createMuiTheme, lighten } from '@material-ui/core/styles/';
import { Overrides } from '@material-ui/core/styles/overrides';

export const theme = createMuiTheme({
    spacing: (factor) => `${0.8 * factor}rem`,
    typography: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    //breakpoints: appBreakpoints,
    //palette: appPalette,
    //overrides,
  });