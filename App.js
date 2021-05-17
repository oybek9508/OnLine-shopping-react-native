import React, { useState, useEffect } from 'react'
import ListingsScreen from './app/screens/ListingsScreen'
import { NavigationContainer } from '@react-navigation/native'
import NavigationTheme from './app/navigation/NavigationTheme'
import AuthNavigator from './app/navigation/AuthNavigation'

const App = () => {
  return (
    <>
      <NavigationContainer theme={NavigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </>
  )
}
export default App
