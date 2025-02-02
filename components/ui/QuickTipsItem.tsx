import { View, Text } from "react-native";
import React from "react";
import { QuickTipsPropsTypes } from "@/types/QuickTipsPropsTypes";

const QuickTipsItem: React.FC<QuickTipsPropsTypes> = ({ icon, label }) => {
	return (
		<View className="flex-row items-center">
			{icon}
			<Text className="text-white font-rubik-extrabold ml-2">
				{label}
			</Text>
		</View>
	);
};

export default QuickTipsItem;
