import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const MainButton = ({ onPress, children }) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default MainButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 25
	},
	buttonText: {
		color: "white",
	}
});
