import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens';
import {Provider} from 'react-redux'
import store from './src/Redux/store'
const App = () => {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})