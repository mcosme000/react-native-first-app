import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme/theme.js'
import StyledText from './StyleText.jsx'
import RepositoryImage from './RepositoryImage'


const RepositoryContent = (props) => {
  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <RepositoryImage {...props} />
      <View style={{flex: 1}}>
        <StyledText bold subheading>{props.fullName}</StyledText>
        <StyledText colorSecondary bold>{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 5
  },
  language: {
    fontSize: theme.fontSizes.small,
    marginTop: theme.marginTop.small,
    marginBottom: theme.marginBottom.small,
    padding: 6,
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
    alignSelf: 'flex-start',
    borderRadius: 5,
  }
})


export default RepositoryContent
