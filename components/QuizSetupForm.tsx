import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomInput from "./CustomInput";
import CustomDropDown from "./CustomDropDown";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { quizSetupFormSchema } from "@/schemes/quizSetupFormSchema";

const QuizSetupForm = () => {
	const DATA = ["SPORT", "GEOGRAPHY", "SCIENSE", "DEVELOPMENT", "LANGUAGES"];

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(quizSetupFormSchema),
	});

	const onSubmit = (data: any) => {
		router.navigate({ pathname: "/quizonboard", params: data });
	};

	return (
		<View className="gap-4">
			<CustomInput name="playerName" control={control} />
			<CustomDropDown
				data={DATA}
				placeholder="Select category"
				name="category"
				control={control}
			/>
			<CustomDropDown
				data={DATA}
				placeholder="Select difficulty"
				name="difficulty"
				control={control}
			/>

			<TouchableOpacity
				onPress={handleSubmit(onSubmit)}
				className="bg-accent rounded-lg"
			>
				<Text className="text-center py-2 font-rubik-semibold text-neutral">
					Start Quiz
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default QuizSetupForm;
