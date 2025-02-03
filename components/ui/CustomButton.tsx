import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { CustomButtonProps } from "@/types/CustomButtonProps";
import {
	getButtonStyle,
	getIconColor,
	getTextStyle,
} from "@/utils/CustomButtonUtils";

export const CustomButton: React.FC<CustomButtonProps> = ({
	onPress,
	variant = "primary",
	icon,
	label,
	disabled = false,
	fullWidth = true,
}) => {
	return (
		<Pressable
			className={`${getButtonStyle(
				variant
			)} py-4 rounded-xl flex-row justify-center items-center
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
					color={getIconColor(variant)}
					style={{ marginRight: 8 }}
				/>
			)}
			<Text
				className={`${getTextStyle(
					variant
				)} text-center font-rubik-semibold`}
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
