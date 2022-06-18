import { makeVar } from '@apollo/client';

interface AppConfig {
    theme: string;
}

function createInitialAppConfig() {
   const theme = localStorage.getItem('myApp.theme')

   return {
       ...initialAppConfig,
       theme: theme ? theme : initialAppConfig.theme,
   }
}

const initialAppConfig: AppConfig = {
    theme: 'light'
};

const appConfigVar = makeVar<AppConfig>(createInitialAppConfig());



export default appConfigVar;