import React, { useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = ({ onStartGame }) => {
	const [enteredValue, setEnteredValue] = useState('')
	const [selectedNumber, setSelectedNumber] = useState()
	const [confirmed, setConfirmed] = useState(false)

	const numberInputHandler = inputText => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''))
	}
	const resetInputHandler = () => {
		setEnteredValue('')
		setConfirmed(false)
	}
	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue)
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
				{text: 'Okay', style: 'destructive', onPress: resetInputHandler}
			])
			return
		}
		setSelectedNumber(chosenNumber)
		setEnteredValue('')
		setConfirmed(true)
		Keyboard.dismiss()
	}

	let confirmedOutput;
	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<Button title='START GAME' onPress={() => onStartGame(selectedNumber)} />
			</Card>
		)
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game</Text>
				<Card style={styles.inputContainer}>
					<Text>Select a Number</Text>
					<Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} value={enteredValue} onChangeText={numberInputHandler} />
					<View style={styles.buttonContainer}>
						<View style={styles.button}><Button title='Reset' onPress={resetInputHandler} color={colors.accent} /></View>
						<View style={styles.button}><Button title='Confirm' onPress={confirmInputHandler} color={colors.primary} /></View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
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
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center'
	}
})
