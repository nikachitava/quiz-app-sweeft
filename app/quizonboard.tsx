import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const quizonboard = () => {
	const params = useLocalSearchParams();
	const { playerName, category, difficulty } = params;
	return (
		<View>
			<Text>PlayerName: {playerName} </Text>
			<Text>Category: {category}</Text>
			<Text>Difficulty: {difficulty}</Text>
		</View>
	);
};

export default quizonboard;
