import QuizSetupForm from "@/components/forms/QuizSetupForm";
import Logo from "@/components/ui/Logo";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	return (
		<SafeAreaView className="flex-1 justify-center bg-background">
			<View className="p-5">
				<Logo />

				<QuizSetupForm />
			</View>
		</SafeAreaView>
	);
}
