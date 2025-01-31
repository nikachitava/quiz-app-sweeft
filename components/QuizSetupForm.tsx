import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import CustomInput from "./CustomInput";
import CustomDropDown from "./CustomDropDown";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const quizSetupFormSchema = z.object({
	playerName: z.string().min(6, "Name must be at least 6 characters"),
	category: z.string().min(1, "You must select category"),
	difficulty: z.string().min(1, "You must select difficulty"),
});

const QuizSetupForm = () => {
	const DATA = ["SPORT", "GEOGRAPHY", "SCIENSE", "DEVELOPMENT", "LANGUAGES"];

	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(quizSetupFormSchema),
	});

	const playerName = watch("playerName");

	const onSubmit = () => {
		Alert.alert(
			"Alert Title",
			"My Alert Msg",
			[
				{
					text: "Cancel",
					onPress: () => Alert.alert("Cancel Pressed"),
					style: "cancel",
				},
			],
			{
				cancelable: true,
				onDismiss: () =>
					Alert.alert(
						"This alert was dismissed by tapping outside of the alert dialog."
					),
			}
		);
	};

	return (
		<View className="gap-4">
			<CustomInput name="playerName" control={control} />
			<CustomDropDown
				data={DATA}
				placehoder="Select category"
				name="category"
				control={control}
			/>
			<CustomDropDown
				data={DATA}
				placehoder="Select difficulty"
				name="difficulty"
				control={control}
			/>

			<View>
				<Text>PlayerName: {playerName} </Text>
				<Text>Category: </Text>
			</View>
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
