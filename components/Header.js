import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../constants/colors'
import TitleText from './TitleText'

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<TitleText>{title}</TitleText>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 32,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center'
	},
})
