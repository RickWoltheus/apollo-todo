import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';

interface Props {
    toggleTheme?: () => void
}

export const ThemeToggle: React.FunctionComponent<Props> = ({ toggleTheme }) => {
  const theme = useTheme();
  return (
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {theme.palette.mode === 'dark' ?  '🌞' : '🌚'}
      </IconButton>
  );

}