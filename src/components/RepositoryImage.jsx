import react from 'react';
import { View, StyleSheet, Image } from "react-native";
import theme from '../theme/theme.js';

const RepositoryImage = (props) => {
  return (
    <Image style={styles.avatar} source={{uri: props.avatarUrl}}/>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 4,
    marginRight: theme.marginRight.big
  }
})

export default RepositoryImage
