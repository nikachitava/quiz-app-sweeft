import { TriviaQuestion } from "./QuestionsReponse";

export type QuizStoreType = {
    points: number;
    incrementPoint: () => void;
    currentQuestion: number;
    nextQuestion: () => void;
    questionsList: TriviaQuestion[],
    setQuestionList: (category: number | string , difficulty: number | string) => Promise<void>;
    resetQuiz: () => void;
}