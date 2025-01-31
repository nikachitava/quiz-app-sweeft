import { TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { CustomInputPropsTypes } from "@/types/CustomInputPropsTypes";

const CustomInput: React.FC<CustomInputPropsTypes> = ({ name, control }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value, onBlur },
				fieldState: { error },
			}) => (
				<View className="gap-2">
					<TextInput
						placeholder="Enter player name"
						className="h-12 px-4 border border-black p-2 rounded-lg font-rubik-regular"
						onChangeText={onChange}
						value={value}
						onBlur={onBlur}
					/>
					{error && (
						<Text className="text-sm font-rubik-medium text-error">
							{error.message}
						</Text>
					)}
				</View>
			)}
		/>
	);
};

export default CustomInput;
