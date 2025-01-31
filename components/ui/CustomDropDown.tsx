import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { CustomDropDownProps } from "@/types/CustomDropDropProps";
import { AntDesign } from "@expo/vector-icons";

const CustomDropDown: React.FC<CustomDropDownProps> = ({
	name,
	control,
	data,
	placeholder,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDropDownMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<View className="relative">
					<TouchableOpacity
						className="p-2 border border-black rounded-lg flex-row items-center justify-between pr-4"
						onPress={toggleDropDownMenu}
						activeOpacity={0.7}
					>
						<Text className="font-rubik-medium text-base text-text">
							{value ? value : placeholder}
						</Text>
						<AntDesign
							name={isMenuOpen ? "caretup" : "caretdown"}
						/>
					</TouchableOpacity>

					{isMenuOpen && (
						<View className="absolute top-[100%] left-0 right-0 mt-1 border border-gray-300 rounded-lg bg-white z-50 shadow-lg">
							<ScrollView
								className="p-2"
								showsVerticalScrollIndicator={false}
								style={{ maxHeight: 150 }}
							>
								{data.map((item, index) => (
									<TouchableOpacity
										key={index}
										onPress={() => {
											onChange(item);
											setIsMenuOpen(false);
										}}
										className={`p-3 ${
											index < data.length - 1
												? "border-b border-gray-200"
												: ""
										}`}
									>
										<Text
											className={`font-rubik-regular text-base ${
												value === item
													? "text-primary font-rubik-semibold"
													: "text-text"
											}`}
										>
											{item}
										</Text>
									</TouchableOpacity>
								))}
							</ScrollView>
						</View>
					)}

					{error && (
						<Text className="text-red-500 text-sm mt-1">
							{error.message}
						</Text>
					)}
				</View>
			)}
		/>
	);
};

export default CustomDropDown;
