import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = ({ roundNumber, userNumber, onNewGame }) => {
	return (
		<View style={styles.screen}>
			<TitleText>The game is over!</TitleText>
			<Image
				// source={require("../assets/brazil.png")}
				source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/800px-Flag_of_the_Netherlands.svg.png"}}
				style={styles.image}
				resizeMode="contain"
			/>
			<BodyText style={styles.text}>Number of rounds {roundNumber}</BodyText>
			<BodyText style={styles.text}>Number was {userNumber}</BodyText>
			<Button title="NEW GAME" onPress={onNewGame} />
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "80%",
		height: 300,
	},
	text: {
		fontSize: 20,
		marginBottom: 10,
	},
});
