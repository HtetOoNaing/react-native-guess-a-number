import React from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'
import { Button, StyleSheet, Text, View } from 'react-native'

const StartGameScreen = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} />
				<View style={styles.buttonContainer}>
					<View style={styles.button}><Button title='Reset' onPress={() => {}} color={colors.accent} /></View>
					<View style={styles.button}><Button title='Confirm' onPress={() => {}} color={colors.primary} /></View>
				</View>
			</Card>
		</View>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 15
	},
	button: {
		width: 100
	},
	input: {
		width: 50,
		textAlign: 'center'
	}
})
