import { View, Text } from "react-native";
import React from "react";
import CustomInput from "./CustomInput";
import CustomDropDown from "./CustomDropDown";

const QuizSetupForm = () => {
	const DATA = ["SPORT", "GEOGRAPHY", "SCIENSE", "DEVELOPMENT", "LANGUAGES"];

	return (
		<View className="gap-4">
			<CustomInput />
			<CustomDropDown data={DATA} placehoder="Choose the category" />

			<View>
				<Text>PlayerName: </Text>
				<Text>Category: </Text>
			</View>
		</View>
	);
};

export default QuizSetupForm;
