import { MobXProviderContext, Provider } from 'mobx-react'
import React from 'react'
import { AppConfig } from '../../../data/appConfiguration/cache/appConfiguration'

const appConfig = AppConfig.create(
  {},
)
export type AppConfigType = typeof appConfig

interface Stores {
  appConfiguration: AppConfigType
}

export function useStores() {
  return React.useContext((MobXProviderContext as any) as React.Context<Stores>)
}

export const StoreProvider: React.FunctionComponent = ({ children }) => {
  return (
    <Provider appConfiguration={appConfig}>
      {children}
    </Provider>
  )
}