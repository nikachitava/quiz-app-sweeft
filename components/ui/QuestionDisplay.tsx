import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useQuizStore } from "@/states/quizStore";
import { decodeHTMLEntities } from "@/utils/htmlDecoder";
import { router } from "expo-router";

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

		if (currentQuestion < questionsList.length - 1) {
			nextQuestion();
		} else {
			router.push("/results");
		}
	};

	if (questionsList.length === 0)
		return (
			<View>
				<Text>Cant' found question</Text>
			</View>
		);

	return (
		<View className="px-4">
			<View>
				<Text className="font-rubik-semibold text-text text-base">
					Question {currentQuestion + 1} / 10{" "}
				</Text>
				<Text className="font-rubik-semibold text-text text-base">
					Your Point: {points}
				</Text>
			</View>

			<View className="mt-10 border border-black p-4 rounded-xl">
				<Text className="font-rubik-medium text-lg">
					{decodeHTMLEntities(
						questionsList[currentQuestion].question
					)}
				</Text>

				<View className="gap-4 mt-10">
					{getShuffledAnswers().map((answer, index) => (
						<TouchableOpacity
							key={index}
							className="bg-text rounded-lg"
							onPress={() => checkAnswer(answer)}
						>
							<Text className="text-neutral font-rubik-medium p-2">
								{answer}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</View>
	);
};

export default QuestionDisplay;
