import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StyledText from './StyleText'
import theme from '../theme/theme.js'

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText bold subheading>{props.fullName}</StyledText>
      <StyledText colorSecondary bold>Description: {props.description}</StyledText>
      <StyledText textSmall>Language: {props.language}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    backgroundColor: theme.colors.background
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 5
  }
})

export default RepositoryItem
