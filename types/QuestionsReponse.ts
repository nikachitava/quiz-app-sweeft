export interface TriviaResponse {
	response_code: number;
	results: TriviaQuestion[];
}

export interface BaseTriviaQuestion {
	type: "multiple" | "boolean";
	difficulty: "easy" | "medium" | "hard";
	category: string;
	question: string;
}

interface MultipleChoiceQuestion extends BaseTriviaQuestion {
	type: "multiple";
	correct_answer: string;
	incorrect_answers: string[];
}

interface BooleanQuestion extends BaseTriviaQuestion {
	type: "boolean";
	correct_answer: "True" | "False";
	incorrect_answers: ["True" | "False"];
}

export type TriviaQuestion = MultipleChoiceQuestion | BooleanQuestion;
