

import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { useAppConfigurationQuery } from '../../../../generated/graphql';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

export const AppThemeProvider: React.FunctionComponent = ({ children }) => {
 const {data} = useAppConfigurationQuery()

  return (
    <ThemeProvider theme={data?.appConfig?.theme === 'dark' ? darkTheme : lightTheme}>
        {children}
    </ThemeProvider>
  );
}
