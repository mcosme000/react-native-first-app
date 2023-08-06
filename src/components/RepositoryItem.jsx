import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyleText'
import theme from '../theme/theme.js'
import RepositoryContent from './RepositoryContent'
import RepositoryStats from './RepositoryStats'


const RepositoryItem = (props) => {

  return (
    <View key={props.id} style={styles.container}>
      <RepositoryContent {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    marginBottom: 10,
  }
})

export default RepositoryItem
