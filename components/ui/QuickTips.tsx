import { View, Text } from "react-native";
import React from "react";
import QuickTipsItem from "./QuickTipsItem";
import { AntDesign } from "@expo/vector-icons";

const QuickTips = () => {
	return (
		<View className="mt-8">
			<Text className="text-blue-100 text-center mb-4 font-rubik-medium">
				Quick Tips:
			</Text>
			<View className="gap-2">
				<QuickTipsItem
					icon={
						<AntDesign
							name="clockcircleo"
							size={16}
							color="#93C5FD"
						/>
					}
					label="Take your time to read carefully"
				/>
				<QuickTipsItem
					icon={
						<AntDesign
							name="checkcircleo"
							size={16}
							color="#93C5FD"
						/>
					}
					label="Trust your first instinct"
				/>
			</View>
		</View>
	);
};

export default QuickTips;
