import React, { useState } from 'react'
import { AppLoading } from 'expo'

import ListingsScreen from './app/screens/ListingsScreen'
import { NavigationContainer } from '@react-navigation/native'
import NavigationTheme from './app/navigation/NavigationTheme'
import AuthNavigator from './app/navigation/AuthNavigation'
import AuthContext from './app/auth/context'
import AppNavigator from './app/navigation/AppNavigator'
import authStorage from './app/auth/storage'

const App = () => {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => {
          setIsReady(true)
        }}
      />
    )

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
export default App
