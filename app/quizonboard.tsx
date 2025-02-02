import { View, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Countdown from "@/components/ui/Countdown";
import GameInfo from "@/components/ui/GameInfo";
import { useQuizStore } from "@/states/quizStore";
import QuickTips from "@/components/ui/QuickTips";

const quizonboard = () => {
	const params = useLocalSearchParams();
	const { category, difficulty } = params;

	const castedCategory = Number(category);
	const castedDifficulty = difficulty.toString().toLowerCase();

	const { setQuestionList } = useQuizStore((state) => state);

	useEffect(() => {
		setQuestionList(castedCategory, castedDifficulty);
	}, []);

	return (
		<SafeAreaView className="h-full bg-blue-500">
			<View className="h-full">
				<View className="h-full justify-center items-center px-6">
					<View className="items-center w-full">
						<Text className="font-rubik-semibold uppercase text-neutral text-4xl mb-2 tracking-wider">
							Get Ready!
						</Text>
						<Text className="text-white text-lg mb-8 font-rubik-medium">
							Your quiz is about to begin
						</Text>

						<View className="bg-white/10 rounded-full w-32 h-32 items-center justify-center mb-8">
							<View className="bg-white/20 rounded-full w-28 h-28 items-center justify-center">
								<Countdown
									initialCount={5}
									onCountdownComplete={() =>
										router.replace({
											pathname: "/quiz",
										})
									}
								/>
							</View>
						</View>

						<GameInfo category={category} difficulty={difficulty} />

						<QuickTips />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default quizonboard;
