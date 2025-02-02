import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { InfoCardProps } from "@/types/InfoCardProps";

export const InfoCard: React.FC<InfoCardProps> = ({
	icon,
	label,
	value,
	iconColor = "#93C5FD",
	labelColor = "text-blue-100",
	valueColor = "text-white",
}) => {
	return (
		<View className="bg-white/10 rounded-xl p-4 w-full">
			<View>
				<View className={`flex-row items-center mb-2`}>
					<AntDesign name={icon} size={20} color={iconColor} />
					<Text className={`ml-2 ${labelColor} text-sm`}>
						{label}
					</Text>
				</View>
				<Text className={`font-rubik-medium text-lg ${valueColor}`}>
					{value}
				</Text>
			</View>
		</View>
	);
};
