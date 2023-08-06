import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyleText'
import theme from '../theme/theme.js'

const RepositoryStats = props => {

  const formatNumbers = value => {
    return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : value
  }
  return (
    <View style={styles.container}>
      <View>
        <StyledText bold align>Forks</StyledText>
        <StyledText textSmall align>{formatNumbers(props.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText bold align>Stars</StyledText>
        <StyledText textSmall align>{formatNumbers(props.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText bold align>Rating</StyledText>
        <StyledText textSmall align>{formatNumbers(props.ratingAverage)}</StyledText>
      </View>
      <View>
        <StyledText bold align>Reviews</StyledText>
        <StyledText textSmall align>{formatNumbers(props.reviewCount)}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: theme.colors.background
  }
})
export default RepositoryStats
