import { TextInput, View } from "react-native";

interface CustomInputPropsTypes {
	name: string;
}

const CustomInput = () => {
	return (
		<View>
			<TextInput
				placeholder="Enter player name"
				className="h-12 px-4 border border-black p-2 rounded-lg"
			/>
		</View>
	);
};

export default CustomInput;
