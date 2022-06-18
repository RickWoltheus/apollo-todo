import * as React from 'react';
import { useAppConfigurationQuery } from '../../../../generated/graphql';
import appConfigVar from '../../../../data/appConfiguration/cache/appConfiguration';
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';


export const ThemeToggleContainer: React.FunctionComponent = () => {
  const { data } = useAppConfigurationQuery()

  console.log(data)
  if(!data?.appConfig) return null

  return (
    <ThemeToggle toggleTheme={() => appConfigVar({...data.appConfig, theme: data.appConfig?.theme === 'light' ? 'dark' : 'light' })} />
  );
}