

import { createTheme, ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import { useStores } from '../../utils/mobx';

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

export const AppThemeProvider:React.FC = observer(({children}) => {
    const { appConfiguration } = useStores()

    return (
      <ThemeProvider theme={appConfiguration.theme === 'dark' ? darkTheme : lightTheme}>
          {children}
      </ThemeProvider>
    );
})
