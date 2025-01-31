import { View, Text } from "react-native";
import React from "react";
import { GameInfoProps } from "@/types/GameInfoProps";

const GameInfo: React.FC<GameInfoProps> = ({ category, difficulty }) => {
	return (
		<View className="mt-10 justify-between items-center px-20 gap-2">
			<View className="flex-row">
				<Text className="mr-2 font-rubik-medium text-text text-lg">
					Questions Category:
				</Text>
				<Text className="font-rubik-medium text-text text-lg">
					{category}
				</Text>
			</View>
			<View className="flex-row ">
				<Text className="mr-2 font-rubik-medium text-text text-lg">
					Difficulty:
				</Text>
				<Text className="font-rubik-medium text-text text-lg">
					{difficulty}
				</Text>
			</View>
		</View>
	);
};

export default GameInfo;
