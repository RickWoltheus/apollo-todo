import { makeVar } from '@apollo/client';
import { types } from 'mobx-state-tree';

interface AppConfig {
    theme: string;
}

export const AppConfig = types
    .model("AppConfig", {
        theme: 'light',
    })
    .actions((self) => ({
        setTheme: (theme: string) => {
            self.theme = theme
        }
    }))
