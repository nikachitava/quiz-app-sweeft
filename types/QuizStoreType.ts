import { TriviaQuestion } from "./QuestionsReponse";

export type QuizStoreType = {
    points: number;
    currentQuestion: number;
    questionsList: TriviaQuestion[],
    setQuestionList: (category: number, difficulty: string) => Promise<void>;
}