import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CustomInput from "../ui/CustomInput";
import CustomDropDown from "../ui/CustomDropDown";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { quizSetupFormSchema } from "@/schemes/quizSetupFormSchema";
import { useFetchCategoriesQuery } from "@/services/api/categoriesQueries";

const QuizSetupForm = () => {
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(quizSetupFormSchema),
	});

	const onSubmit = (data: any) => {
		router.navigate({ pathname: "/quizonboard", params: data });
	};

	const { data } = useFetchCategoriesQuery();

	return (
		<View className="gap-4">
			<CustomInput name="playerName" control={control} />
			<CustomDropDown
				data={data?.trivia_categories}
				placeholder="Select category"
				name="category"
				control={control}
			/>
			<CustomDropDown
				data={data?.trivia_categories}
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
