import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TitleText = ({ children, style }) => (<Text style={{...styles.body, ...style}}>{children}</Text>)

export default TitleText

const styles = StyleSheet.create({
	body: {
		fontFamily: 'DancingScript-Regular',
		fontSize: 20
	}
})
