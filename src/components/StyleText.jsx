import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from "../theme/theme.js"

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.primary,
    fontFamily: theme.fonts.main,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    marginBottom: theme.margin.titleMarginBottom
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.secondary
  },
  bold: {
    fontWeight: theme.fontWeight.bold
  },
  textSmall: {
    fontSize: theme.fontSizes.small
  }
})

export default function styledText ({children, subheading, colorPrimary, colorSecondary, bold, textSmall, ...restOfProps}) {
  const textStyles = [
    styles.text,
    subheading && styles.subheading,
    bold && styles.bold,
    colorPrimary && styles.colorPrimary,
    colorSecondary && styles.colorSecondary,
    textSmall && styles.textSmall,
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}
