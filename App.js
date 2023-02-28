import { View, Text } from 'react-native'
import React from 'react'
import Start from './src/screen/Start'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screen/Login'
import { MyStack } from './src/navigation/StackNav'
const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App
