import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

	const [userNumber, setUserNumber] = useState()
	const [guessRounds, setGuessRounds] = useState(0)

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber)
		setGuessRounds(0)
	}
	const gameOverHandler = numberOfRounds => {
		setGuessRounds(numberOfRounds)
	}

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if(userNumber && guessRounds <= 0) {
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
	} else if (guessRounds > 0) {
		content = <GameOverScreen roundNumber={guessRounds} userNumber={userNumber} />
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
