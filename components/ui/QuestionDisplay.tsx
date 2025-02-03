import {
	View,
	Text,
	TouchableOpacity,
	Animated,
	Pressable,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useQuizStore } from "@/states/quizStore";
import { decodeHTMLEntities } from "@/utils/htmlDecoder";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const QuestionDisplay = () => {
	const {
		currentQuestion,
		points,
		questionsList,
		incrementPoint,
		nextQuestion,
	} = useQuizStore((state) => state);

	const getShuffledAnswers = () => {
		const answers = [
			...questionsList[currentQuestion].incorrect_answers,
			questionsList[currentQuestion].correct_answer,
		];
		return answers.sort(() => Math.random() - 0.5);
	};

	const checkAnswer = (answer: string) => {
		if (answer === questionsList[currentQuestion].correct_answer) {
			incrementPoint();
		}

		if (currentQuestion + 1 < questionsList.length) {
			nextQuestion();
		} else {
			router.replace("/results");
		}
	};

	const progressWidth = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(progressWidth, {
			toValue: ((currentQuestion + 1) / 10) * 100,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}, [currentQuestion]);

	if (questionsList.length === 0)
		return (
			<View className="h-full justify-center items-center">
				<Text className="font-rubik-extrabold text-text">
					Can't found question
				</Text>
				<Pressable onPress={() => router.replace("/")}>
					<Text>Try Again</Text>
				</Pressable>
			</View>
		);

	return (
		<View className="px-6 py-4 h-full">
			<View className="mb-8">
				<View className="h-2 bg-gray-200 rounded-full mb-6">
					<Animated.View
						style={{
							width: progressWidth.interpolate({
								inputRange: [0, 100],
								outputRange: ["0%", "100%"],
							}),
							height: 8,
							backgroundColor: "#3B82F6",
							borderRadius: 6,
						}}
					/>
				</View>

				<View className="flex-row justify-between items-center">
					<View className="flex-row items-center">
						<AntDesign
							name="questioncircleo"
							size={20}
							color="#3B82F6"
						/>
						<Text className="ml-2 font-rubik-medium text-gray-600">
							Question {currentQuestion + 1}/10
						</Text>
					</View>
					<View className="flex-row items-center">
						<AntDesign name="star" size={20} color="#F59E0B" />
						<Text className="ml-2 font-rubik-medium text-gray-600">
							Points: {points}
						</Text>
					</View>
				</View>
			</View>

			<View className="bg-white rounded-2xl p-6 shadow-lg mb-8">
				<Text className="font-rubik-medium text-xl text-gray-800 leading-relaxed">
					{decodeHTMLEntities(
						questionsList[currentQuestion].question
					)}
				</Text>
			</View>

			<View className="gap-4">
				{getShuffledAnswers().map((answer, index) => (
					<TouchableOpacity
						key={index}
						className="bg-blue-50 border-2 border-blue-100 rounded-xl p-4 active:bg-blue-100"
						onPress={() => checkAnswer(answer)}
					>
						<View className="flex-row items-center">
							<View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-3">
								<Text className="font-rubik-medium text-blue-600">
									{String.fromCharCode(65 + index)}
								</Text>
							</View>
							<Text className="flex-1 font-rubik-medium text-gray-700 text-lg">
								{decodeHTMLEntities(answer)}
							</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default QuestionDisplay;
