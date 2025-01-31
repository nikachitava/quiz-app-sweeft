import { TextInput } from "react-native";

interface CustomInputPropsTypes {
	name: string;
}

const CustomInput = () => {
	return (
		<TextInput
			placeholder="Enter player name"
			className="h-10 border border-black p-2 rounded-lg"
		/>
	);
};

export default CustomInput;
