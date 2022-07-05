import * as React from 'react';
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';
import { observer } from 'mobx-react';
import { useStores } from '../../utils/mobx';


export const ThemeToggleContainer: React.FunctionComponent = (
  observer(() => {
   const { appConfiguration } = useStores()

  if(!appConfiguration) return null

  return (
      <ThemeToggle toggleTheme={() => appConfiguration.setTheme( appConfiguration.theme === 'light' ? 'dark' : 'light')} />
  );
}))