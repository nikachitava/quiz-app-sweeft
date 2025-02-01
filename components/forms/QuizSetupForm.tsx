import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomInput from "../ui/CustomInput";
import CustomDropDown from "../ui/CustomDropDown";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { quizSetupFormSchema } from "@/schemes/quizSetupFormSchema";
import { useFetchCategoriesQuery } from "@/services/api/categoriesQueries";
import { quiz_difficulties } from "@/data/static/quiz_difficulties";
import { z } from "zod";

const QuizSetupForm = () => {
	const { control, handleSubmit } = useForm<
		z.infer<typeof quizSetupFormSchema>
	>({
		resolver: zodResolver(quizSetupFormSchema),
		defaultValues: {
			playerName: "",
			category: 0,
			difficulty: "",
		},
	});

	const { data } = useFetchCategoriesQuery();

	const onSubmit = (data: any) => {
		router.navigate({ pathname: "/quizonboard", params: data });
	};

	return (
		<View className="gap-4">
			<CustomInput name="playerName" control={control} />
			<CustomDropDown
				data={data?.trivia_categories}
				placeholder="Select category"
				name="category"
				control={control}
				valueField="id"
				getDisplayText={(item) => `${item.name}`}
			/>
			<CustomDropDown
				data={quiz_difficulties}
				placeholder="Select difficulty"
				name="difficulty"
				control={control}
				getDisplayText={(item) => `${item.name}`}
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
