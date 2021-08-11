import React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import { mainTheme } from 'styles/theme';
import { CssBaseline } from '@material-ui/core';

interface Props {
  element: any;
}

export const wrapRootElement = ({ element }: Props) => (
  <MUIThemeProvider theme={mainTheme}>
    <CssBaseline />
    <ThemeProvider theme={mainTheme}>{element}</ThemeProvider>
  </MUIThemeProvider>
);
