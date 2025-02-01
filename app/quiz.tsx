import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@/components/ui/Logo";
import QuestionDisplay from "@/components/ui/QuestionDisplay";

export default function quiz() {
	return (
		<SafeAreaView className="h-full">
			<ScrollView className="h-full flex-1">
				<Logo />
				<QuestionDisplay />
			</ScrollView>
		</SafeAreaView>
	);
}
