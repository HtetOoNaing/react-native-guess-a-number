import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const GameOverScreen = ({ roundNumber, userNumber, onNewGame  }) => {
	return (
		<View style={styles.screen}>
			<Text>The game is over!</Text>
			<Text>Number of rounds {roundNumber}</Text>
			<Text>Number was {userNumber}</Text>
			<Button title='NEW GAME' onPress={onNewGame} /> 
		</View>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
