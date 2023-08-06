import React from 'react'
import { FlatList, Text } from 'react-native'
import repositories from "../data/repositories"
import RepositoryItem from './RepositoryItem'

const RepoList = () => {

  const listStyles = {
    padding: 20,
  }

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      style={listStyles}
      renderItem={({item: repo}) => (
        <RepositoryItem {...repo}/>
      )}
    />
  )
}

export default RepoList
