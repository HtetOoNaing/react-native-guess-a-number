import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GameOverScreen = ({ roundNumber, userNumber  }) => {
	return (
		<View style={styles.screen}>
			<Text>The game is over!</Text>
			<Text>Number of rounds {roundNumber}</Text>
			<Text>Number was {userNumber}</Text>
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
