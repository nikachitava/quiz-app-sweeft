import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useQuizStore } from "@/states/quizStore";
import { SafeAreaView } from "react-native-safe-area-context";

export default function quiz() {
	const { currentQuestion, points, questionsList, setQuestionList } =
		useQuizStore((state) => state);

	useEffect(() => {
		setQuestionList(24, "easy");
	}, []);

	console.log("questionsList", questionsList);

	return (
		<SafeAreaView className="h-full">
			<ScrollView className="h-full flex-1">
				<Text>Quizsz</Text>
				<View>
					<View>
						<Text>{questionsList[currentQuestion].category}</Text>
						<Text>
							{questionsList[currentQuestion].correct_answer}
						</Text>
						<Text>{questionsList[currentQuestion].difficulty}</Text>
						<Text>
							{questionsList[currentQuestion].incorrect_answers}
						</Text>
						<Text>{questionsList[currentQuestion].question}</Text>
						<Text>{questionsList[currentQuestion].type}</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
