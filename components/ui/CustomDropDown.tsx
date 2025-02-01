import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { CustomDropDownProps } from "@/types/CustomDropDropProps";
import { AntDesign } from "@expo/vector-icons";

function CustomDropDown<T extends { id: number; name: string }>({
	name,
	control,
	data,
	placeholder,
	valueField = "name",
	getDisplayText = (item) => item.name,
}: CustomDropDownProps<T>) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDropDownMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const getSelectedItemDisplayText = (currentValue: any) => {
		if (!currentValue) return placeholder;

		const selectedItem = data?.find(
			(item) => item[valueField] === currentValue
		);

		return selectedItem ? getDisplayText(selectedItem) : placeholder;
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<View className="relative gap-2">
					<TouchableOpacity
						className="p-2 border border-black rounded-lg flex-row items-center justify-between pr-4"
						onPress={toggleDropDownMenu}
						activeOpacity={0.7}
					>
						<Text className="font-rubik-medium text-base text-text">
							{getSelectedItemDisplayText(value)}
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
								{data &&
									data.map((item) => (
										<TouchableOpacity
											key={item.id}
											onPress={() => {
												onChange(item[valueField]);
												setIsMenuOpen(false);
											}}
											className={`p-3 ${
												item.id < data.length - 1
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
												{item.name}
											</Text>
										</TouchableOpacity>
									))}
							</ScrollView>
						</View>
					)}

					{error && (
						<Text className="text-sm font-rubik-medium text-error">
							{error.message}
						</Text>
					)}
				</View>
			)}
		/>
	);
}

export default CustomDropDown;
