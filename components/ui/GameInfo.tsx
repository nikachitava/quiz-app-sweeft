import { View, Text } from "react-native";
import React from "react";
import { GameInfoProps } from "@/types/GameInfoProps";
import { useFetchCategoriesQuery } from "@/services/api/categoriesQueries";
import { InfoCard } from "./InfoCard";

const GameInfo: React.FC<GameInfoProps> = ({ category, difficulty }) => {
	const { data } = useFetchCategoriesQuery();

	const getCategoryName = (categoryID: number) => {
		const categoryName = data?.trivia_categories.find(
			(category) => category.id === categoryID
		);
		return categoryName;
	};

	const categoryName = getCategoryName(Number(category));

	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty.toLowerCase()) {
			case "easy":
				return "text-green-500";
			case "medium":
				return "text-yellow-500";
			case "hard":
				return "text-red-500";
			default:
				return "text-gray-500";
		}
	};

	const getDifficultyIcon = (difficulty: string) => {
		switch (difficulty.toLowerCase()) {
			case "easy":
				return "star";
			case "medium":
				return "staro";
			case "hard":
				return "warning";
			default:
				return "questioncircleo";
		}
	};

	return (
		<View className="bg-white/10 rounded-2xl p-6  backdrop-blur-lg w-full">
			<View className="space-y-4">
				<InfoCard
					icon="folder1"
					label="Category"
					value={categoryName?.name || ""}
				/>

				<InfoCard
					icon={getDifficultyIcon(difficulty.toString())}
					label="Difficulty"
					value={
						difficulty.toString().charAt(0).toUpperCase() +
						difficulty.toString().slice(1)
					}
					valueColor={getDifficultyColor(difficulty.toString())}
				/>

				<InfoCard icon="questioncircleo" label="Questions" value="10" />
			</View>
		</View>
	);
};

export default GameInfo;
