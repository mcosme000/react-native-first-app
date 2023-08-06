import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants'
import Main from './src/components/Main';
import RepoList from './src/components/RepoList';

export default function App() {
  return (
    <View style={{marginTop: Constants.statusBarHeight, padding: "10px"}}>
      <Main />
      <RepoList />
    </View>
  );
}
