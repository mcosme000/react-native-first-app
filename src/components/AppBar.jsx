import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import StyledText from './StyleText'
import Constants from 'expo-constants'
import theme from '../theme/theme.js'
import { Link } from 'react-router-native';

const AppBarTab = ({ children, to }) => {
  return (
    <Link to={to} style={styles.link}>
      <StyledText style={styles.text}>{children}</StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="/signin">Signin</AppBarTab>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.primary,
    paddingVertical: Constants.statusBarHeight + 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeight.bold
  },
  link: {
    textDecorationStyle: "none",
  }
})

export default AppBar
