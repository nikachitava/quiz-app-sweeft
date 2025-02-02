import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuizStore } from "@/states/quizStore";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const results = () => {
	const { points, questionsList, resetQuiz, startAgain } = useQuizStore(
		(state) => state
	);

	const percentage = (points / questionsList.length) * 100;

	const handleGoBack = () => {
		resetQuiz();
		router.replace("/");
	};

	const handleTryAgain = () => {
		startAgain();
		router.replace("/quiz");
	};

	return (
		<SafeAreaView className="h-full flex-1 bg-neutral">
			<View className="bg-primary pt-12 pb-20 px-4 rounded-b-3xl">
				<View className="items-center mt-6">
					<AntDesign name="Trophy" size={48} color="#FFD700" />
					<View className="mt-4">
						<View className="items-center">
							<View className="bg-white/20 px-6 py-2 rounded-full">
								<Text className="text-neutral text-lg font-semibold font-rubik-semibold">
									Quiz Completed!
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>

			<View className="mx-4 -mt-12">
				<View className="bg-white rounded-2xl px-6 pt-6 pb-10 shadow-lg">
					<View className="items-center">
						<Text className="text-3xl font-bold text-primary font-rubik-extrabold">
							{percentage}%
						</Text>
						<Text className="text-text mt-1 font-rubik-medium">
							Your Score
						</Text>
					</View>

					<View className="flex-row justify-between mt-8">
						<View className="items-center flex-1">
							<Text className="text-2xl font-bold text-text font-rubik-medium">
								{questionsList.length}
							</Text>
							<Text className="text-text text-sm font-rubik-regular">
								Total Questions
							</Text>
						</View>
						<View className="items-center flex-1">
							<View className="flex-row items-center">
								<Text className="text-2xl font-bold text-success font-rubik-medium">
									{points}
								</Text>
								<AntDesign
									name="checkcircleo"
									size={16}
									color="#27AE60"
									style={{ marginLeft: 4 }}
								/>
							</View>
							<Text className="text-text text-sm font-rubik-regular">
								Correct
							</Text>
						</View>
						<View className="items-center flex-1">
							<View className="flex-row items-center">
								<Text className="text-2xl font-bold text-error font-rubik-medium">
									{questionsList.length - points}
								</Text>
								<AntDesign
									name="closecircleo"
									size={16}
									color="#E74C3C"
									style={{ marginLeft: 4 }}
								/>
							</View>
							<Text className="text-text text-sm font-rubik-regular">
								Wrong
							</Text>
						</View>
					</View>
				</View>
			</View>

			<View className="px-4 mt-6 gap-3">
				<Pressable
					className="bg-primary py-4 rounded-xl flex-row justify-center items-center"
					onPress={handleTryAgain}
				>
					<AntDesign
						name="reload1"
						size={20}
						color="white"
						style={{ marginRight: 8 }}
					/>
					<Text className="text-neutral text-center font-rubik-semibold">
						Try Again
					</Text>
				</Pressable>
				<Pressable
					className="bg-gray-200 py-4 rounded-xl flex-row justify-center items-center"
					onPress={handleGoBack}
				>
					<AntDesign
						name="home"
						size={20}
						color="#374151"
						style={{ marginRight: 8 }}
					/>
					<Text className="text-gray-700 text-center font-semibold">
						Back to Home
					</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default results;
