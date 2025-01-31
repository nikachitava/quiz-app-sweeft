import { View, Text, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Countdown from "@/components/ui/Countdown";
import GameInfo from "@/components/ui/GameInfo";

const quizonboard = () => {
	const params = useLocalSearchParams();
	const { category, difficulty } = params;
	return (
		<SafeAreaView className="h-full">
			<ScrollView className="h-full flex-1 justify-center">
				<View className="font-rubik-semibold uppercase text-primary text-4xl text-center">
					Get Ready
				</View>
				<View className="text-center font-rubik-medium text-text">
					<Countdown
						initialCount={500}
						onCountdownComplete={() => router.push("/quiz")}
					/>
				</View>
				<GameInfo category={category} difficulty={difficulty} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default quizonboard;
