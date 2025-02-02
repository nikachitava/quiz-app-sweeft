export const getDifficultyColor = (difficulty: string) => {
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

export const getDifficultyIcon = (difficulty: string) => {
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