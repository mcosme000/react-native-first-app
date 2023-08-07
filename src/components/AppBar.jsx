import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import StyledText from './StyleText'
import Constants from 'expo-constants'
import theme from '../theme/theme.js'
import { Link, useLocation } from 'react-router-native';

const AppBarTab = ({ children, to }) => {
  // we are recieving the TO, so if we know the pathname
  // we can know if the link is active or not.
  const { pathname } = useLocation()
  const active = pathname === to

  // If the link is active, we add it to the default styles.text
  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} style={styles.link}>
      <StyledText style={textStyles}>{children}</StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/about">About</AppBarTab>
        <AppBarTab to="/signin">Signin</AppBarTab>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight + 15,
    paddingHorizontal: 10,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeight.bold,
    paddingRight: 20
  },
  link: {
    textDecorationStyle: "none",
  },
  scroll: {
    paddingBottom: 15,
  },
  active: {
    color: theme.colors.accent,
  }
})

export default AppBar
