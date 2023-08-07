import React from 'react'
import { View, Text } from 'react-native'
import AppBar from './AppBar'
import RepoList from "./RepoList"
import { Route, Routes } from 'react-router-native';

const Main = () => {
  return (
    <View style={{flexGrow: 1}}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepoList />}/>
        <Route path="/signin" exact element={<Text>Still in progress</Text>}/>
      </Routes>
    </View>
  )
}

export default Main
