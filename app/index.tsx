import CustomInput from "@/components/CustomInput";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	return (
		<SafeAreaView className="flex-1 justify-center bg-background">
			<View className="p-5">
				<Text className="text-primary text-center font-bold py-4 text-2xl font-rubik-extrabold">
					Quizz App
				</Text>

				<CustomInput />
			</View>
		</SafeAreaView>
	);
}
