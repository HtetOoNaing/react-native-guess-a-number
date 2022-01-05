import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {

	const [fontsLoaded] = useFonts({
		Inter_900Black,
		'DancingScript-Regular': require('./assets/fonts/DancingScript-Regular.ttf'),
		'DancingScript-Bold': require('./assets/fonts/DancingScript-Bold.ttf'),
	});

	const [userNumber, setUserNumber] = useState()
	const [guessRounds, setGuessRounds] = useState(0)

	const newGameHandler = () => {
		setGuessRounds(0)
		setUserNumber(null)
	}

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber)
	}
	const gameOverHandler = numberOfRounds => {
		setGuessRounds(numberOfRounds)
	}

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
	} else if (guessRounds > 0) {
		content = <GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onNewGame={newGameHandler} />
	}

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={styles.screen}>
			<Header title="Guess a Number" />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
