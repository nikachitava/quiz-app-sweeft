import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { CustomButtonProps } from "@/types/CustomButtonProps";

export const CustomButton: React.FC<CustomButtonProps> = ({
	onPress,
	variant = "primary",
	icon,
	label,
	disabled = false,
	fullWidth = true,
}) => {
	const getButtonStyle = () => {
		switch (variant) {
			case "primary":
				return "bg-primary";
			case "secondary":
				return "bg-gray-200";
			default:
				return "bg-primary";
		}
	};

	const getTextStyle = () => {
		switch (variant) {
			case "primary":
				return "text-neutral";
			case "secondary":
				return "text-gray-700";
			default:
				return "text-neutral";
		}
	};

	const getIconColor = () => {
		switch (variant) {
			case "primary":
				return "white";
			case "secondary":
				return "#374151";
			default:
				return "white";
		}
	};

	return (
		<Pressable
			className={`${getButtonStyle()} py-4 rounded-xl flex-row justify-center items-center
        ${disabled ? "opacity-50" : "opacity-100"}
        ${fullWidth ? "w-full" : "w-auto"}`}
			onPress={onPress}
			disabled={disabled}
			style={({ pressed }) => [pressed && styles.pressed]}
		>
			{icon && (
				<AntDesign
					name={icon}
					size={20}
					color={getIconColor()}
					style={{ marginRight: 8 }}
				/>
			)}
			<Text
				className={`${getTextStyle()} text-center font-rubik-semibold`}
			>
				{label}
			</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.8,
		transform: [{ scale: 0.98 }],
	},
});
